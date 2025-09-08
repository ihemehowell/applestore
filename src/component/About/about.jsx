import React from 'react'
import { Link } from 'react-router-dom'

const about = () => {
  return (
    <div>
        <div className="container">
        <div className="row">
            <h1 className="text-dark fw-bold mb-4 text-center ">About us </h1>
            <hr/>
        <div className="col-md-6 d-flex flex-column justify-content-center align-content-center text-center mb-5">

        <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur culpa, hic ipsa iusto libero nisi nobis quos. Accusamus ad alias asperiores assumenda at consequatur cum dicta dignissimos dolorem doloribus dolorum enim error eum ex, excepturi exercitationem fuga fugit id in ipsum libero nesciunt odio omnis placeat porro quasi similique unde ut vel velit veritatis vitae voluptatem voluptates! Adipisci autem beatae deleniti dicta earum facere non pariatur possimus sequi vel. Alias aliquam architecto aspernatur aut culpa deleniti deserunt dolorum eius, eligendi hic ipsam magnam minus molestiae nisi obcaecati odio officiis perspiciatis placeat praesentium ratione repellendus repudiandae, sequi sit, voluptatem voluptatibus.
        </p>
        <Link to='/contact' className='btn btn-outline-dark border-dark-subtle px-3 '>Contact us</Link>
            
        </div>
        <div className="col-md-6 d-flex justify-content-center">
            <img src="../src/assets/about-us.png" alt="About Us" height='400px' width='400px'/>
        

        </div>
        </div>
        </div>
    </div>
  )
}

export default about