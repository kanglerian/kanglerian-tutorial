import React, { useState } from 'react'
import CourseNavbar from '../components/CourseNavbar'
import Photo from '../images/lerian.jpg'
import { Link } from 'react-router-dom';

const Course = () => {
  const [video, setVideo] = useState({
    id: '',
    name: 'Tutorial Online Kini Hadir!',
    video: '12TuC1sUXxM',
    desc: 'Lorem Ipsum dolor sit amet.'
  });
  // eslint-disable-next-line
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Penjelasan ROAD MAP',
      video: 'NRQKZA-JkSI',
      desc: 'Lorem Ipsum dolor sit amet.'
    }, {
      id: 2,
      name: 'Penjelasan JSON Server',
      video: 'rPEOw9_nrjk',
      desc: 'Lorem Ipsum dolor sit amet.'
    }, {
      id: 3,
      name: 'Penjelasan Figma Dasar',
      video: 'fqyoMgVuu5s',
      desc: 'Lorem Ipsum dolor sit amet.'
    }
  ]);
  // eslint-disable-next-line
  const [benefits, setBenefits] = useState([
    {
      id: 1,
      icon: 'fa-solid fa-earth-asia',
      name: '100% Online Courses',
      desc: 'Start now & learn at your own schedules'
    }, {
      id: 2,
      icon: 'fa-regular fa-clock',
      name: '6 Months to Complete',
      desc: 'Suggested 4 hours/week'
    }, {
      id: 3,
      icon: 'fa-regular fa-calendar',
      name: 'Flexible Schedule',
      desc: 'Set and maintain flexible deadlines'
    }, {
      id: 4,
      icon: 'fa-regular fa-comment-dots',
      name: 'Indonesia',
      desc: 'Subtitles: Indonesia & English'
    },
  ]);
  return (
    <div className='md:h-screen overflow-hidden dark:bg-slate-800'>
      <CourseNavbar />
      <div className='container mx-auto px-4 py-5'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='order-3 md:order-none basis-1/6 text-slate-900 dark:text-slate-100 h-screen overflow-y-auto'>
            <h1 className='text-3xl font-bold'>
              <Link className='flex items-center gap-3'><span className='font-bold text-2xl'>Explore</span></Link>
            </h1>
            <ul className='mt-5 space-y-5 text-sm text-slate-700 dark:text-slate-200'>
              <li className='text-sky-500 font-medium' role='button'>Front End Development</li>
              <li role='button'>Back End Development</li>
              <li role='button'>Desain Grafis</li>
              <li role='button'>Animasi</li>
            </ul>
          </div>
          <div className='order-2 md:order-none basis-2/6 h-screen bg-slate-50 dark:bg-slate-700 rounded-3xl py-6 px-6 overflow-y-auto'>
            <ul className='space-y-1'>
              {
                courses.map((course, i) => {
                  return (
                    <li key={i} onClick={() => setVideo({ id: i + 1, name: course.name, video: course.video, desc: course.desc })}>
                      <div className='flex items-center p-2 transition ease-in-out border border-transparent duration-200 hover:border-slate-200 hover:dark:border-slate-600 hover:translate-x-2 rounded-xl gap-5' role='button'>
                        <span className='flex items-center justify-center bg-orange-400 w-24 h-14 rounded-xl text-white'><i class="transition ease-in-out duration-700 hover:rotate-180 fa-solid fa-ellipsis fa-2x"></i></span>
                        <div className='space-y-1'>
                          <h3 className='text-slate-800 dark:text-slate-100 font-medium text-sm'>{course.name}</h3>
                          <p className='text-xs text-slate-600 dark:text-slate-400'>{course.desc}</p>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='order-1 md:order-none basis-3/6 space-y-5 h-screen overflow-hidden'>
            <iframe className='w-full h-56 md:h-80 rounded-2xl md:rounded-3xl' src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='space-y-4'>
              <h1 className='text-slate-800 dark:text-slate-100 font-bold text-2xl'>{`${video.id}${video.id !== '' ? '.' : ''} ${video.name}`}</h1>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>{video.desc}</p>
              <div className='flex items-center gap-2 border-t dark:border-slate-600 pt-5'>
                <img src={Photo} alt='' className="rounded-full" style={{ width: 40, height: 40 }} />
                <div>
                  <h4 className='text-sm text-slate-800 dark:text-slate-100 font-medium'>Lerian Febriana, A.Md.Kom</h4>
                  <p className='text-xs text-slate-600 dark:text-slate-400'>Software Engineer</p>
                </div>
              </div>
              {/* <div className='flex flex-wrap'>
                {
                  benefits.map((benefit, i) => {
                    return (
                      <div className='basis-1/2 flex items-center gap-2 mb-5' key={i}>
                        <span className="flex items-center justify-center bg-amber-200 rounded-full" style={{ width: 40, height: 40 }}>
                          <i className={`${benefit.icon}`}></i>
                        </span>
                        <div>
                          <h4 className='text-sm text-gray-900 font-medium'>{benefit.name}</h4>
                          <p className='text-[11px] text-gray-500'>{benefit.desc}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course