// // src/components/Navbar.js
// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../assets/images/logo.png"

// const Navbar = () => {

//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//       setMobileMenuOpen(!isMobileMenuOpen);
//     };
//   return (
    // <nav className="bg-[#4c956c] sm:flex  ">
    //   <div className="flex items-center justify-between w-full h-20 px-10">
       
        // <Link to="/">
        // <div className="w-10 flex flex-col items-center justify-center rounded-full"><img src={logo} alt="logo image" className=' rounded-full' />
        // </div>
        // </Link>
//         <div className="md:hidden">
//           {/* Mobile menu icon/button */}
//           <button className="text-white">
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link to="/">
//           <a href="/" className="text-white">Home</a>
//           </Link>
//           <Link to="/about">
//         <a href="#secondpage" className="text-white">About us</a>
//         </Link>
//         <Link to="/service">
//         <a href="/service" className="text-white">Services</a>
//         </Link>
//         </div>
//       </div>
//       {/* Mobile menu */}
//       <div className="md:hidden">
//         <button className="text-white" onClick={toggleMobileMenu}>
//         <i className='fas fa-align-justify'></i>
//         </button>
//         {isMobileMenuOpen && (
//           <div className="mt-2 flex flex-row gap-10">
//               <Link to="/">
//           <a href="#" className="block text-white">Home</a>
//           </Link>
//           <Link to="/about">
//         <a href="#secondpage" className="block text-white">About us</a>
//         </Link>
//         <Link to="/service">
//         <a href="/service"  className="block text-white">Services</a>
//         </Link>
//             {/* <a href="#" className="block text-white">Home</a>
//             <a href="#" className="block text-white">About</a>
//             <a href="#" className="block text-white">Services</a> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"


function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#4c956c] sm:flex  ">
      <header className="flex items-center justify-between w-full h-20 px-10">
        <nav className="w-full mx-auto flex items-center justify-between">
        <Link to="/">
        <div className="w-10 flex flex-col items-center justify-center rounded-full"><img src={logo} alt="logo image" className=' rounded-full' />
        </div>
        </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path d="M19 13H5v-2h14v2z" />
                ) : (
                  <>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                  </>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300 px-10">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-300 px-10">
              About
            </a>
            <a href="/service" className="text-white hover:text-gray-300 px-10">
              Services
            </a>
            
          </div>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-[#4c956c]">
            <a href="/" className="block text-white py-2 px-4 hover:bg-[#1b914e]">
              Home
            </a>
            <a href="/about" className="block text-white py-2 px-4 hover:bg-[#1b914e]">
              About
            </a>
            <a href="/service" className="block text-white py-2 px-4 hover:bg-[#1b914e]">
              Services
            </a>
           
          </div>
        </div>
      )}
      <main className="container mx-auto p-4">
        {/* Your page content goes here */}
      </main>
    </nav>
  );
}

export default Navbar;
