import React from 'react'
import Navigation from '../components/Navigation'
import { FaCheckCircle } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const ThankyouPage = () => {
    const location=useLocation()
    
    return (
        <>
            {/* <Navigation /> */}
            <div className='container mt-4 d-flex justify-content-center'>
                <div className='border my-5 shadow p-3 mb-5 bg-body-tertiary rounded' style={{ height: '500px', width: '700px' }}>
                    <div className='text-center py-5'>
                        <p className="mt-5 "><FaCheckCircle className='text-primary' style={{ fontSize: '100px' }} /></p>
                        <h4 className='mt-4 text-secondary'>Booking Ref: {location.state?.ref ?? ''}</h4>
                        <h3 className='mt-3'>You successful created your booking</h3>
                        <NavLink to="/" className='fs-3 text-decoration-none mt-5'>Go To Home Page</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankyouPage