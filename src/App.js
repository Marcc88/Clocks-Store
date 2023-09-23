// import logo from './logo.svg';
import './App.css';
import './components/Navbar.css'
import Fristpage from './Fristpage.jsx';
import './components/Fristpage.css'
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx'
import '../src/components/About.css'
import Products from './components/Products';
import './components/Products.css'
import Contact from './components/Contact.jsx';
import './components/Contact.css'
import Testimonial from './components/Testimonial';
import './components/Testimonial.css'
import Footer from './components/Footer.jsx'
import './components/Footer.css'
import {Outlet} from 'react-router-dom'
function App() {
  return (
<>
{/* <nav><link to={Map} ></link></nav> */}
{/* <App>link to={About}</App> */}
< Navbar/>
<Fristpage />
<About/>
<Products/>
<Contact/>
<Testimonial/>
<Outlet />
<Footer/>
</>

  );
}

export default App;
