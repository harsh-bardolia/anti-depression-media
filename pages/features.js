import React, { useState } from 'react'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Header from './components/Header'
import Subscribe from './components/Subscribe'

const Features = () => {
  const [x, setX] = useState(false);
  const toggleTheme = () => {
    setX(x =>!x);
  }

  return (
    <div class={x ? 'dark' : ''} className="bg-black h-screen dark:bg-gray-600">
        <Header onDarkToggle={toggleTheme} />

        <Feature />

        <Subscribe />

        <Footer  />
    </div>
  )
}

export default Features