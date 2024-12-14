import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer'

function MainLayout({children}) {
  return (<>
  
  <Header />
  {children}
  <Footer />

  </>)
}

export default MainLayout