import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BackToTop from '../components/BackToTop/BackToTop'
import WhatsAppBtn from '../components/shared/WhatsAppBtn/WhatsAppBtn'
import Footer from '../components/Footer/Footer'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <WhatsAppBtn/>
        <BackToTop/>
        <Footer/>
    </div>
  )
}

export default layout