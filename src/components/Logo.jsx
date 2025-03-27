import React from 'react'
import img from '../../public/logo.png'
function Logo({width = "100px"}) {
  return (
    <div>
      <img 
        src={img}  
        alt="App Logo"
        style={{ width, height: "auto" }}
      />
    </div>
  )
}

export default Logo
