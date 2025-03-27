import React from 'react'
import img1 from '../../public/logo1.png'

const Logo1 = () => {
  return (
    <div>
         <img 
           src={img1}  
           alt="App Logo"
           style={{  height: "auto",marginLeft:"90px" }}
         />
       </div>
  )
}

export default Logo1