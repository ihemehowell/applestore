import React from 'react'
import apple from '../../assets/1.jpg'
import phone from '../../assets/2.jpg'
import iph from '../../assets/3.jpg'
import one from '../../assets/4.jpg'
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
                    <img src={apple} alt="iphone" className='d-block w-100 image-fluid' height='500px' />
                </div>
                <div className="carousel-item">
                    <img src={phone} alt="iphone" className='d-block w-100' height='500px' />
                </div>
                <div className="carousel-item">
                    <img src={iph} alt="iphone" className='d-block w-100' height='500px' />
                </div>
                <div className="carousel-item">
                    <img src={one} alt="iphone" className='d-block w-100' height='500px' />
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
        <Product />
    </div>
  )
}

export default home
