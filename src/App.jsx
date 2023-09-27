import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        {/* <Dashboard/> */}
      </Router>
    </>
  )
}

export default App
