import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Main from '../../Components/ComponentsHome/Main'
import Text from '../../Components/ComponentsHome/Text'
import { Helmet } from 'react-helmet'
function Home() {
  return (
   
    <div> 

<Helmet>
    <title>Home</title>
    
   </Helmet>


   <Navbar/>
   <Main/>
   <Text/>
   <Footer/>
   
   </div>
    
  )
}
export default Home