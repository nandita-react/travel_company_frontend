import React, { useState } from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import axios from 'axios';
import Toast from '../../components/Toast';


const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Mobile number must be of 10 digits").required(),
    email: Yup.string().email('invalid email address').required('email is required'),
    password: Yup.string().required()
})

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(values) {
        try {
            const response = await axios.post('http://localhost:5000/api/signup', values)
            console.log(response)
            if (response.status === 200) {
                navigate(`/login`, { replace: true })
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

        <div className="p-3 text-white   vh-100"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#ecfffb'
            }}
        >
            <div className='border shadow-sm rounded-3 border-primary bg-white text-dark p-5 ' style={{ width: '30%' }}>
                <h1 style={{ textAlign: 'center' }}>Signup</h1>
                <div className='d-flex my-4'>
                    <button className='border border-primary  w-50 me-2  py-2 rounded-2'><img src={Google} width={20} className='mx-2' />Google</button>
                    <button className='border border-primary w-50 ms-2 py-2 rounded-2'><img src={Facebook} width={20} className='mx-2' />Facebook</button>

                </div>
                <p>-------------------- or -----------------</p>
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
                            <button className="btn btn-primary w-100" type="submit" disabled={isSubmitting} >Signup</button>
                            <p className='text-center my-3'>Already have an account? <Link to="/login">Login</Link></p>

                        </Form>)}
                </Formik>
            </div>


            {
                errorMessage && <Toast error={errorMessage} />
            }

        </div>


    )


}

export default Signup