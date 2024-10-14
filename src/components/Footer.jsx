import React from 'react'

const Footer = () => {
    return (
        <footer className='main-footer position-relative'>
            {/* <div className="bg-layer" style={{ backgroundImage: 'url("../assets/f-bottom-bg.svg")' }} /> */}
            <div className="bg-layer" />

            <div className="container">
                <div className='row mx-0  big-container'>
                    <div className="col-md-4">
                        <p className='fs-1'>Happy Journey</p>
                        <p>Treker was founded in 1991 by a group of safety-focused professionals who created The Wingman Standard for rigorously vetting air charter operators.</p>
                    </div>
                    <div className="col-md-2 offset-md-2">
                        <p className='fw-semibold fs-5 border-bottom border-3 border-primary'>Quick Links</p>
                        <p className='mb-0'>About Us</p>
                        <p className='mb-0'>News & press</p>
                        <p className='mb-0'>FAQs</p>
                        <p className='mb-0'>Careers</p>
                        <p className='mb-0'>Rewards</p>
                        <p className='mb-0'>Work with Us</p>
                    </div>
                    <div className="col-md-2 offset-md-2">
                        <p className='fw-semibold fs-5 border-bottom border-3 border-primary'>Quick Links</p>
                        <p className='mb-0'>About Us</p>
                        <p className='mb-0'>News & press</p>
                        <p className='mb-0'>FAQs</p>
                        <p className='mb-0'>Careers</p>
                        <p className='mb-0'>Rewards</p>
                        <p className='mb-0'>Work with Us</p>
                    </div>
                </div>
            </div>
            <div className="container position-relative">
                <p className='float-end copyright my-4'>Copyright © 2022 Happy Journey. All Rights Reserved. Developed by Nandita</p>
            </div>
        </footer>
    )
}

export default Footer