import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Home/Banner'
import Popular from '../components/Home/Popular'
import TrendingDestination from '../components/Home/TrendingDestination'
import Footer from '../components/Footer'
const Home = () => {
  
  return (
    <div>
      <Navigation />
      <Banner />
      <Popular />
      <TrendingDestination />
      <Footer/>

    </div>
  )
}

export default Home