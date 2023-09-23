import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Contact from './components/Contact';
import Fristpage from './Fristpage';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
const map = createBrowserRouter([
{

path : "",
element : <App/>,
children :[
  {
    path : 'About', 
    element : <About/>
  },
  {
    path : 'Contact',
    element : <Contact/>
  },
  {
    path : 'Fristpage',
    element : <Fristpage/>
  },
  {
    path : 'Products',
    element : <Products/>
  },
  {
    path : 'Testimonial',
    element : <Testimonial/>
  }
]

}



])
root.render(
  <RouterProvider router={map} />
  // <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
