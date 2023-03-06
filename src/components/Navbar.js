import React, { useState } from 'react'
import Logo from '../images/react.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className='text-gray-800 text-sm'>
      <div className='text-center bg-gray-900 text-white py-2'>
        <p>Support Creator Indonesia 🇮🇩 <span className='underline'>Lerian Febriana.</span></p>
      </div>
      <nav className='container mx-auto px-4'>
        <div className='flex flex-wrap flex-col md:flex-row justify-start md:items-center md:justify-between md:gap-10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-10'>
            <Link className='flex items-center gap-3'><img src={Logo} alt='logo' className='h-8 transition ease-in-out duration-500 hover:rotate-180' /><span className='font-bold text-lg'>Tutorial Online</span></Link>
            <button className='md:hidden hover:bg-gray-700 transition ease-in-out duration-500 hover:rotate-180 py-2 px-3 rounded' onClick={() => setVisible(!visible)}><i class="fa-solid fa-bars"></i></button>
          </div>
          <div className={`${visible === true ? '' : 'hidden'} md:block w-full md:w-auto md:mt-0 mt-5`}>
            <ul className='flex justify-center flex-row md:space-x-2'>
              <NavLink exact className={pathname === "/" ? "font-bold" : ""} to='/'>
                <li className='hover:bg-gray-700 md:hover:bg-transparent hover:text-sky-300 px-4 py-2 rounded' role='button'>Beranda</li>
              </NavLink>
              <NavLink className={pathname === "/tutorials" ? "font-bold" : ""} to='/tutorials'>
                <li className='hover:bg-gray-700 md:hover:bg-transparent hover:text-sky-300 px-4 py-2 rounded' role='button'>Tutorial</li>
              </NavLink>
              <NavLink className={pathname === "/courses" ? "font-bold" : ""} to='/courses'>
                <li className='hover:bg-gray-700 md:hover:bg-transparent hover:text-sky-300 px-4 py-2 rounded' role='button'>Kuliah Online</li>
              </NavLink>
              <NavLink className={pathname === "/blogs" ? "font-bold" : ""} to='/blogs'>
                <li className='hover:bg-gray-700 md:hover:bg-transparent hover:text-sky-300 px-4 py-2 rounded' role='button'>Blog</li>
              </NavLink>
              <NavLink className={pathname === "/about" ? "font-bold" : ""} to='/about'>
                <li className='hover:bg-gray-700 md:hover:bg-transparent hover:text-sky-300 px-4 py-2 rounded' role='button'>Tentang</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar