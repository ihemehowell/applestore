import React from 'react'
import { Link } from 'react-router-dom'

const about = () => {
  return (
    <div>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        <h1 className="text-primary fw-bold mb-4">About us </h1>
        <p>

        </p>
        <Link to='/contact' className='btn btn-outline-primary px-3'>Contact us</Link>
            
        </div>
        <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/secondbackgrond.jpeg" alt="About Us" height='400px' width='400px'/>
        

        </div>
        </div>
        </div>
    </div>
  )
}

export default about