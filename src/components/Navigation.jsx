import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from './Login'
import Signup from './SignUp'
import SocialLogin from './SocialLogin'
import { useDispatch, useSelector } from 'react-redux'
import ForgotPasswordForm from './ForgotPasswordForm'
import { IoHeartOutline } from "react-icons/io5";
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL

const Navigation = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const modalRef = useRef(null);

  // console.log(auth)
  const [showForm, setShowForm] = useState('login')
  // const [travellingUser, setTravellingUser] = useState("")
  // const [signup,setSignup]=useState(false)

  // function CheckLogin() {
  //   // console.log('hii')
  //   const user = JSON.parse(localStorage.getItem("traveluser"))
  //   if (user) {
  //     setTravellingUser(user.name)
  //   }
  //   else {
  //     setTravellingUser("")
  //   }
  // }

    async function Wishlistdata(){
      try{
        const loggedUser=JSON.parse(localStorage.getItem("traveluser"))

        const {token}=loggedUser
        

        const headers={
          'Authorization':`Bearer ${token}`
        }

        const response=await axios.get(`${apiUrl}wishlist`,{headers})

        if(response.status===200){
         localStorage.setItem('wishlist',JSON.stringify(response.data.items))
        }
      }

      catch(error){
        console.log(error.message)
      }
    }

  function handleLogout() {
    dispatch({ type: 'LOGOUT' })
  }

  useEffect(() => {
    if (auth.isLoggedIn) {
      Wishlistdata()
      modalRef.current.click();
    }
  }, [auth])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     CheckLogin();
  //   }, 10000); // 60000 ms = 1 minute

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white z-1" >
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">Happy Journey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/destinations">Destinations</NavLink>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <NavLink className="position-relative " to="/wishlist"><IoHeartOutline className=' mt-2 fs-3 mx-2 ' />
                  <span className="position-absolute translate-middle badge rounded-circle bg-primary"  style={{top:'20%', left:'80%'}}>
                    2
                  </span>

                </NavLink>
              </li>
              {
                auth.isLoggedIn ? (
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hello, {auth.user.name}
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/myDashboard">Dashboard</Link></li>
                      
                      {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" onClick={handleLogout}>Logout</a></li>
                    </ul>
                  </li>) : (<li className="nav-item">

                    <button type="button" className="btn btn-outline-primary  rounded-pill py-1 mt-1 mx-2" data-bs-toggle="modal"
                      data-bs-target="#exampleModal2">
                      SignIn
                    </button>


                  </li>)}
            </ul>
          </div>
        </div>

      </nav>

      <div className="modal fade " id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <div className="modal-dialog modal-fullscreen " >
          <div className="modal-content" style={{ backgroundColor: '#f9fcff' }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body overflow-y-hidden">
              <div className="container ">
                <p>
                  <button type="button" className={`btn btn-link text-decoration-none fs-4 fw-semibold ${showForm == 'login' ? '' : 'text-dark'}`} onClick={() => setShowForm('login')}>Login</button>
                  <button type="button" className={`btn btn-link text-decoration-none fs-4 fw-semibold ${showForm == 'signup' ? '' : 'text-dark'}`} onClick={() => setShowForm('signup')}>Signup</button>
                </p>
                <div className='row mx-0 mt-5 justify-content-around'>
                  <div className="col-md-4">
                    {
                      showForm === 'login' ? <Login /> : <Signup setShowForm={setShowForm} />
                    }
                  </div>
                  <div className="col-md-1">
                    <div className='bg-secondary-subtle mx-auto' style={{ width: "2px", height: "100%" }}></div>
                  </div>
                  <div className="col-md-4">
                    <SocialLogin />
                  </div>

                </div>

              </div>
            </div>
            <div className="modal-footer">
              {/* <button type="button" onClick={closeModal}>Close</button> */}
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" ref={modalRef}>Close</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade " id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 ms-auto" id="exampleModalToggleLabel2">What's My Password?</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body text-center">
              <div className='border border-dark-subtle'>
                <div className='w-75 mx-auto m-5 px-5'>
                  <h5 className='mb-4 fs-6'>If you have forgotten your password you can reset it here.</h5>

                  <ForgotPasswordForm />
                </div>
              </div>
            </div>
            {/* <div className="modal-footer border-0">
              <button className="btn btn-primary" data-bs-target="#exampleModal2" data-bs-toggle="modal">Back to first</button>
            </div> */}
            <div className="modal-footer  border-0">
              <button className="btn border border-0 me-auto text-primary" data-bs-target="#exampleModal2" data-bs-toggle="modal">GoTo SignIn</button>
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" >Close</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Navigation