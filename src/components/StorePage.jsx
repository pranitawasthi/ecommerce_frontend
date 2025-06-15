import React from 'react'
import Navbar from './Navbar'
import StoresList from './StoresList'
import { StoresProvider } from '../context/StoresContext'

const StorePage = () => {
  return (
    
    <StoresProvider>
    <Navbar/>
    <StoresList/>
    </StoresProvider>
  )
}

export default StorePage