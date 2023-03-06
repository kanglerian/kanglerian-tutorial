import React, { useState } from 'react'
import Google from '../images/googleplay.webp'
import Dummy from '../images/dummy.jpg'
import Logo from '../images/react.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';

const CourseNavbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className='text-gray-800 text-sm'>
      <nav className='container mx-auto px-4'>
        <div className='flex flex-wrap flex-col md:flex-row justify-start md:items-center md:justify-between md:gap-10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-3 md:gap-10'>
            <Link to='/' className='flex items-center gap-3'><img src={Logo} alt='logo' className='h-8 transition ease-in-out duration-500 hover:rotate-180' /><span className='font-bold text-lg'>Tutorial Online</span></Link>
            <form className='inline'>
              <div>
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <input placeholder='What do you want to learn?' className='text-gray-600 text-xs px-3 py-1 w-52 focus:outline-none'/>
              </div>
            </form>
            <button className='hover:bg-slate-100 py-2 px-3 rounded'><i class="fa-solid fa-moon"></i></button>
            <button className='md:hidden hover:bg-slate-100 transition ease-in-out duration-500 hover:rotate-180 py-2 px-3 rounded' onClick={() => setVisible(!visible)}><i class="fa-solid fa-bars"></i></button>
          </div>
          <div className={`${visible === true ? '' : 'hidden'} md:block w-full md:w-auto md:mt-0`}>
            <ul className='flex flex-col justify-center mt-5 md:mt-0 md:flex-row md:space-x-2 md:space-y-0 space-y-3'>
              <NavLink exact className={pathname === "/" ? "font-bold" : ""} to='/'>
                <li className='hover:bg-slate-100 md:hover:bg-transparent px-4 py-1 rounded' role='button'>My Courses</li>
              </NavLink>
              <NavLink className={pathname === "/tutorials" ? "font-bold" : ""} to='/tutorials'>
                <li className='hover:bg-slate-100 md:hover:bg-transparent px-4 py-1 rounded' role='button'>Purchases</li>
              </NavLink>
              <NavLink className={pathname === "/account" ? "font-bold" : ""} to='/courses'>
                <li className='flex items-center justify-between gap-2 border border-gray-100 px-1 text-xs py-1 rounded-full' role='button'>
                  <img src={Dummy} alt='' className='rounded-full' style={{ width:25, height:25 }}/>
                  <span>Lerian Febriana</span>
                  <span className='pr-2'><i class="fa-solid fa-right-from-bracket"></i></span>
                </li>
              </NavLink>
              <NavLink className={pathname === "/tutorials" ? "font-bold" : ""}>
                <li className='px-4 py-1 rounded' role='button'>
                  <img src={Google} alt='logo' className='h-8' />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default CourseNavbar