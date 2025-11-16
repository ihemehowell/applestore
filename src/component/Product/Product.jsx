import React from 'react'
import {Link} from "react-router-dom";
import Data from "../../Data"

const Product = () => {
    const cardItem =(item) => {
        return (
            <div className='card py-5  me-3 ' key={item.id} style={{width: '18rem'}}>
                <img src={item.img} alt={item.title} className=' rounded-3' height='300px' />
                <div className="card-body ">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <Link to={`/products/${item.id}`} className='btn btn-outline-dark border-dark-subtle'>View Details  </Link>
                </div>
            </div>
        )
    }
  return (
      <div>
          <div className='container py-5'>
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h1>Products</h1>
                      <hr/>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row justify-content-center gap-3 mb-5">
                  {Data.map(cardItem)}
              </div>
          </div>
      </div>

  )
}

export default Product