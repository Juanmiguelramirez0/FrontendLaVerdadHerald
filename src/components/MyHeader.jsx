// import { Link } from 'react-router-dom';

// export default function MyHeader() {
//   const links = [
//     'News',
//     'Sports',
//     'Opinion',
//     'Literary',
//     'Features',
//     'Specials',
//     'Arts',
//     'About',
//     'Contact Us',
//   ];

//   return (
//     <header className="bg-white shadow-md h-16 fixed top-0 w-full z-50">
//       <div className="container mx-auto h-full flex items-center justify-between px-4">
//         {/* Logo / Brand */}
//         <Link to="/dashboard" className="text-lg font-bold">
//           La Verdad Herald
//         </Link>
        

//         {/* Horizontal navigation links */}
//         <div className="flex space-x-4 overflow-x-auto">
//           {links.map((label) => (
//             <Link
//               key={label}
//               to={`/${label.toLowerCase().replace(/\s+/g, '')}`}
//               className="px-3 py-2 text-gray-800 hover:text-blue-600 whitespace-nowrap"
//             >
//               {label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }
