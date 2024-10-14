import React, { useEffect, useRef, useState } from 'react'
import BannerImage from '../../assets/banner-image-1.svg'
import { BsCursorFill } from "react-icons/bs";

const Banner = () => {

    return (
        <>
            <div style={{ backgroundColor: '#f9fcff', height: '110vh' }}>
                <div className='container h-100 '>
                    <div className='d-flex justify-content-start align-items-center' style={{ height: '95%' }}>
                        <div className='w-50 ' >
                            <div className='banner-title-bg py-2'>
                                <h2 className='fw-bold ' style={{ fontSize: '50px', }}>Never Stop</h2>
                                <h1 className='fw-bolder' style={{ fontSize: '100px', }}>Exploring</h1>
                            </div>
                            <p style={{ color:'#2E2E2E' }}>
                                Their house is a museum where people come to see ‘em. They really are a scream the Addams Family. These days are all Happy and Free. These days are all share them with me oh baby.
                                <br />
                                <button type="button" className="btn btn-outline-primary mt-5 rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Explore Destinations
                                    <BsCursorFill className='ms-1 fs-4' />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <img src={BannerImage} className='position-absolute ' style={{ top: '62px', right: '0', zIndex: '0' }} />
            </div>

            <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" >
                <div className="modal-dialog modal-fullscreen " >
                    <div className="modal-content" style={{ backgroundColor: '#f9fcff' }}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Explore Destinations</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body overflow-y-hidden">
                            <div className="container">
                                <div className="row mx-0 justify-content-center ">
                                    <div className="col-md-6">
                                        <div className='bg-white '>
                                            <input type="text" className="form-control mt-1 rounded-pill border border-primary search-input focus-ring focus-ring-light"
                                                placeholder='Type destination'
                                                // ref={myInputRef}
                                                id='myInput'
                                            />
                                            <ul className="list-group list-group-flush overflow-y-scroll search-list" style={{ maxHeight: '500px' }}>
                                                <li className="list-group-item">Ajodhha - 3 days</li>
                                                <li className="list-group-item">Ajodhha - 5 days</li>
                                                <li className="list-group-item">A third item</li>
                                                <li className="list-group-item">A fourth item</li>
                                                <li className="list-group-item">And a fifth one</li>
                                                <li className="list-group-item">An item</li>
                                                <li className="list-group-item">A second item</li>
                                                <li className="list-group-item">A third item</li>

                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className='d-flex justify-content-evenly'>
                                            <div className="card w-25 m-3" >
                                                <img src="../../src/assets/gallery-2.jpg" className="card-img-top" alt="..." />
                                                {/* <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div> */}
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-evenly'>
                                            <div className="card w-25 m-3" >
                                                <img src="../../src/assets/gallery-2.jpg" className="card-img-top" alt="..." />
                                                {/* <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div> */}
                                            </div>
                                            <div className="card w-25 m-3" >
                                                <img src="../../src/assets/gallery-2.jpg" className="card-img-top" alt="..." />
                                                {/* <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div> */}
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-evenly'>
                                            <div className="card w-25 m-3" >
                                                <img src="../../src/assets/gallery-2.jpg" className="card-img-top" alt="..." />
                                                {/* <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" >Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner