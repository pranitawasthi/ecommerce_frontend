import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Front from './components/Front';
import  { AuthProvider } from './context/AuthContext';
import { useState } from 'react';
import ProductsList from './components/ProductsList';
import { ProductPage } from './components/ProductPage';
import StorePage from './components/StorePage';
import StoreRegistration from './components/seller/StoreRegistration';
import { SellerProvider } from './context/SellerContext';
import Dashboard from './components/seller/Dashboard';
import ProductsManagement from './components/seller/ProductsManagement';
import StoreDetails from './components/StoreDetails';
import { StoresProvider } from './context/StoresContext';

 
function App() {
  return (
    <>

<BrowserRouter>
    <StoresProvider>

    
    <SellerProvider>

    
  <AuthProvider>
    
      <Routes>
        <Route path='/' element={<Front/>} />
        <Route path='/authenticate' element={<AuthPage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/stores' element={<StorePage/>} />
        <Route path="/register-store" element={<StoreRegistration/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/manage" element={<ProductsManagement/>} />
        <Route path="/store/:storename" element={<StoreDetails/>} />


      </Routes>
    

    </AuthProvider>  


    </SellerProvider> 

    </StoresProvider>

    </BrowserRouter>
  
    </>
  );
}

export default App;