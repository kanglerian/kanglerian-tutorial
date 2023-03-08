import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Course from './pages/Course'
import Task from './pages/Task'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Course />} />
        <Route path='/tasks' element={<Task />} />
      </Routes>
    </Router>
  )
}

export default App