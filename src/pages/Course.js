import React, { useState } from 'react'
import CourseNavbar from '../components/CourseNavbar'
import Dummy from '../images/dummy.jpg'
import { Link } from 'react-router-dom';

const Course = () => {
  const [video, setVideo] = useState({
    id: '',
    name: 'Tutorial Online Kini Hadir!',
    video: '12TuC1sUXxM'
  });
  // eslint-disable-next-line
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Penjelasan ROAD MAP',
      video: 'NRQKZA-JkSI'
    }, {
      id: 2,
      name: 'Penjelasan JSON Server',
      video: 'rPEOw9_nrjk'
    }, {
      id: 3,
      name: 'Penjelasan Figma Dasar',
      video: 'fqyoMgVuu5s'
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
    <div className='md:h-screen overflow-hidden'>
      <CourseNavbar />
      <div className='container mx-auto px-4 py-5'>
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='order-3 md:order-none basis-1/6 text-gray-900 h-screen overflow-y-auto'>
            <h1 className='text-3xl font-bold'>
              <Link className='flex items-center gap-3'><span className='font-bold text-2xl'>Explore</span></Link>
            </h1>
            <ul className='mt-5 space-y-5 text-sm text-gray-600'>
              <li className='text-sky-600 font-medium'>Front End Development</li>
              <li>Back End Development</li>
              <li>Desain Grafis</li>
              <li>Animasi</li>
            </ul>
          </div>
          <div className='order-2 md:order-none basis-2/6 h-screen bg-slate-50 rounded-3xl py-6 px-6 overflow-y-auto'>
            <ul className='space-y-1'>
              {
                courses.map((course, i) => {
                  return (
                    <li key={i} onClick={() => setVideo({ id: i + 1, name: course.name, video: course.video })}>
                      <div className='flex items-center p-2 transition ease-in-out border border-transparent duration-200 hover:border-slate-200 hover:translate-x-2 rounded-xl gap-5' role='button'>
                        <img src={Dummy} alt='' style={{ width: 55, height: 55 }} className='rounded-xl' />
                        <div className='space-y-1'>
                          <h3 className='text-gray-900 font-medium text-sm'>{course.name}</h3>
                          <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='order-1 md:order-none basis-3/6 rounded-3xl space-y-5 h-screen overflow-hidden'>
            <iframe className='w-full h-52 md:h-80 rounded-3xl' src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='space-y-4'>
              <h1 className='text-gray-900 font-bold text-2xl'>{`${video.id}${video.id !== '' ? '.' : ''} ${video.name}`}</h1>
              <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu libero facilisis, commodo elit sed, dapibus dolor. Donec non efficitur dui, sit amet vestibulum est. Curabitur massa augue, luctus vitae finibus id, tempor at lacus.</p>
              <div className='flex items-center gap-2'>
                <img src={Dummy} alt='' className="rounded-full" style={{ width: 40, height: 40 }} />
                <div>
                  <h4 className='text-sm text-gray-900 font-medium'>Lerian Febriana, A.Md.Kom</h4>
                  <p className='text-xs text-gray-500'>Software Engineer</p>
                </div>
              </div>
              <hr />
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