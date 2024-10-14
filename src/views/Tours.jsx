import React, { useEffect, useState, useRef } from 'react'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';


const Tours = () => {
    const { slug } = useParams()
    const [tourslist, setTourslist] = useState([])
    const [loading, setLoading] = useState(true)
    const [listOfState, setListOfState] = useState([])

  


    async function fetchData() {
        try {
            if (slug) {
                const response = await axios.get(`http://localhost:5000/api/tours-for-destination/${slug}`)
                if (response.status === 200) {
                    setTourslist(response.data)
                    setLoading(false)
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }
    async function fetchState() {
        try {
            const response = await axios.get('http://localhost:5000/api/destinations?limit=50')
            if (response.status === 200) {
                setListOfState(response.data)
                console.log(response.data)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        fetchState()
    }, [])
    return (
        <>
            <Navigation />



            <div className='global-banner-two position-relative'>
                <h1 className='position-absolute start-50 translate-middle fw-bolder text-light  ' style={{ fontSize: '60px', bottom: '120px' }}>
                    TOURS</h1>

            </div>
            <div className='container ' >
                <h1 className='text-center fw-bolder ' style={{ fontSize: '60px', marginTop: '70px' }}>Trending Destinations</h1>
                <p className='mt-4 text-center'>Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives.<br /> Whether it’s for one day or a two-week vacation, close to home or a foreign land.</p>

              
                <div className='row mx-0 my-5'>


                    {
                        tourslist && tourslist.length ? tourslist.map((item, index) => (
                            <div className="col-md-3">
                                <div className="card p-3">
                                    <img src={item.thumbnail} className="card-img-top rounded-1" alt="..." style={{ height: '200px' }} />
                                    <div className="card-body p-0">
                                        <div className='text-center' style={{ marginTop: '-12px' }}>
                                            <span className='p-2 rounded-1' style={{ backgroundColor: '#EAF6F6' }}>
                                                {item.duration} | ₹{item.paxRates.find(pax => pax.paxType === "ADULT").amount}
                                                <small>/pax</small>
                                            </span>
                                        </div>
                                        <p className="card-title mt-4 fw-semibold">
                                            {item.name.slice(0, 30)}
                                            {item.name.length > 30 ? '...' : ''}
                                        </p>
                                        <small className="card-text">{item.description.slice(0, 70)}...</small>

                                        <p className='border-top mb-0 pt-2 mt-2'>
                                            <Link to={`/tour/${item.slug}`} className="text-decoration-none ">View Details</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>

                        )) : null
                    }
                </div>
            </div>
        </>
    )
}

export default Tours
