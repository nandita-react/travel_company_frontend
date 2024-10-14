import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook-logo.png'
import { Link } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import axios from 'axios';


const validationSchema = Yup.object({
    email: Yup.string().email('invalid email address').required('email is required'),
    password: Yup.string().required('password is required')
})
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    async function handleSubmit(values) {
        try {
            const response = await axios.post('http://localhost:5000/api/login', values)
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem("traveluser", JSON.stringify(response.data))
                alert('Login Sucessful.....')
            }
            else {
                alert(response.data.message)

            }
        }
        catch (error) {
            alert(error.message)
        }

    }

    return (

        <div className="p-3 text-white   vh-100"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#ecfffb'
            }}
        >
            <div className='border shadow-sm rounded-3 w-45 border-primary bg-white text-dark p-5 '>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values,{ resetForm }) => {
                        handleSubmit(values)
                        resetForm()
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form >
                            <div className='d-flex my-4'>
                                <button className='border border-primary  w-50 me-2 py-2 rounded-2'><img src={Google} width={20} className='mx-2' />Google</button>
                                <button className='border border-primary w-50 ms-2 py-2 rounded-2'><img src={Facebook} width={20} className='mx-2' />Facebook</button>
                            </div>
                            <p>--------------------or--------------------</p>

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
                            <button className="btn btn-primary w-100 py-2" type="submit" disabled={isSubmitting}>Login</button>
                            <p className='text-center my-3'> Don't have an account? <Link to="/signup" >Signup</Link></p>
                        </Form>)}
                </Formik>
            </div>




        </div>


    )
}

export default Login
