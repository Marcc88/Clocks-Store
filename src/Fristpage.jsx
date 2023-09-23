import React from 'react'
import Container from './assets/container1.jpg'
export default function Fristpage() {
return (
<>

<div className='container' >

<div className='img' >
<img src={Container} />
<div className='klampage1' >
<h1>STYLISH WATCHES</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores <br /> perspiciatis, illo maxime voluptatem a itaque suscipit.</p>
<div className='btnpage1'>
<button className='btncontact' >Contact US</button>
<button className='btnabout'>About US </button>
{/* <i class="fa-brands fa-instagram"></i> */}
</div>
</div>

</div>
</div>

<div className='iconspage1' >
<div className='iconcar' >
<h1><i class="fa-solid fa-van-shuttle"></i></h1>
<h3>FAST DELIVERY</h3>
<p>variations of passages of Lorem Ipsum <br /> available</p>
</div>
<div className='iconcar' >
<h1><i class="fa-solid fa-coins"></i></h1>
<h3>FAST DELIVERY</h3>
<p>variations of passages of Lorem Ipsum <br /> available</p>
</div>
<div className='iconcar' >
<h1><i class="fa-solid fa-arrow-rotate-right"></i></h1>
<h3>FAST DELIVERY</h3>
<p>variations of passages of Lorem Ipsum <br /> available</p>
</div>
<div className='iconcar' >
<h1><i class="fa-solid fa-gear"></i></h1>
<h3>FAST DELIVERY</h3>
<p>variations of passages of Lorem Ipsum <br /> available</p>
</div>


</div>





</>
)
}
