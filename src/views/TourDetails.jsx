import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/tourDetails/Banner'
import { AiOutlineClockCircle } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiFootprints } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { GoShareAndroid, GoHeart } from "react-icons/go"
import { MdOutlineReviews } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom';
import Toast from '../components/Toast';
import { GoHeartFill } from "react-icons/go";
const apiUrl = import.meta.env.VITE_API_URL


const validationSchema = Yup.object({
    departure: Yup.string().required('Date is must required'),
    adult: Yup.number().required(),
    infant: Yup.number().required()
})
const TourDetails = () => {
    // const count = ["One", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

    const navigate = useNavigate()
    const { slug } = useParams()
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const [rates, setRates] = useState({
        adult: 0,
        infant: 0
    })
    const [calculatedRates, setCalculatedRates] = useState({
        adult: 0,
        infant: 0
    })

    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    // const [totalAmount,setTotalAmount]=useState(0)

    const [addToItem, setAddToItem] = useState(false)

    async function fetchDetails() {
        try {
            if (slug) {
                const response = await axios.get(`${apiUrl}tours/${slug}`)
                // console.log("hii")
                if (response.status == 200) {
                    setDetails(response.data)
                    const adultRate = response.data.paxRates.find(pax => pax.paxType === "ADULT").amount
                    const infantRate = response.data.paxRates.find(pax => pax.paxType === "INFANT").amount
                    setRates({ adult: adultRate, infant: infantRate })
                    // setTotalAmount(adultRate*2) 
                    setCalculatedRates((old) => ({ ...old, adult: adultRate * 2 }))
                    setLoading(false)
                }

            }
        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchDetails()
    }, [slug])

    function handleSubmit(values) {
        // console.log(details._id)

        values = { ...values, totalAmount: GetTotalRates(), duration: details.duration, id: details._id }
        // console.log(values)
        localStorage.setItem("bookingdetails", JSON.stringify(values))
        navigate('/checkout', { replace: true })
    }

    function GetTotalRates() {
        return Object.values(calculatedRates).reduce((acc, value) => acc + value, 0)

    }

    async function addItemToWishList() {
        try {
            const loggedUser = JSON.parse(localStorage.getItem("traveluser"))
            if (!loggedUser) {
                setTimeout(() => setErrorMessage('Please login first'), 0);
                return;
            }
            const { token } = loggedUser
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            const response = await axios.post(`${apiUrl}wishlist`, {
                tourId: details._id
            }, { headers })
            if (response.status === 200) {
                setTimeout(() => setSuccessMessage(response.data.message), 0);
                // setSuccessMessage(response.data.message)
                setAddToItem(true)
            }
        } catch (error) {
            setTimeout(() => setErrorMessage(error.message), 0);
            // setErrorMessage(error.message)
        } finally {
            setSuccessMessage("")
            setErrorMessage("")
        }
    }

    async function removeToWishList() {
        setSuccessMessage("")
        try {
            const loggedUser = JSON.parse(localStorage.getItem("traveluser"))

            if (!loggedUser) {
                setTimeout(() => setErrorMessage('Please login first'), 0);
                return;
            }

            const { token } = loggedUser

            const headers = {
                'Authorization': `Bearer ${token}`
            }

            const response = await axios.post(`${apiUrl}wishlist/remove`, {
                tourId: details._id
            }, { headers })

            if (response.status === 200) {
                console.log(response.data.message);

                setTimeout(() => setSuccessMessage(response.data.message), 0);

                // setSuccessMessage(response.data.message)
                setAddToItem(false)
            }

        }
        catch (error) {
            console.log(error.message)
            setTimeout(() => setErrorMessage(error.message), 0);
            // setErrorMessage(error.message)
        }
        finally {
            setSuccessMessage("")
            setErrorMessage("")
        }
    }



    // const adultPax = details.paxRates.find(pax => pax.paxType === "ADULT")
    return (
        <>
            <Navigation />
            <Banner />

            {loading ? "loading..." : (<div className="container py-2 px-0 mt-5" >
                <div className="d-flex " >

                    <div className=" pe-3" style={{ width: '70%' }}>

                        <div className='d-flex  justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div >
                                    <span className="border p-3 rounded-4">
                                        <AiOutlineClockCircle className="fs-4 text-primary" />
                                    </span>
                                </div>
                                <div className='ms-3'>
                                    <h6 className='mb-1 fw-bold'>Duration</h6>
                                    <small className='fw-light'>{details.duration}</small>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                    <span className="border p-3 rounded-4">
                                        <PiFootprints className="fs-4 text-primary" />
                                    </span>
                                </div>
                                <div className='ms-3'>
                                    <h6 className='mb-1 fw-bold'>Tour Type</h6>
                                    <small className='fw-light'>Daily Tour</small>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                    <span className="border p-3 rounded-4">
                                        <HiOutlineUsers className="fs-4 text-primary" />
                                    </span>
                                </div>
                                <div className='ms-3'>
                                    <h6 className='mb-1 fw-bold'>Group Size</h6>
                                    <small className='fw-light'>10 people</small>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div >
                                    <span className="border p-3 rounded-4">
                                        <LiaLanguageSolid className="fs-4 text-primary" />
                                    </span>
                                </div>
                                <div className='ms-3'>
                                    <h6 className='mb-1 fw-bold'>Languages</h6>
                                    <small className='fw-light'>Espanol, Japanese</small>
                                </div>
                            </div>

                        </div>

                        <div className='border mt-5 py-3 border-start-0 border-end-0 d-flex'>
                            <div className='w-50'>
                                <FaStar className='text-warning me-1' />
                                <FaStar className='text-warning me-1' />
                                <FaStar className='text-warning me-1' />
                                <FaStar className='text-warning me-1' />
                                <FaStar className='text-warning me-1' />
                                <small className='ms-2'>(5 review)</small>
                            </div>
                            <div className='w-50 text-end'>
                                <span className='ps-4'><GoShareAndroid className='text-primary fs-5' /><small className='ps-2'>Share</small></span>
                                <span className='ps-4'><MdOutlineReviews className='text-primary fs-5' /><small className='ps-2'>Review</small></span>
                                <span className='ps-4'>{addToItem ? <GoHeartFill className='text-primary fs-5' onClick={removeToWishList} /> :
                                    <GoHeart className='text-primary fs-5' onClick={addItemToWishList} />}
                                    <small className='ps-2'>Wishlist</small></span>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px' }}>
                            <h2 className='fw-bolder fs-4'>About this tour</h2>
                            <p className='mt-4'>{details.description} </p>
                        </div>
                        <div className='mt-4'>
                            <h2 className='mb-4 fs-4'>Highlights</h2>
                            {
                                details.highlights ? details.highlights.map((item, index) => (
                                    <p style={{ marginTop: '10px' }} key={index}><FaCheckCircle className='me-2 mb-1  text-primary' />{item}</p>
                                )) : null
                            }



                            {/* <p style={{ marginTop: '-4px' }}><FaCheckCircle className='me-2 mb-1 text-primary' />See the famous icons of LA and visit Calico Ghost Town.</p>
                            <p style={{ marginTop: '-4px' }}><FaCheckCircle className='me-2 mb-1 text-primary' />See the famous icons of LA and visit Calico Ghost Town.</p>
                            <p style={{ marginTop: '-4px' }}><FaCheckCircle className='me-2 mb-1 text-primary' />See the famous icons of LA and visit Calico Ghost Town.</p> */}


                        </div>

                        <div className='mt-4'>
                            -----------------------------------------------------------------------------------------------------
                        </div>

                        <div className=' row justify-content-between '>
                            <h2 className='mt-5 mb-3 fw-bolder fs-4'>Included/Excluded</h2>
                            <div className="col-6 " >
                                {
                                    details.included ? details.included.map((item, index) => (
                                        <p key={index}><FaCheckCircle className='me-2 mb-1  text-primary' />{item}</p>
                                    )) : null
                                }




                            </div>
                            <div className="col-6" >
                                {
                                    details.excluded ? details.excluded.map((item, index) => (
                                        <p key={index}><IoIosCloseCircle className='fs-5 me-2 mb-1  text-danger' />{item} </p>
                                    )) : null
                                }



                            </div>
                            <div className='mt-2'>
                                -----------------------------------------------------------------------------------------------------
                            </div>

                            <h2 className='mt-5 mb-3 fw-bolder fs-4'> Itinerary</h2>
                            <div className="accordion border-none mb-5" id="accordionExample">

                                {
                                    details.itinerary ? details.itinerary.map((item, i) => (
                                        <div className="accordion-item my-3 rounded-3 border" key={i}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button rounded-3  bg-white" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${i}`} aria-expanded="true" aria-controls={`collapse_${i}`}>
                                                    <span className='border rounded-3 me-4 py-2 px-3 fw-semibold'>Day {item.day}</span>
                                                    <span className='fw-medium'>{item.details.slice(0, 40)}</span>
                                                </button>
                                            </h2>
                                            <div id={`collapse_${i}`} className={`accordion-collapse collapse rounded-bottom ${i == 0 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {item.details}
                                                </div>
                                            </div>
                                        </div>
                                    )) : null
                                }



                            </div>

                        </div>

                        <div id="carouselExample" className="carousel slide mb-5">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://themeim.com/demo/treker/images/resource/gallery.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://themeim.com/demo/treker/images/resource/gallery.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://themeim.com/demo/treker/images/resource/gallery.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>

                    <div className='ps-3' style={{ width: '30%', position: 'sticky', top: 0, height: '100%' }} >

                        <div className='border rounded-3 p-3 border-2 shadow-sm'>
                            <p>
                                <small>From: </small>
                                <span className='fw-semibold'>€{rates.adult}</span>
                            </p>
                            <Formik
                                initialValues={{ departure: '', adult: 2, infant: 0, }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => handleSubmit(values)}
                            >
                                {({ setFieldValue }) => (<Form>

                                    <div className="border border-primary rounded-3 p-4 mb-3 " >
                                        <div className="mb-3">
                                            <label htmlFor="date" className="form-label">Departure Date</label>
                                            <Field type="date" name="departure" className="form-control border-primary" placeholder='Enter your date' min={new Date().toISOString().split('T')[0]} />
                                            <ErrorMessage name="departure" component="small" className='text-danger' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="adult" className="form-label">Adult (18-80 years)</label>
                                            <Field type="number" className="form-control" name="adult" id="adult" min="0"
                                                onChange={(e) => {
                                                    setFieldValue("adult", (e.target.value))
                                                    //  setTotalAmount(rates.adult*e.target.value)
                                                    setCalculatedRates((old) => ({ ...old, adult: rates.adult * e.target.value }))

                                                }}
                                            />
                                            <ErrorMessage name="number" component="small" className='text-danger' />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="infant" className="form-label">Infant (0-4 years)</label>
                                            <Field type="number" className="form-control" name="infant" id="infant" min="0"
                                                onChange={(e) => {
                                                    setFieldValue("infant", (e.target.value))
                                                    setCalculatedRates((old) => ({ ...old, infant: rates.infant * e.target.value }))

                                                }}

                                            />
                                            <ErrorMessage name="number" component="small" className='text-danger' />
                                        </div>
                                    </div>


                                    <p className='fw-semibold'>
                                        <span>Total </span>
                                        <span className='float-end'>€{GetTotalRates()}</span>
                                    </p>
                                    <button className='btn btn-primary rounded-3 w-100 py-2'  >Book now</button>
                                </Form>)}
                            </Formik>
                        </div>

                    </div>
                </div>
            </div>)}

            <Footer />

            {
                successMessage && <Toast success={successMessage} />
            }
            {
                errorMessage && <Toast error={errorMessage} />
            }

        </>
    )
}

export default TourDetails