import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./views/authentication/Login";
import React from 'react'
import Signup from "./views/authentication/Signup";
import Home from "./views/Home";
import Destinations from "./views/Destinations";
import TourDetails from "./views/TourDetails";
import CheckOut from "./views/CheckOut";
import Packages from "./views/Packages";
import ThankyouPage from "./views/ThankyouPage";
import DashBoard from "./views/Customar/DashBoard";
import Tours from "./views/Tours";
import ResetPassword from "./views/ResetPassword";
import Wishlist from "./views/Wishlist";

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/destinations" element={<Destinations/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/tour/:slug" element={<TourDetails/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/packages" element={<Packages/>}/>
            <Route path="/thankyoupage" element={<ThankyouPage/>}/>
            <Route path="/myDashboard" element={<DashBoard/>}/>
            <Route path="/tours/:slug" element={<Tours/>}/>
            <Route path="/reset-password/:token" element={<ResetPassword/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router