import React from 'react'
import "./Footer.css";
import  postimag1 from '../assests/JavaScript-logo.png'
import  postimag2 from '../assests/react.jpeg'
const Footer = () => {
  return (
    <div className='foot'>
     <div className='post1'>

<img style={{ width:"100%", height:"200px"}}  className='imagepost'src={postimag1} alt="image"/>
<p>JAVASCRIPT</p>
<h4>Learn REACT. This is<br/> world most popular language.</h4>
     </div>
     <div className='post2'>
     <img  style={{ width:"100%", height:"200px"}} className='imagepost2'src={postimag2} alt="image"/>
     <p>REACT</p>
     <h4>Learn REACT. This is<br/> world most popular language.</h4>
     </div>
      
    </div>
  )
}

export default Footer
