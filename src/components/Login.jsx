import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'

import { Link } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import axios from 'axios';
import Toast from './Toast';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
    email: Yup.string().email('invalid email address').required('email is required'),
    password: Yup.string().required('password is required')
})

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const dispatch = useDispatch()

    async function handleSubmit(values) {
        try {
            const response = await axios.post('http://localhost:5000/api/login', values)
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("traveluser", JSON.stringify(response.data))
                // alert('Login Sucessful.....')
                dispatch({
                    type: 'LOGIN', payload: {
                        name: response.data.name,
                        avatar: response.data.avatar
                    }
                })
                setSuccessMessage("Signin successful")
            }
            else {
                // alert(response.data.message)
                setErrorMessage(response.data.message)
            }
        }
        catch (error) {
            // alert(error.message)
            setErrorMessage(error.message)
        }

    }

    return (

        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values)
                    resetForm()
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <Field type="email" name="email" className="form-control border-primary" placeholder='Enter your email' />
                            <ErrorMessage name="email" component="small" className='text-danger' />
                        </div>
                        <div className="input-group border border-primary rounded-2">
                            <Field type={showPassword ? "text" : "password"} name="password" className="form-control border-0" placeholder='Enter your password' />
                            <span className="input-group-text bg-white border-0">
                                {!showPassword ? <VscEye onClick={() => setShowPassword(true)} /> :
                                    <VscEyeClosed onClick={() => setShowPassword(false)} />}
                            </span>
                        </div>
                        <div className=' mb-3'>
                            <ErrorMessage name="password" component="small" className='text-danger' />
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting}>Login</button>
                        {/* <p className='text-center my-3'> Don't have an account? <Link to="/signup" >Signup</Link></p> */}
                    </Form>)}
            </Formik>
            {/* <p className='mt-2 text-danger' data-bs-toggle="modal" data-bs-target="#forgotpassword" >Forgot Password</p> */}
            <button className="btn border border-0 text-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Forgot Password</button>




            {
                errorMessage && <Toast error={errorMessage} />
            }
            {
                successMessage && <Toast success={successMessage} />
            }

        </>
    )
}

export default Login