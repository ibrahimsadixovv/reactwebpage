import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Aboutmain from '../../Components/ComponentsAboutmain/Aboutmain'
import { Helmet } from 'react-helmet'


function About() {
  return (
   
    <div> 

<Helmet>
    <title>About</title>
    
   </Helmet>



   <Navbar/>
   <Aboutmain/>
   <Footer/>
   </div>
    
  )
}
export default About