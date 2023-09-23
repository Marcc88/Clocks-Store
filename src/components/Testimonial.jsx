import React from 'react'
// import bootsrap from 'bootstrap'
import client from '../assets/client.jpg'
export default function Testimonial() {
  return (
<>
<h1 className='lolo' >Testimonial</h1>
<div className='Testimonial' >

<div className='imgclient' >
<img src={client} alt="" srcset="" />

</div>

<div className='comments' >

<h3>MOROJINK</h3>
<h5>CUSTOMER</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</p>
</div>



</div>



</>
  )
}
