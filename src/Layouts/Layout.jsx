import React from 'react'
//components
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({childern}) {
  return (
    <div>
        <Header/>
            {childern}
        <Footer/>
    </div>

  )
}

export default Layout