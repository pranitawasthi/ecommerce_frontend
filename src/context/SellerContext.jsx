import React, { createContext, useContext, useState } from 'react';

const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([
    {
      id: '1',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      items: [
        { productId: '1', productName: 'Wireless Headphones', quantity: 1, price: 199.99 }
      ],
      total: 199.99,
      status: 'pending',
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      items: [
        { productId: '2', productName: 'Smart Speaker', quantity: 2, price: 129.99 }
      ],
      total: 259.98,
      status: 'confirmed',
      createdAt: new Date(Date.now() - 86400000).toISOString()
    }
  ]);

  const createStore = (storeData) => {
    const newStore = {
      ...storeData,
      id: Date.now().toString(),
      isActive: true,
      createdAt: new Date().toISOString()
    };
    setStore(newStore);
  };

  const updateStore = (storeData) => {
    if (store) {
      setStore({ ...store, ...storeData });
    }
  };

  const addProduct = (productData) => {
    if (store) {
      const newProduct = {
        ...productData,
        id: Date.now().toString(),
        storeId: store.id,
        createdAt: new Date().toISOString()
      };
      setProducts([...products, newProduct]);
    }
  };

  const updateProduct = (productId, productData) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, ...productData } : product
    ));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    ));
  };

  return (
    <SellerContext.Provider value={{
      store,
      products,
      orders,
      createStore,
      updateStore,
      addProduct,
      updateProduct,
      deleteProduct,
      updateOrderStatus
    }}>
      {children}
    </SellerContext.Provider>
  );
};

export const useSeller = () => {
  const context = useContext(SellerContext);
  if (!context) {
    throw new Error('useSeller must be used within a SellerProvider');
  }
  return context;
};
