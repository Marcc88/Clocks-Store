import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Navbar() {
  return (
<>

<header className='navber'>
  <h3>HANDTIME</h3>
<ul className='lol' ><li><a href='About'>ABOUT</a></li></ul>
<ul><li><Link to="Fristpage">HOME</Link></li></ul>
<ul><li><Link to="Products">PRODUCTS</Link></li></ul>
<ul><li><Link to="Testimonial">TESTIMONIAL</Link></li></ul>
<ul><li><Link to="Contact">CONTACT US</Link></li></ul>



</header>

</>
  )
}
