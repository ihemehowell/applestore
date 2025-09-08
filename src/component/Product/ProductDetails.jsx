import React from 'react'
import {useParams} from "react-router-dom";
import {useState} from "react";
import Data from "../../Data.js";
import {useDispatch} from "react-redux";
import {additem , delitem} from "../../redux/Actions/index.js";
const ProductDetails = () => {
    const [cartBtn, setCartBtn] =useState('Add to cart')
    const proid = useParams()
    const proDetail = Data.filter(x => x.id ==proid.id)
    const product = proDetail[0]
    const dispatch = useDispatch()
    const handleCart = (product) => {
        if (cartBtn === 'Add to cart') {
            dispatch(additem(product));
            setCartBtn('Remove from cart');
        } else {
            dispatch(delitem(product));
            setCartBtn('Add to cart');
        }
    };

    return (
        <div>
        <div className="container mt-5 mb-5 h-75">
        <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto ">
            <img src={product.img} alt={product.title} height='400px' width='400px' className='rounded-3'/>
        </div> <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3 text-primary text-center product-title"> {product.title} </h1>
            <hr/>
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button className="btn btn-outline-primary px-3" onClick={() => handleCart(product)}>{cartBtn}</button>
        </div>
        </div>
        </div>
    </div>
    )
}
export default ProductDetails