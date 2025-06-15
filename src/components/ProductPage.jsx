import React from 'react'
import Navbar from './Navbar'
import ProductsList from './ProductsList'
import { ProductsProvider } from '../context/ProductsContext'
import Footer from './Footer'

export const ProductPage = () => {
  return (
    <>
    <ProductsProvider>
    <Navbar/>
    <ProductsList/>
    </ProductsProvider>
    <Footer/>
    </>
  )
}
