 import React from 'react'
import four from '../assets/w4.png'
import five from '../assets/w5.png'
import sex from '../assets/w6.png'
import seven from '../assets/w7.png'
import eight from '../assets/w8.png'
import nine from '../assets/w9.png'

export default function Footer() {
  return (
<>
<div className='footer' >

<div className='contain' >
<div className='head' >
    <h1>HANDTIME</h1>
<h3>________________________________________________________________________</h3>
</div>

<div className='kolo' >



<div className='foto' >

<div className='about' >
<h3>About Shop</h3>
<div className='adrees' >
<i class="fa-solid fa-location-dot"></i>
<h4>Adress</h4>
</div>
<div className='adrees' >
<i class="fa-solid fa-square-phone"></i>
<h4>+011234567890</h4>

</div>
<div className='adrees' >
<i class="fa-solid fa-envelope"></i>
<h4>+demo@gmail.com</h4>

</div>


</div>


</div>

<div className='Informations' >
<h3>Informations</h3>
<h5>ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod <br /> tempor incididunt Lorem ipsum dolor sit amet. <br />Lorem ipsum dolor sit amet.  </h5>
</div>

<div className='Instagram' >
<h3>Instagram</h3>

<div className='module' >

<img src={four} alt="" srcset="" />
<img src={five} alt="" srcset="" />
<img src={sex} alt="" srcset="" />
<img src={seven} alt="" srcset="" />
<img src={eight} alt="" srcset="" />
<img src={nine} alt="" srcset="" />
</div>

</div>

<div className='Newsletter' >
<h3>Newsletter</h3>
<input type="email" placeholder='Enter your email' />
<button>SUBSCRIB</button>

<div className='icons' >
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-youtube"></i>

</div>

</div>



</div>

</div>

<div className='loi' >
<h3>© 2023 All Rights Reserved By Free Html Templates</h3>

</div>


</div>




</>
  )
}
