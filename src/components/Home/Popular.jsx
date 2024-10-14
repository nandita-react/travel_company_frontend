import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const apiUrl = import.meta.env.VITE_API_URL

const Popular = () => {

    const [populartours, setPopularTours] = useState([])

    async function fectData() {
        try {
            const response = await axios.get(`${apiUrl}tours?limit=4&offset=0&sortAsc=popularity`);
            console.log(response)
            if (response.status === 200) {
                setPopularTours(response.data)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fectData()
    }, [])


    return (
        <div className='popular-box py-5' >
            <div className='container'>
                <h1 className='text-center fw-bold'>Our Most Popular<br /> Package</h1>
                <div className='row mx-0 my-5'>


                    {
                        populartours && populartours.length ? populartours.map((item, index) => (
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
        </div>
    )
}

export default Popular