// // components/StoreDetails.jsx
// import { useParams } from 'react-router-dom';
// import { useStores } from '../context/StoresContext';
// import Navbar from './Navbar';

// const StoreDetails = () => {
//   const { storeId } = useParams();
//   const { stores } = useStores();

//   const store = stores.find(s => s.id === storeId);

//   if (!store) return <div className="text-center mt-10">Store not found</div>;

//   return (
//     <>
//       <Navbar />
//       <section className="max-w-7xl mx-auto px-4 py-10">
//         <h2 className="text-3xl font-bold mb-4">{store.name}</h2>
//         <p className="text-gray-600 mb-4">{store.description}</p>

//         <h3 className="text-xl font-semibold mb-2">Products</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {store.products?.map(product => (
//             <div key={product.id} className="border p-4 rounded-lg shadow">
//               <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2 rounded" />
//               <h4 className="text-lg font-semibold">{product.name}</h4>
//               <p className="text-gray-500 text-sm">{product.description}</p>
//               <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default StoreDetails;





// components/StoreDetails.jsx
// import { useParams } from 'react-router-dom';
// import { useStores } from '../context/StoresContext';
// import { mockProducts } from '../data/mockData'; // or wherever your mock data is
// import Navbar from './Navbar';

// const StoreDetails = () => {
//   const { storeId } = useParams();
//   const { stores } = useStores();

//   const store = stores.find(s => s.id === storeId);

//   if (!store) return <div className="text-center mt-10">Store not found</div>;

//   // Filter products by store name
//   const storeProducts = mockProducts.filter(product => product.store === store.name);

//   return (
//     <>
//       <Navbar />
//       <section className="max-w-7xl mx-auto px-4 py-10">
//         <h2 className="text-3xl font-bold mb-4">{store.name}</h2>
//         <p className="text-gray-600 mb-4">{store.description}</p>

//         <h3 className="text-xl font-semibold mb-2">Products</h3>
//         {storeProducts.length === 0 ? (
//           <p className="text-gray-500">No products available for this store.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {storeProducts.map(product => (
//               <div key={product.id} className="border p-4 rounded-lg shadow">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-40 w-full object-cover mb-2 rounded"
//                 />
//                 <h4 className="text-lg font-semibold">{product.name}</h4>
//                 <p className="text-gray-500 text-sm">{product.description}</p>
//                 <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default StoreDetails;





















import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, PhoneCall, ExternalLink, X } from 'lucide-react';
import { useStores } from '../context/StoresContext';
import { mockProducts } from '../data/mockData';
import Navbar from './Navbar';

const StoreDetails = () => {
  const { storename } = useParams();
  const { stores } = useStores();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const store = stores.find(s => s.name === storename);
  
  if (!store) {
    return <div className="text-center mt-10">Store not found</div>;
  }
  
  // Filter products by store name
  const storeProducts = mockProducts.filter(product => product.store === store.name);

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Store Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{store.name}</h2>
          <p className="text-gray-600 mb-6">{store.description}</p>
          <h3 className="text-xl font-semibold mb-6">Products</h3>
        </div>

        {/* Products Grid */}
        {storeProducts.length === 0 ? (
          <p className="text-gray-500 text-center py-10">No products available for this store.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {storeProducts.map(product => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-semibold text-gray-900 truncate">{product.name}</h4>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-blue-600 font-bold text-base">₹{product.price}</span>
                      {product.discount > 0 && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ₹{(product.price * (1 + product.discount / 100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-4xl p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>

              {/* Info */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

                <div className="text-lg font-semibold text-blue-600 mb-2">
                  ${selectedProduct.price.toFixed(2)}
                  {selectedProduct.discount > 0 && (
                    <span className="ml-2 text-gray-400 text-base line-through">
                      ${(selectedProduct.price * (1 + selectedProduct.discount / 100)).toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="text-sm text-gray-500 mb-6">Sold by: {selectedProduct.store}</div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      selectedProduct.contact &&
                      window.open(`https://wa.me/${selectedProduct.contact}`, '_blank')
                    }
                    className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    disabled={!selectedProduct.contact}
                  >
                    <PhoneCall className="h-4 w-4" />
                    Contact Seller
                  </button>

                  {/* <button
                    onClick={() =>
                      selectedProduct.website &&
                      window.open(selectedProduct.website, '_blank')
                    }
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    disabled={!selectedProduct.website}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
    </>
  );
};

export default StoreDetails;