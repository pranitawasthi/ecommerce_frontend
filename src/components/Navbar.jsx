    // import {   useState } from 'react';
    // import {  Store, ShoppingBag, Menu, X } from 'lucide-react';
    // import SearchBar from './SearchBar';
    // import LocationSelector from './LocationSelector';
    // import { Link } from 'react-router-dom';
    // import { useAuth } from '../context/AuthContext';
    // import { ProductPage } from './ProductPage';

    // const Navbar = () => {
    //   const [isOpen, setIsOpen] = useState(false);

    //   const {isAuthenticated,user,logout}= useAuth();
    //   return (
    //     <nav className="bg-white shadow-md sticky top-0 z-50">
    //       <div className="container mx-auto px-4">
    //         <div className="flex items-center justify-between h-16">
    //           {/* Logo */}
    //           <div className="flex items-center">
    //             <a href="/" className="flex items-center">
    //               <Store className="h-8 w-8 text-blue-600" />
    //               <span className="ml-2 text-xl font-bold text-gray-900">BizLister</span>
    //             </a>
    //           </div>

    //           {/* Location & Search - Desktop */}
    //           <div className="hidden md:flex items-center justify-center flex-1 mx-8">
    //             {/* <LocationSelector /> */}
    //             <div className="mx-2"></div>
    //             <div className="w-full max-w-md">
    //               <SearchBar />
    //             </div>
    //           </div>

    //           {/* Nav Links - Desktop */}
    //           <div className="hidden md:flex items-center space-x-4">
    //             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //               <ShoppingBag className="h-5 w-5 mr-1" />
    //               <Link to="/products" >Products</Link>
    //             </a>
    //             <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //               <Store className="h-5 w-5 mr-1" />
    //               <Link to="/stores" >Stores</Link> 
    //             </a>

    //             {isAuthenticated?

    //             <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //             <Store className="h-5 w-5 mr-1" />
    //             Logout {user.username}
    //           </button>

    //           :

    //           <Link to="/authenticate" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //               <Store className="h-5 w-5 mr-1" />
    //               Login
    //             </Link>

                



                

                
    //             }

    // {/* <Link to="/register-store" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
    //               Sell on BizLister
    //             </Link> */}


                
    //           </div>

    //           {/* Mobile menu button */}
    //           <div className="md:hidden flex items-center">
    //             <button
    //               onClick={() => setIsOpen(!isOpen)}
    //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    //             >
    //               <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
    //               {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Mobile menu */}
    //       {isOpen && (
    //         <div className="md:hidden bg-white p-4 border-t border-gray-200">
    //           <div className="flex flex-col space-y-4">
    //             {/* <LocationSelector /> */}
    //             <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
    //             <Store className="h-5 w-5 mr-1" />
    //             Logout
    //           </button>
                
    //             <SearchBar />
    //             <div className="pt-2 border-t border-gray-100">
    //               <a href="#products" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
    //                 <ShoppingBag className="h-5 w-5 mr-2" />
    //                 Products
    //               </a>
    //               <a href="#stores" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
    //                 <Store className="h-5 w-5 mr-2" />
    //                 Stores
    //               </a>
                  

    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </nav>
    //   );
    // };

    // export default Navbar;











    import { useState } from 'react';
import { Store, ShoppingBag, Menu, X, Mail, Info } from 'lucide-react';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ProductPage } from './ProductPage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {isAuthenticated,user,logout}= useAuth();
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Store className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BizLister</span>
            </a>
          </div>

          {/* Location & Search - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            {/* <LocationSelector /> */}
            <div className="mx-2"></div>
            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <ShoppingBag className="h-5 w-5 mr-1" />
              <Link to="/products" >Products</Link>
            </a>
            <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Store className="h-5 w-5 mr-1" />
              <Link to="/stores" >Stores</Link> 
            </a>
            <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Info className="h-5 w-5 mr-1" />
              <Link to="/about" >About</Link>
            </a>
            <a className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Mail className="h-5 w-5 mr-1" />
              <Link to="/contact" >Contact</Link>
            </a>

            {isAuthenticated?

            <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
            <Store className="h-5 w-5 mr-1" />
            Logout {user.username}
          </button>

          :

          <Link to="/authenticate" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Store className="h-5 w-5 mr-1" />
              Login
            </Link>

            }

{/* <Link to="/register-store" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Sell on BizLister
            </Link> */}

            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            {/* <LocationSelector /> */}
            <button onClick={logout} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium">
            <Store className="h-5 w-5 mr-1" />
            Logout
          </button>
            
            <SearchBar />
            <div className="pt-2 border-t border-gray-100">
              <a href="#products" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Products
              </a>
              <a href="#stores" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
                <Store className="h-5 w-5 mr-2" />
                Stores
              </a>
              <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
                <Info className="h-5 w-5 mr-2" />
                About
              </Link>
              <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-base font-medium">
                <Mail className="h-5 w-5 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
