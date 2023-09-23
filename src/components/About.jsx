import React from 'react'
import orangblack from '../assets/orangblack.jpg'
import dahpyblack from '../assets/dahbyblack.jpg'
export default function About() {
  return (
<>

<div className='About' >

<div className='orangblack' >
    <img src={orangblack} alt="" />
</div>
<div className='dahpyblack' >
    <img src={dahpyblack} alt="" />
    
    </div>
    <div className='abouttext'>

    <h1>About Our Shop</h1>
    <p>There are many variations of passages of Lorem Ipsum There are many <br /> variations of passages of Lorem Ipsum</p> 
    <button>Read More</button>
</div> 



</div>



</>
  )
}
