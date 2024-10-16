import React, { useState, useEffect, useCallback } from 'react'
import DestinationBanner from '../components/destinations/DestinationBanner'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Rajasthan from '../assets/tour-7.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import axios from 'axios'
import { debounce } from 'lodash'
import { Link } from 'react-router-dom'
const apiUrl = import.meta.env.VITE_API_URL


const Destinations = () => {
  const [listOfState, setListOfState] = useState([])

  const [itemLimit, setItemLimit] = useState(6)
  const [inputValue, setInputValue] = useState("")

  async function fetchState() {
    try {
      const response = await axios.get(`${apiUrl}destinations?limit=${itemLimit}`)
      if (response.status === 200) {
        setListOfState(response.data)
        console.log(response.data)
      }
    }
    catch (error) {
      console.log(error.message)
    }
  }
  function handleChange(event) {
    const value = event.target.value
    setInputValue(value)

    if (value) {
      debounceApiCall(value)
    }
  }

  const debounceApiCall = useCallback(
    debounce(async (searchItem) => {
      try {
        const response = await axios.get(`${apiUrl}destinations?search=${searchItem}`)
        if (response.status === 200) {
          setListOfState(response.data)
        }
      }
      catch (error) {
        console.log(error.message)
      }
    }, 500), []
  )

  useEffect(() => {
    fetchState()
  }, [itemLimit])
  return (
    <div>
      <Navigation />
      <DestinationBanner />
      <div className='container'>
        <h1 className='text-center fw-bolder ' style={{ fontSize: '60px', marginTop: '70px' }}>Trending Destinations</h1>
        <p className='mt-4 text-center'>Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives.<br /> Whether it’s for one day or a two-week vacation, close to home or a foreign land.</p>
        <div className=" pt-4 d-flex justify-content-evenly">
          <div className="input-group flex-nowrap">
            <input type="text" className="form-control" placeholder="Enter keywords" value={inputValue}
              aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} />
            <span className="input-group-text  " id="addon-wrapping"><IoSearch /></span>
          </div>

        </div>
        <div className='row mt-3'>
          {
            listOfState.length ? listOfState.map((item) => (

              <div className='col-md-4 px-3 py-4'>
                <div className="card text-bg-dark">
                  <img src={item.thumbnail_image} className="card-img" alt="..." style={{ height: '300px' }} />
                  <div className="card-img-overlay">
                    <p className="card-title mt-2">
                      <span className='bg-primary px-3 py-2 rounded-5'>
                        5 Tours
                      </span>
                    </p>

                    <p className="card-text position-absolute bottom-0 p-4 w-100 start-0 end-0">

                      <span className="fs-3">{item.name}</span>
                      {/* <button className="float-end fs-3 rounded-5 btn btn-outline-light"><IoIosArrowRoundForward /></button> */}
                      <Link to={`/tours/${item.slug}`} className="float-end fs-3 rounded-5 btn btn-outline-light border-2">
                        <IoIosArrowRoundForward />
                      </Link>
                    </p>
                  </div>
                </div>

              </div>)) : null}


        </div>


        <div className='mt-4 pb-4 text-center'>
          <button type="button" className="btn btn-primary" onClick={() => setItemLimit(itemLimit + 6)}>View more...</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Destinations