import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import {login} from '../store/actions/authActions'

const validationSchema = Yup.object({
    email: Yup.string().email('invalid email address').required('email is required'),
    password: Yup.string().required('password is required')
})

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    dispatch(login(values))
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
                    </Form>)}
            </Formik>
            <button className="btn border border-0 text-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Forgot Password</button>
        </>
    )
}

export default Login