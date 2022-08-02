import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Landing_Page from './components/Landing_page/HomePage'
import { Routes, Route } from "react-router-dom"
import PHP_Board from './components/Dashboard/PHP_Board'
import Python_Board from './components/Dashboard/Python_Board'
import JavaScript_Board from './components/Dashboard/JavaScript_Board'
const App = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={ <Landing_Page/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
        <Route path="php_board" element={ <PHP_Board/> } />
        <Route path="python_board" element={ <Python_Board/> } />
        <Route path="javascript_board" element={ <JavaScript_Board/> } />
      </Routes>
    </div>
  )
}

export default App