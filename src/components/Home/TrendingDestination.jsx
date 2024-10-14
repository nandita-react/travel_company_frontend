import React, { useEffect, useState } from 'react'
import Monastery from '../../assets/gallery-4.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { RxDotFilled } from "react-icons/rx";
const apiUrl = import.meta.env.VITE_API_URL

const TrendingDestination = () => {
    const [list, setList] = useState([])

    async function fetchData() {
        try {
            const response = await axios.get(`${apiUrl}destinations?limit=6`)
            if (response.status === 200) {
                // console.log(response)
                setList(response.data)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div style={{ backgroundColor: '#F9FCFF' }}>
            <div className='container home-trending-dest' style={{ padding: '130px 0' }} >
                <h1 className='text-center fw-bold ' >Trending Destinations</h1>
                <div className='row mx-0 mt-5'>
                    {
                        list.length ? list.map((item, i) => (
                            <div className='col-md-4 py-3'>
                                <div className="card  border-0 bg-danger">
                                    <img src={item.thumbnail_image} className="card-img" alt="..." style={{  height: '300px' }} />
                                    <div className="card-img-overlay">

                                        <p className="card-title fs-3" >
                                            <Link to={`/tours/${item.slug}`} className='text-decoration-none text-white '>
                                                {item.name}
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )) : null
                    }
                </div>
                <div className='mt-4'>
                    <p className='text-center fs-5 fw-semibold '><Link className='text-decoration-none border-bottom text-secondary pb-2' to="/destinations">View all destinations</Link></p>
                </div>
            </div>
        </div>
    )
}

export default TrendingDestination