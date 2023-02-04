import React from 'react'
import "./Mid.css"
import boy from '../assests/image.jpeg'
const Mid = () => {
  return (
    <div className='mid'>
        <div className='left'>
        
            <p>Learn to Code<br/>
            Practice<br/>
            Interview Preparation</p>
          
        </div>
        <div className='right'>
            <img className='image' src={boy} alt="refresh kar pic aa jayegie" />
        </div>
      
    </div>
  )
}

export default Mid
