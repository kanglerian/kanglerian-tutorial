import React, { useState } from 'react'
import Google from '../images/googleplay.webp'
import Photo from '../images/lerian.jpg'
import Logo from '../images/react.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';

const CourseNavbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className='text-gray-800 dark:text-slate-100 text-sm'>
      <nav className='container mx-auto px-4'>
        <div className='flex flex-wrap flex-col md:flex-row justify-start md:items-center md:justify-between md:gap-10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-3 md:gap-10'>
            <Link to='/' className='flex items-center gap-3'><img src={Logo} alt='logo' className='h-8 transition ease-in-out duration-500 hover:rotate-180' /></Link>
            <form className='inline'>
              <div>
                <span className='mr-2'><i class="fa-solid fa-magnifying-glass"></i></span>
                <input placeholder='What do you want to learn?' className='dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-3 py-1 w-52 focus:outline-none'/>
              </div>
            </form>
            <button className='md:hidden hover:bg-slate-100 hover:dark:bg-slate-700 transition ease-in-out duration-500 hover:rotate-180 py-2 px-3 rounded' onClick={() => setVisible(!visible)}><i class="fa-solid fa-bars"></i></button>
          </div>
          <div className={`${visible === true ? '' : 'hidden'} md:block w-full md:w-auto md:mt-0`}>
            <ul className='flex flex-col items-center justify-center mt-5 md:mt-0 md:flex-row md:space-x-2 md:space-y-0 space-y-3'>
              <NavLink className={pathname === "/" ? "font-bold" : ""} to="/">
                <li className='hover:bg-slate-100 md:hover:bg-transparent px-4 py-1 rounded' role='button'>Video Tutorial</li>
              </NavLink>
              <NavLink className={pathname === "/tasks" ? "font-bold" : ""}to='/tasks'>
                <li className='hover:bg-slate-100 md:hover:bg-transparent px-4 py-1 rounded' role='button'>Tugas Kuliah</li>
              </NavLink>
              <NavLink>
                <li className='flex items-center justify-between gap-2 border border-slate-200 dark:border-slate-600 px-1 text-xs py-1 rounded-full' role='button'>
                  <img src={Photo} alt='' className='rounded-full' style={{ width:25, height:25 }}/>
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