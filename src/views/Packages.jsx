import React from 'react'
import Navigation from '../components/Navigation'
import Fort from '../assets/tour-1.jpg'
import { IoStar } from "react-icons/io5";
import { BsClock } from "react-icons/bs"
const Packages = () => {
    return (
        <>
            <Navigation />
            <div className='global-banner-two position-relative'>
                <h1 className='position-absolute start-50 translate-middle fw-bolder text-light  ' style={{ fontSize: '60px', bottom: '120px' }}>
                    Packages
                </h1>
            </div>

            <div className='container mt-5 px-5 ' style={{ height: '100vh' }}>
                <div className='mt-5 '>
                    <h1 className='p-3 text-center fw-bolder' style={{ marginTop: '100px', fontSize: '60px' }}>Discover Rajasthan</h1>
                    <p className='mx-5 text-center '>Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives.<br /> Whether it’s for one day or a two-week vacation, close to home or a foreign land.</p>
                </div>

                <div className='row mt-5 d-flex ustify-content-between px-4'>
                    

                    <div className='col-md-4 px-3 py-4'>
                        <div className="card p-3" style={{ width: '23rem' }}>
                            <img src={Fort} className="card-img-top" alt="..." />
                            <div className="card-body p-0 mt-3">
                                <p>
                                    <span className='fs-5 fw-bolder'>Amber Place</span>
                                    <span className=' border border-primary rounded-4 fs-6 py-1 px-2 float-end mb-1' >
                                        5 Tours
                                    </span>
                                </p>
                                <div className='w-50 h-50'>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning  ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <small className='ms-2 mt-5'>(5 review)</small>
                                </div>
                                <div className='mt-3 '>
                                    <small>Richly varied landscapes, luxurious accommodation.</small>
                                    <div>-------------------------------------</div>
                                </div>
                                <div className='mt-1'>
                                    <p><BsClock /><span className='mx-2'>5 days</span> | <span className='mx-2'>259P, Himalaya Ag</span></p>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-md-4 px-3 py-4'>
                        <div className="card p-3" style={{ width: '23rem' }}>
                            <img src={Fort} className="card-img-top" alt="..." />
                            <div className="card-body p-0 mt-3">
                                <p>
                                    <span className='fs-5 fw-bolder'>Amber Place</span>
                                    <span className=' border border-primary rounded-4 fs-6 py-1 px-2 float-end mb-1' >
                                        5 Tours
                                    </span>
                                </p>
                                <div className='w-50 h-50'>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning  ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <small className='ms-2 mt-5'>(5 review)</small>
                                </div>
                                <div className='mt-3 '>
                                    <small>Richly varied landscapes, luxurious accommodation.</small>
                                    <div>-------------------------------------</div>
                                </div>
                                <div className='mt-1'>
                                    <p><BsClock /><span className='mx-2'>5 days</span> | <span className='mx-2'>259P, Himalaya Ag</span></p>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='col-md-4 px-3 py-4'>
                        <div className="card p-3" style={{ width: '23rem' }}>
                            <img src={Fort} className="card-img-top" alt="..." />
                            <div className="card-body p-0 mt-3">
                                <p>
                                    <span className='fs-5 fw-bolder'>Amber Place</span>
                                    <span className=' border border-primary rounded-4 fs-6 py-1 px-2 float-end mb-1' >
                                        5 Tours
                                    </span>
                                </p>
                                <div className='w-50 h-50'>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning  ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <span><IoStar className='text-warning ' /></span>
                                    <small className='ms-2 mt-5'>(5 review)</small>
                                </div>
                                <div className='mt-3 '>
                                    <small>Richly varied landscapes, luxurious accommodation.</small>
                                    <div>-------------------------------------</div>
                                </div>
                                <div className='mt-1'>
                                    <p><BsClock /><span className='mx-2'>5 days</span> | <span className='mx-2'>259P, Himalaya Ag</span></p>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>



            </div>
            <div className='my-5 text-center'>
                <button type="button" className="btn btn-outline-primary btn-lg">LoadMore....</button>
            </div>

        </>
    )
}

export default Packages