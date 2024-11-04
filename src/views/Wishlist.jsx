import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import gallery2 from '../assets/gallery-2.jpg'
 import { getTokenFromLocalStorage } from '../utils/localStorage'
import axios from 'axios'
import { set } from 'lodash'
const apiUrl = import.meta.env.VITE_API_URL
var token=getTokenFromLocalStorage()
const Wishlist = () => {

    const [showWishlist,setShowWishlist]=useState([])
    async function fetchWishlistShow(){
        try{
            const response=await axios.get(`${apiUrl}/wishlist/details`,{
               headers:{
                'Authorization':`Bearer ${token}`
               }
            })
            if(response.status=200){
                setShowWishlist(response.data)
               // console.log(showWishlist)
            }
        }
        catch(error){
            console.log(error.message)
        }

    }

    useEffect(()=>{
        fetchWishlistShow()
    },[])
    return (
        <div >
            <Navigation />
            <div className='global-banner-two position-relative'>
                <h1 className='position-absolute start-50 translate-middle fw-bolder text-light  ' style={{ fontSize: '60px', bottom: '120px' }}>
                    WishList</h1>

            </div>

            {
                showWishlist.length ?showWishlist .map((item,index)=>(
            
            <div className='container '>
                <div className="card mb-3 mt-5 w-100" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.thumbnail} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">{item.name}</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-1 d-flex align-items-center justify-content-center">
                            <span>X</span>
                        </div>
                    </div>
                </div>
            </div>)) :null}

            <Footer />
        </div>
    )
}

export default Wishlist