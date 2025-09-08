import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import {delitem} from "../../redux/Actions/index.js";

const Cart = () => {
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delitem(item))
    }


    const cartItems = (cartItem) => {
        return(
            <div className='px-5 my-5 bg-light rounded-3' key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" onClick={() => handleClose(cartItem)}></button>
                    <div className="justify-content-center row">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height='400px' width='480px' className='rounded-3'/>
                        </div>

                        <div className="col-md-6 mx-5 px-5">
                            <h3>{cartItem.title}</h3>
                            <p className="fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const emptyCart = () => {
        return(
            <div className="bg-light px-5 my-5 rounded-3 py-5 w-100 vh-100 mx-auto">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <Link to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to checkout</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    )
}

export default Cart