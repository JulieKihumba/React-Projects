import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col m-0 p-0">
        <Navbar />
        <Body className="flex-grow"/>
      </div>
    </>
  )
}

export default App