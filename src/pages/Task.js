import React, { useState } from 'react'
import CourseNavbar from '../components/CourseNavbar'
import { Link } from 'react-router-dom';

const Task = () => {
  const [show, setShow] = useState(
    {
      name: 'Button Login',
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
          rule: 'Margin top 5',
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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Button Login',
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
          rule: 'Margin top 5',
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
    }, {
      id: 2,
      name: 'Logo Kemensos RI',
      karyawan: true,
      reguler: true,
      rulesDesktop: [
        {
          rule: 'Enak aja!',
        }, {
          rule: 'Tidak ada margin',
        },
      ],
      rulesMobile: [
        {
          rule: 'Tidak tampil',
        }, {
          rule: 'Margin top 5',
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
  ]);

  const changeShow = (task) => {
    setShow({
      name: task.name,
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
              <li className='text-sky-500 font-medium' role='button'>Website Kemensos RI</li>
              <li role='button'>Dashboard Kemensos RI</li>
            </ul>
          </div>
          <div className='order-2 md:order-none basis-2/6 h-screen bg-slate-50 dark:bg-slate-700 rounded-3xl py-6 px-6 overflow-y-auto'>
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
          <div className='order-1 md:order-none basis-3/6 space-y-5 h-screen overflow-hidden'>
            <div className='space-y-8'>
              <h1 className='text-slate-800 dark:text-slate-100 font-bold text-2xl'>{show.name}</h1>
              <div className='flex gap-2 text-slate-800'>
                <div className='w-1/3 bg-slate-50 md:inline-block p-3 rounded-lg text-sm space-y-2'>
                  <span className='block text-center font-bold'>Desktop:</span>
                  <hr/>
                  <ul className='space-y-1 text-sm px-2'>
                    {
                      show.rulesDesktop.map((ruleDesktop, i) => {
                        return (
                          <li key={i}>{ruleDesktop.rule}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className='w-1/3 bg-slate-50 inline-block p-3 rounded-lg text-sm space-y-2'>
                  <span className='block text-center font-bold'>Desktop:</span>
                  <hr/>
                  <ul className='space-y-1 text-sm px-2'>
                    {
                      show.rulesDesktop.map((ruleDesktop, i) => {
                        return (
                          <li key={i}>{ruleDesktop.rule}</li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className='w-1/3 bg-slate-50 inline-block p-3 rounded-lg text-sm space-y-2'>
                  <span className='block text-center font-bold'>Desktop:</span>
                  <hr/>
                  <ul className='space-y-1 text-sm px-2'>
                    {
                      show.rulesDesktop.map((ruleDesktop, i) => {
                        return (
                          <li key={i}>{ruleDesktop.rule}</li>
                        )
                      })
                    }
                  </ul>
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