import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, incidunt? Impedit sit, dolorum quod ab odio pariatur numquam autem.
               Necessitatibus voluptatibus molestiae perferendis consectetur aliquid cum iure, pariatur expedita laboriosam?
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src='/assets/images/about/about.jpg' alt='AboutImage' height="400px" width="400px"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About