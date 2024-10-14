import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import gallery2 from '../assets/gallery-2.jpg'

const Wishlist = () => {
    return (
        <div >
            <Navigation />
            <div className='global-banner-two position-relative'>
                <h1 className='position-absolute start-50 translate-middle fw-bolder text-light  ' style={{ fontSize: '60px', bottom: '120px' }}>
                    WishList</h1>

            </div>
            <div className='container '>
                <div className="card mb-3 mt-5 w-100" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={gallery2} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center">
                            <span>X</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Wishlist