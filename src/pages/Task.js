import React, { useEffect, useState } from 'react'
import CourseNavbar from '../components/CourseNavbar'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Task = () => {
  const [show, setShow] = useState(
    {
      name: 'Button Login',
      images: [
        {
          content: 'https://i.ibb.co/txT4GZV/navbar.png'
        }
      ],
      karyawan: true,
      reguler: true,
      rulesDesktop: [
        {
          rule: 'Tampil',
        }, {
          rule: 'Tidak ada margin',
        },
      ],
      rulesMobile: [
        {
          rule: 'Tidak tampil',
        }, {
          rule: 'Atur margin top sebesar 5 point',
        },
      ],
      rulesBoth: [
        {
          rule: 'Background white',
        }, {
          rule: 'Rounded large',
        }, {
          rule: 'Shadow',
        }, {
          rule: 'Padding Vertikal 2',
        }, {
          rule: 'Padding Horizontal 4',
        },
      ],
    }
  );

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks.json')
      .then((res) => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const changeShow = (task) => {
    setShow({
      name: task.name,
      images: task.images,
      karyawan: task.karyawan,
      reguler: task.reguler,
      rulesDesktop: task.rulesDesktop,
      rulesMobile: task.rulesMobile,
      rulesBoth: task.rulesBoth,
    })
  }
  return (
    <div className='dark:bg-slate-800'>
      <CourseNavbar />
      <div className='container mx-auto px-4 py-5'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='order-3 md:order-none basis-1/6 text-slate-900 dark:text-slate-100 h-screen overflow-y-auto'>
            <h1 className='text-3xl font-bold'>
              <Link className='flex items-center gap-3'><span className='font-bold text-2xl'>Panduan</span></Link>
            </h1>
            <ul className='mt-5 space-y-5 text-sm text-slate-700 dark:text-slate-200'>
              <li className='text-sky-500 font-medium' role='button'>TailwindCSS<br/>Website Kemensos RI</li>
              <li role='button'>Dashboard Kemensos RI</li>
            </ul>
          </div>
          <div className='order-2 md:order-none basis-2/6 bg-slate-50 dark:bg-slate-700 rounded-3xl py-6 px-6'>
            <ul className='space-y-1'>
              {
                tasks.map((task, i) => {
                  return (
                    <li key={i}>
                      <div onClick={() => changeShow(task)} className='flex items-center p-2 transition ease-in-out border border-transparent duration-200 hover:border-slate-200 hover:dark:border-slate-600 hover:translate-x-2 rounded-xl gap-5' role='button'>
                        <span className='flex items-center justify-center bg-orange-400 w-14 h-14 rounded-xl text-white'><i class="transition ease-in-out duration-700 hover:rotate-180 fa-solid fa-ellipsis fa-2x"></i></span>
                        <div className='space-y-1'>
                          <h3 className='text-slate-800 dark:text-slate-100 font-medium text-sm'>{task.name}</h3>
                          <div className='space-x-1'>
                            {
                              task.karyawan &&
                              <span className='bg-red-500 text-xs text-white px-3 py-1 rounded'>Karyawan</span>
                            }
                            {
                              task.reguler &&
                              <span className='bg-emerald-500 text-xs text-white px-3 py-1 rounded'>Reguler</span>
                            }
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='order-1 md:order-none basis-3/6 space-y-5'>
            <div className='md:fixed md:bg-white md:h-[550px] md:overflow-y-auto  md:p-5 md:border rounded-xl'>
              <div className='space-y-8'>
                {
                  show.images.map((image, i) => {
                    return (
                      <img src={image.content} alt='' key={i} className='rounded-lg border w-full' />
                    )
                  })
                }
                <div className='space-y-2'>
                  <h1 className='text-slate-800 dark:text-slate-100 font-bold text-2xl'>{show.name}</h1>
                  <p className='text-slate-600 dark:text-slate-400 text-sm'>Buatlah komponen website kemensos RI menggunakan TailwindCSS dan HTML dengan panduan berikut ini:</p>
                </div>
                <div className='flex flex-wrap gap-3 text-slate-800'>
                  {
                    show.rulesBoth.length > 0 &&
                    <div className='w-full border bg-slate-50 inline-block p-3 rounded-lg text-sm space-y-2'>
                      <span className='pl-3 block font-bold'><i class="fa-solid fa-mobile-screen mr-1"></i><i class="fa-solid fa-display mr-1"></i> Both:</span>
                      <hr />
                      <ul className='space-y-1 text-sm px-2'>
                        {
                          show.rulesBoth.map((ruleBoth, i) => {
                            return (
                              <li key={i}><i class="fa-solid fa-angle-right mr-1"></i> {ruleBoth.rule}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  }
                  {
                    show.rulesDesktop.length > 0 &&
                    <div className='w-full border bg-slate-50 md:inline-block p-3 rounded-lg text-sm space-y-2'>
                      <span className='pl-3 block font-bold'><i class="fa-solid fa-display mr-1"></i> Desktop:</span>
                      <hr />
                      <ul className='space-y-1 text-sm px-2'>
                        {
                          show.rulesDesktop.map((ruleDesktop, i) => {
                            return (
                              <li key={i}><i class="fa-solid fa-angle-right mr-1"></i> {ruleDesktop.rule}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  }
                  {
                    show.rulesMobile.length > 0 &&
                    <div className='w-full border bg-slate-50 inline-block p-3 rounded-lg text-sm space-y-2'>
                      <span className='pl-3 block font-bold'><i class="fa-solid fa-mobile-screen mr-1"></i> Mobile:</span>
                      <hr />
                      <ul className='space-y-1 text-sm px-2'>
                        {
                          show.rulesMobile.map((ruleMobile, i) => {
                            return (
                              <li key={i}><i class="fa-solid fa-angle-right mr-1"></i> {ruleMobile.rule}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task