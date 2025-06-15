import React from 'react'
import { ProductsProvider } from '../context/ProductsContext'
import { StoresProvider } from '../context/StoresContext'
import Navbar from './Navbar'
import ProductsList from './ProductsList'
import StoresList from './StoresList'
import Footer from './Footer'
import Hero from './Hero'
import { useAuth } from '../context/AuthContext'
import Landing from './Landing'
import FrontPlist from './FrontPlist'
import FrontSlist from './FrontSlist'


const Front = () => {
  const {isAuthenticated} = useAuth()
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductsProvider>
        <StoresProvider>
          <Navbar/>
          {isAuthenticated?
          <>
           <Hero/>
           <main className="container mx-auto px-4">
           <FrontSlist/>
            <FrontPlist/>
            
          </main>
          </> 
          :
           <Landing/> 
           }
  
          
          <Footer/>
        </StoresProvider>
      </ProductsProvider>
    </div>
  )
}

export default Front