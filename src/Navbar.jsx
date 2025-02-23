import React from 'react'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import"./App.css"
export default function Navbar() {
  return (
    <>
    
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
<nav style={{position:"fixed",top:"0",width:"100%"}}className="bg-gray-800 border-gray-200 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 m">
      <a href="" className="flex items-center">
          
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li>
            <Link to="/" className="block py-2 pl-3 pr-4 text-blue-500 bg-purple-900 rounded md:bg-transparent md:text-purple-500 md:p-0 " aria-current="page">Home</Link>
          </li>
          <li>
            <a href="" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 ">About</a>
          </li>
          <li>
            <Link to="/asignaturas" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  md:hover:text-blue-500 ">Asignaturas</Link>
          </li>
          <li>
            <Link to="/examenes" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0  ">Exámenes</Link>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0  ">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
  <Helmet>
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </Helmet>
    </>
  )
}
