import React from 'react'
// import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Wrapper({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
