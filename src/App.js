import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tutorial from './pages/Tutorial'
import Course from './pages/Course'
import Blog from './pages/Blog'
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Course />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/tutorials' element={<Tutorial />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App