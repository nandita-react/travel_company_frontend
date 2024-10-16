import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Toast from '../components/Toast';
const apiUrl = import.meta.env.VITE_API_URL

// import ThankyouPage from './ThankyouPage';
const validationSchema = Yup.object({
    firstname: Yup.string().required(),
    email: Yup.string().email('invalid email address').required('email is required'),
    address_1: Yup.string().required(),
    city: Yup.string().required(),
    postal_code: Yup.number().required(),
    lastname: Yup.string().required(),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Mobile number must be of 10 digits").required(),
    address_2: Yup.string().required(),
    state: Yup.string().required(),
    country: Yup.string().required(),
    textarea: Yup.string().required(),
    payment_method: Yup.string().required(),
    agreeToTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
})
const CheckOut = () => {
    const [bookingDetails, setBookingDetails] = useState({})
    const [specialId, setSpecialId] = useState("")
  const [errorMessage,setErrorMessage]=useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        setBookingDetails(JSON.parse(localStorage.getItem("bookingdetails")))
    }, [])

    async function handleSubmit(values) {
        try {
            const authuser = JSON.parse(localStorage.getItem("traveluser"))
           
               if(!authuser){
                setErrorMessage("Please Login To Book")
                return
               }
            const headers = {
                'Authorization': `Bearer ${authuser.token}`,
            }
            const requestBody = {
                amount: bookingDetails.totalAmount,
                paid: bookingDetails.totalAmount / 2,
                paxDetails: {
                    adult: bookingDetails.adult,
                    infant: bookingDetails.infant
                },
                billingAddress: {
                    firstname: values.firstname,
                    email: values.email,
                    address_1: values.address_1,
                    city: values.city,
                    postal_code: values.postal_code,
                    lastname: values.lastname,
                    phone: values.phone,
                    address_2: values.address_2,
                    state: values.state,
                    country: values.country,
                    // textarea:values.textarea,
                    payment_method: values.payment_method,
                    // agreeToTerms:values.agreeToTerms
                },
                tour: bookingDetails.id
            }
            const response = await axios.post(`${apiUrl}bookings`, requestBody, { headers })
            // console.log(response.data)
            navigate("/thankyoupage", { replace: true, state: { ref: response.data.ref } })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <Navigation />
            <div className='global-banner-two position-relative'>
                <h1 className='position-absolute start-50 translate-middle fw-bolder text-light  ' style={{ fontSize: '60px', bottom: '120px' }}>
                    Check Out
                </h1>
            </div>

            <div className="container py-2 px-0 mt-5" >
                <div className='d-flex'>

                    <div className=' pe-3' style={{ width: '70%' }}>
                        <Formik
                            initialValues={{
                                firstname: '', email: '', address_1: '', city: '', postal_code: '', lastname: '', phone: '', address_2: '', state: '', country: '', textarea: '',
                                payment_method: '', agreeToTerms: false
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values,{resetForm}) =>{handleSubmit(values)
                            
                            resetForm()}}

                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='row justify-content-between'>
                                        <h2 className='mt-5 mb-3 fw-bolder fs-4'>Booking Submission</h2>


                                        <div className="col-6 " >
                                            <div className="mb-3 my-2 ">

                                                <label htmlFor="firstname" className="form-label">First Name  <span className='text-danger'>*</span></label>
                                                <Field type="text" name="firstname" className="form-control p-2" id="firstname" aria-describedby="emailHelp" />
                                                <ErrorMessage name="firstname" component="small" className='text-danger' />


                                            </div>
                                            <div className="mb-3 my-2">
                                                <label htmlFor="email" className="form-label">Email address <span className='text-danger'>*</span></label>
                                                <Field type="email" name="email" className="form-control  p-2" id="email" aria-describedby="emailHelp" />
                                                <ErrorMessage name="email" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="address_1" className="form-label">Address Line 1 <span className='text-danger'>*</span></label>
                                                <Field type="text" name='address_1' className="form-control p-2" id="address_1" aria-describedby="emailHelp" />
                                                <ErrorMessage name="address_1" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="city" className="form-label">City <span className='text-danger'>*</span></label>
                                                <Field type="text" name="city" className="form-control p-2" id="city" aria-describedby="emailHelp" />
                                                <ErrorMessage name="city" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="postal_code" className="form-label">ZIP code/Postal code <span className='text-danger'>*</span></label>
                                                <Field type="number" name="postal_code" className="form-control p-2" id="postal_code" aria-describedby="emailHelp" />
                                                <ErrorMessage name="postal_code" component="small" className='text-danger' />


                                            </div>

                                        </div>

                                        <div className='col-6'>
                                            <div className="mb-3 my-2">
                                                <label htmlFor="lastname" className="form-label">Last Name <span className='text-danger'>*</span></label>
                                                <Field type="text" name="lastname" className="form-control p-2" id="lastname" aria-describedby="emailHelp" />
                                                <ErrorMessage name="lastname" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="phone" className="form-label">Phone <span className='text-danger'>*</span></label>
                                                <Field type="tel" name="phone" className="form-control p-2" id="phone" aria-describedby="emailHelp" />
                                                <ErrorMessage name="phone" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="address_2" className="form-label">Address Line 2 <span className='text-danger'>*</span></label>
                                                <Field type="text" name="address_2" className="form-control p-2" id="address_2" aria-describedby="emailHelp" />
                                                <ErrorMessage name="address_2" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="state" className="form-label">State/Province/Region <span className='text-danger'>*</span></label>
                                                <Field type="text" name="state" className="form-control p-2" id="state" aria-describedby="emailHelp" />
                                                <ErrorMessage name="state" component="small" className='text-danger' />


                                            </div>

                                            <div className="mb-3 my-2">
                                                <label htmlFor="country" className="form-label">Country <span className='text-danger'>*</span></label>
                                                <Field type="text" name="country" className="form-control p-2" id="country" aria-describedby="emailHelp" />
                                                <ErrorMessage name="country" component="small" className='text-danger' />


                                            </div>
                                        </div>
                                    </div>


                                    <div className="mb-3 mt-4">
                                        <label htmlFor="description" className="form-label">Special Requirements</label>
                                        <Field as="textarea" name="textarea" className="form-control" id="description" rows={3} />
                                        <ErrorMessage name="textarea" component="small" className='text-danger' />

                                    </div>

                                    <div className='mt-5'>
                                        <h2 className='py-2'>Select Payment Method</h2>


                                        <Field as="select" name="payment_method" id="payment_method" className="form-select">
                                            <option value="" label="Select a option" />
                                            <option value="red" label="one" />
                                            <option value="blue" label="two" />
                                            <option value="green" label="three" />
                                            <option value="yellow" label="four" />
                                        </Field>

                                    </div>

                                    <div className='mt-4 mx-2'>
                                        <div className="form-check">
                                            <Field className="form-check-input fs-5  border-black " type="checkbox" id="flexCheckDefault" name="agreeToTerms" />
                                            <label className="form-check-label p-1" htmlFor="flexCheckDefault">
                                                I have read and accept the Privacy Policy  and Privacy Policy
                                            </label>
                                        </div>

                                    </div>
                                    <div className="mt-2 mb-5">
                                        <button type="submit" className="btn btn-primary btn-lg rounded-5" disabled={isSubmitting}>Submit</button>
                                    </div>
                                </Form>)}
                        </Formik>

                    </div>
                    <div className='ps-3' style={{ width: '30%', position: 'sticky', top: 0, height: '100%' }}>
                        <p className='mt-5 fs-4 fw-semibold'>Your Booking</p>
                        <div className='border rounded-3 p-3 border-2 shadow-sm'>
                            <div className='border-bottom pb-2'>
                                <p>
                                    <span className='text-secondary'>Tour type</span>
                                    <span className='float-end'>Daily Tour</span>
                                </p>
                                <p>
                                    <span className='text-secondary'>Departure date</span>
                                    <span className='float-end'>{bookingDetails.departure}</span>
                                </p>
                                <p>
                                    <span className='text-secondary'>Duration</span>
                                    <span className='float-end'>{bookingDetails.duration}</span>
                                </p>
                                <p>
                                    <span className='text-secondary'>Number of Paxes</span>
                                    <span className='float-end'>{parseInt(bookingDetails.adult) + parseInt(bookingDetails.infant)}<BsFillInfoCircleFill className='mb-1' /></span>
                                </p>
                                {/* <p>
                                    <span className='text-secondary'>Number of Senior Citizen</span>
                                    <span className='float-end'>4</span>
                                </p>
                                <p>
                                    <span className='text-secondary'>Number of Child</span>
                                    <span className='float-end'>4</span>
                                </p>
                                <p>
                                    <span className='text-secondary'>Number of Infant</span>
                                    <span className='float-end'>4</span>
                                </p> */}
                            </div>
                            <div className='border-bottom pb-3'>
                                <p className='fw-semibold mt-3'>Coupon Code</p>
                                <div className="row mx-0 justify-content-between">
                                    <div className="col-8 p-0">
                                        <input type="text" className='form-control rounded-5 bg-light' name="" id="" />
                                    </div>
                                    <div className="col-4 p-0 text-end">
                                        <button className="btn btn-primary rounded-5">APPLY</button>
                                    </div>
                                </div>
                            </div>

                            <div className='border-bottom pt-3'>
                                <p>
                                    <span >Subtotal</span>
                                    <span className='float-end'>€{bookingDetails.totalAmount}</span>
                                </p>
                            </div>

                            <p className='mt-3 fw-semibold'>
                                <span >Pay Amount 50%(Advance)</span>
                                <span className='float-end'>€{bookingDetails.totalAmount / 2}</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {errorMessage && <Toast error={errorMessage}/>}
        </>
    )
}

export default CheckOut