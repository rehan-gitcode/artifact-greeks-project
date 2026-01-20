import { ChevronDown } from 'lucide-react';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="ml-2 mr-3">
                <span className="text-xl font-bold text-gray-800">ARTIFACT</span>
                <br />
                <span className="text-sm font-semibold text-gray-600">GEEKS</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 mr-6">
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Courses <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Career</Link>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Placement <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Blog</Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
           </div>
            

        
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Login</Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Signup</Link>
            <Link href="/admin" className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-md text-sm md:text-sm lg:text-base transition-colors whitespace-nowrap">
              Admin
            </Link>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors whitespace-nowrap">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};























// import { ChevronDown } from 'lucide-react';
// import Link from "next/link"


// export default function Navbar() {
 



//   return (

//     <nav className="bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
         
//           <div className="shrink-0 flex items-center">
//             <div className="flex items-center">

          
             
//               <div className="ml-2 mr-3">
//                 <span className="text-xl font-bold text-gray-800">ARTIFACT</span>
//                 <br />
//                 <span className="text-sm font-semibold text-gray-600">GEEKS</span>
//               </div>
//             </div>
//           </div>

        
//           <div className="hidden md:flex items-center space-x-8  ">
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            
//             <div className="relative">
//               <button 
              
//                 className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
//               >
//                 Courses <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//             </div>

//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Career</Link>
            
//             <div className="relative">
//               <button 
                
//                 className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
//               >
//                 Placement <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//             </div>

//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Blog</Link>
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Alumni</Link>
//           </div>

//           {/* entroll now buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Login</Link>
//             <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">Signup</Link>
//             <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 text-sm md:text-sm lg:text-base rounded-md transition-colors whitespace-nowrap">
//               Enroll Now
//             </button>

           
//           </div>
          

         
         
//         </div>
//       </div>

     
//     </nav>
//   );
// };

