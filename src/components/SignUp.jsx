import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import axios from 'axios';
import Toast from './Toast';


const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Mobile number must be of 10 digits").required(),
    email: Yup.string().email('invalid email address').required('email is required'),
    password: Yup.string().required()
})

const Signup = ({ setShowForm }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const navigate = useNavigate()


    async function handleSubmit(values) {
        try {
            const response = await axios.post('http://localhost:5000/api/signup', values)
            console.log(response)
            if (response.status === 200) {
                setSuccessMessage("Signup successful")
                // console.log("successful")
                setShowForm("login")
            }
            else {
                setErrorMessage(response.data.message)

            }
        }
        catch (error) {
            setErrorMessage(error.response.data.message)
        }


    }




    return (
        <>

            <Formik
                initialValues={{ name: '', phone: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <Field type="text" name="name" className="form-control border-primary " placeholder='Enter your name' />
                            <ErrorMessage name="name" component="small" className='text-danger' />
                        </div>
                        <div className="mb-3">
                            <Field type="text" name="phone" className="form-control border-primary" placeholder='Enter your phone number' />
                            <ErrorMessage name="phone" component="small" className='text-danger' />
                        </div>
                        <div className="mb-3">
                            <Field type="email" name="email" className="form-control border-primary" placeholder='Enter your email' />
                            <ErrorMessage name="email" component="small" className='text-danger' />
                        </div>
                        <div className="input-group mb-3 border border-primary rounded-2">
                            <Field type={showPassword ? "text" : "password"} name="password" className="form-control border-0" placeholder='Enter your password' />
                            <span className="input-group-text bg-white border-0">
                                {!showPassword ? <VscEye onClick={() => setShowPassword(true)} /> :
                                    <VscEyeClosed onClick={() => setShowPassword(false)} />}
                            </span>
                        </div>
                        <div className=' mb-3'>
                            <ErrorMessage name="password" component="small" className='text-danger' />
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting} >Signup</button>

                    </Form>)}
            </Formik>


            {
                errorMessage && <Toast error={errorMessage} />
            }
            {
                successMessage && <Toast success={successMessage} />
            }

        </>


    )


}

export default Signup