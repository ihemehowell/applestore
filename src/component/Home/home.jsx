import React from 'react'
import iphone1 from '../../assets/14promax.jpeg'
import iphone2 from '../../assets/16promax.jpeg'
import iphone3 from '../../assets/iphone15.jpeg'
import iphone4 from '../../assets/iphone13.jpeg'
import Product from  '../Product/Product'


const home = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className='carousel slide' data-bs-ride='carousel'>
            <div className="carousel-indicators">
                <button type='button' data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='0' className='active' aria-current='true' aria-label='slide 1'></button>
                <button type='button' data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='1'  aria-label='slide 2'> </button>
                <button type='button' data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='2'  aria-label='slide 3'></button>
                <button type='button' data-bs-target='#carouselExampleIndicators'
                data-bs-slide-to='3'  aria-label='slide 4'></button>

            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={iphone1} alt="iphone" className='d-block w-100' height='500px' />
                </div>
                <div className="carousel-item">
                    <img src={iphone2} alt="iphone" className='d-block w-100' height='500px' />
                </div>
                <div className="carousel-item">
                    <img src={iphone3} alt="iphone" className='d-block w-100' height='500px' />
                </div>
                <div className="carousel-item">
                    <img src={iphone4} alt="iphone" className='d-block w-100' height='500px' />
                </div>
            </div>
            <button className="carousel-control-prev" type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide='prev'>
                <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type='button'
            data-bs-target="#carouselExampleIndicators" data-bs-slide='next'>
                <span className="carousel-control-next-icon" aria-hidden='true'></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <Product/>
    </div>
  )
}

export default home