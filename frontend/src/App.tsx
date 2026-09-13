// import React, {useEffect, useState} from 'react'
import {useEffect, useState} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBar from "./components/NavBar.tsx";

const App = () => {
  //state hooks
  const[darkMode, setDarlMode] = useState(true)

  //effect hooks
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  },[]);

  useEffect(() => {
    AOS.refresh()
  },[darkMode])

  //helper methods
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarlMode(newMode);
    document.documentElement.classList.toggle('dark')
  }

  return (
      <div className={
        darkMode
          ? `bg-linear-to-br from-gray-900 via-[#2e0d10] to-red-900 min-h-screen`
            : `bg-linear-to-br from-gray-50 to-red-50 min-h-screen`
      }>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      </div>
  )
}

export default App