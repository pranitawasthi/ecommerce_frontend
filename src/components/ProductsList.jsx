
// import { useState } from 'react';
// import { Filter, Star } from 'lucide-react';
// import { useProducts } from '../context/ProductsContext';

// const ProductsList = () => {
//   const { products } = useProducts();
//   const [activeCategory, setActiveCategory] = useState('All');

//   const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food'];

//   const filteredProducts = activeCategory === 'All'
//     ? products
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <section id="products" className="py-10 px-4 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
//           <p className="text-gray-500 mt-1">Discover our most popular items</p>
//         </div>

//         {/* Filters */}
//         <div className="flex items-center mt-6 md:mt-0 gap-3">
//           <Filter className="h-5 w-5 text-gray-500" />
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-200 shadow-sm ${
//                   activeCategory === category
//                     ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
//                     : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg border border-gray-100 transition duration-300"
//           >
//             <div className="relative aspect-[4/3] bg-gray-100">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               {product.discount > 0 && (
//                 <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm transform scale-95 hover:scale-100 transition">
//                   {product.discount}% OFF
//                 </span>
//               )}
//             </div>

//             <div className="p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-md font-semibold text-gray-900 truncate">{product.name}</h3>
//                 <div className="flex items-center text-yellow-500">
//                   <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
//                   <span className="ml-1 text-sm">{product.rating}</span>
//                 </div>
//               </div>

//               <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <span className="text-blue-600 font-bold text-base">${product.price.toFixed(2)}</span>
//                   {product.discount > 0 && (
//                     <span className="ml-2 text-gray-400 text-sm line-through">
//                       ${(product.price * (1 + product.discount / 100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-400">{product.store}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductsList;











// import { useState } from 'react';
// import { Filter, Star } from 'lucide-react';
// import { useProducts } from '../context/ProductsContext';

// const ProductsList = () => {
//   const { products } = useProducts();
//   const [activeCategory, setActiveCategory] = useState('All');

//   const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food'];

//   const filteredProducts =
//     activeCategory === 'All'
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   return (
//     <section id="products" className="py-10 px-4 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
//           <p className="text-gray-500 mt-1">Discover our most popular items</p>
//         </div>

//         {/* Filters */}
//         <div className="flex items-center mt-6 md:mt-0 gap-3 flex-wrap">
//           <Filter className="h-5 w-5 text-gray-500" />
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 border font-medium ${
//                   activeCategory === category
//                     ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                     : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
//           >
//             <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//               {product.discount > 0 && (
//                 <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
//                   {product.discount}% OFF
//                 </span>
//               )}
//             </div>

//             <div className="p-4">
//               <div className="flex justify-between items-start mb-1">
//                 <h3 className="text-base font-semibold text-gray-900 truncate">{product.name}</h3>
//                 <div className="flex items-center text-yellow-500">
//                   <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
//                   <span className="ml-1 text-sm">{product.rating}</span>
//                 </div>
//               </div>

//               <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>

//               <div className="flex justify-between items-center">
//                 <div>
//                   <span className="text-blue-600 font-bold text-base">${product.price.toFixed(2)}</span>
//                   {product.discount > 0 && (
//                     <span className="ml-2 text-sm text-gray-400 line-through">
//                       ${(product.price * (1 + product.discount / 100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-400">{product.store}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductsList;









// import { useState } from 'react';
// import { Filter, Star, PhoneCall, ExternalLink, X } from 'lucide-react';
// import { useProducts } from '../context/ProductsContext';

// const ProductsList = () => {
//   const { products } = useProducts();
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food'];

//   const filteredProducts =
//     activeCategory === 'All'
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   return (
//     <section id="products" className="py-10 px-4 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
//           <p className="text-gray-500 mt-1">Discover our most popular items</p>
//         </div>

//         {/* Filters */}
//         <div className="flex items-center mt-6 md:mt-0 gap-3 flex-wrap">
//           <Filter className="h-5 w-5 text-gray-500" />
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 border font-medium ${
//                   activeCategory === category
//                     ? 'bg-blue-600 text-white border-blue-600 shadow-md'
//                     : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => setSelectedProduct(product)}
//             className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
//           >
//             <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//               {product.discount > 0 && (
//                 <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
//                   {product.discount}% OFF
//                 </span>
//               )}
//             </div>

//             <div className="p-4">
//               <div className="flex justify-between items-start mb-1">
//                 <h3 className="text-base font-semibold text-gray-900 truncate">{product.name}</h3>
//                 <div className="flex items-center text-yellow-500">
//                   <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
//                   <span className="ml-1 text-sm">{product.rating}</span>
//                 </div>
//               </div>

//               <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>

//               <div className="flex justify-between items-center">
//                 <div>
//                   <span className="text-blue-600 font-bold text-base">${product.price.toFixed(2)}</span>
//                   {product.discount > 0 && (
//                     <span className="ml-2 text-sm text-gray-400 line-through">
//                       ${(product.price * (1 + product.discount / 100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//                 <span className="text-xs text-gray-400">{product.store}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-4xl p-6 relative">
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//             >
//               <X className="h-6 w-6" />
//             </button>

//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Image */}
//               <div className="md:w-1/2">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="w-full h-64 object-cover rounded-md"
//                 />
//               </div>

//               {/* Info */}
//               <div className="md:w-1/2">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
//                 <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

//                 <div className="text-lg font-semibold text-blue-600 mb-2">
//                   ${selectedProduct.price.toFixed(2)}
//                   {selectedProduct.discount > 0 && (
//                     <span className="ml-2 text-gray-400 text-base line-through">
//                       ${(selectedProduct.price * (1 + selectedProduct.discount / 100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>

//                 <div className="text-sm text-gray-500 mb-6">Sold by: {selectedProduct.store}</div>

//                 <div className="flex flex-wrap gap-4">
//                   <button
//                     onClick={() =>
//                       selectedProduct.contact &&
//                       window.open(`https://wa.me/${selectedProduct.contact}`, '_blank')
//                     }
//                     className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//                     disabled={!selectedProduct.contact}
//                   >
//                     <PhoneCall className="h-4 w-4" />
//                     Contact Seller
//                   </button>

//                   <button
//                     onClick={() =>
//                       selectedProduct.website &&
//                       window.open(selectedProduct.website, '_blank')
//                     }
//                     className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//                     disabled={!selectedProduct.website}
//                   >
//                     <ExternalLink className="h-4 w-4" />
//                     Visit Website
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductsList;









































import { useState } from 'react';
import { Filter, Star, PhoneCall, ExternalLink, X } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import axios from 'axios';

const ProductsList = () => {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Food'];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-10 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-gray-500 mt-1">Discover our most popular items</p>
        </div>

        {/* Filters */}
        <div className="flex items-center mt-6 md:mt-0 gap-3 flex-wrap">
          <Filter className="h-5 w-5 text-gray-500" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 border font-medium ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
                <h3 className="text-base font-semibold text-gray-900 truncate">{product.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-blue-600 font-bold text-base">${product.price.toFixed(2)}</span>
                  {product.discount > 0 && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-400">{product.store}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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

                <div className="text-sm text-gray-500 mb-1">
                  Sold by: {selectedProduct.store}
                </div>

                {/* <div className="text-sm text-gray-700 mb-4">
                  Contact: <span className="font-semibold">{selectedProduct.contact || 'N/A'}</span>
                </div> */}

                <div className="flex flex-wrap gap-4">
                <button
  onClick={async () => {
    try {
      const response = await axios.get(`http://localhost:3000/store/stores/name/${selectedProduct.store}`);
      const phone = response.data?.store?.phone;
      if (phone) {
        window.open(`tel:${phone}`, '_blank'); // Opens the dialer
      } else {
        alert("Phone number not found for this seller.");
      }
    } catch (error) {
      console.error("Error fetching store details:", error);
      alert("Failed to fetch contact info.");
    }
  }}
  className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
>
  <PhoneCall className="h-4 w-4" />
  Contact Seller
</button>


                  <button
                    onClick={() =>
                      selectedProduct.website &&
                      window.open(selectedProduct.website, '_blank')
                    }
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    disabled={!selectedProduct.website}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsList;
