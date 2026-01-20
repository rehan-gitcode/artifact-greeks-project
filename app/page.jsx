import AdminDashboard from '@/Component/AdminDashboard'
import EntrollmentPage from '@/Component/EntrollmentForm'

import HeroSection from '@/Component/HeroSection'
import Navbar from '@/Component/Header'
import Footer from '@/Component/Footer'
import React from 'react'

function page() {
  return (
    <>
       <Navbar/>
      <EntrollmentPage />
      <HeroSection />
       <Footer/>
      
    </>
  )
}

export default page