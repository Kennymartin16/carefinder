"use client"

// import React, { useState } from "react";
// import MyHospitals from "../Component/Hospitals/page";

// interface HospitalDetailProps {
//   name: string;
//   address: string;
//   phonenumber: string;
// }

// // const HospitalDetail: React.FC<HospitalDetailProps> = ({ name, address }) => {
  
// // }


// const Rating = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   return (
//     <div className="flex items-center">
//       {[...Array(5)].map((star, index) => {
//         index += 1;
//         return (
//           <button
//             type="button"
//             key={index}
//             className={`w-6 h-6 ${index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"} focus:outline-none`}
//             onClick={() => setRating(index)}
//             onMouseEnter={() => setHover(index)}
//             onMouseLeave={() => setHover(rating)}
//           >
//             <svg
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               className="w-full h-full"
//             >
//               <path d="M9.049 2.927a1 1 0 011.902 0l1.518 3.859a1 1 0 00.95.69h4.104a1 1 0 01.591 1.81l-3.322 2.58a1 1 0 00-.364 1.118l1.23 3.706a1 1 0 01-1.541 1.155L10 14.347l-3.317 2.498a1 1 0 01-1.541-1.155l1.23-3.706a1 1 0 00-.364-1.118l-3.322-2.58a1 1 0 01.591-1.81h4.104a1 1 0 00.95-.69l1.518-3.859z"/>
//             </svg>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default Rating;


import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex flex-col cursor-pointer lg:hidden" onClick={toggleMenu}>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </div>
            <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:relative lg:flex-row flex-col bg-gray-800 lg:bg-transparent absolute lg:static top-16 left-0 w-full lg:w-auto lg:top-auto lg:left-auto`}>
                <ul className="flex lg:flex-row flex-col lg:items-center">
                    <li className="my-2 lg:my-0 lg:mx-4">
                        <a href="#home" className="text-white hover:text-gray-400">Home</a>
                    </li>
                    <li className="my-2 lg:my-0 lg:mx-4">
                        <a href="#about" className="text-white hover:text-gray-400">About</a>
                    </li>
                    <li className="my-2 lg:my-0 lg:mx-4">
                        <a href="#services" className="text-white hover:text-gray-400">Services</a>
                    </li>
                    <li className="my-2 lg:my-0 lg:mx-4">
                        <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
                    </li>
                </ul>
              
            </nav>
        </header>
    );
};

export default Navbar;
