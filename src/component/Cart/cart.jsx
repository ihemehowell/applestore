import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () =>{
    const state = useSelector((state)  => state.addItems)
    const dispatch = useDispatch()


    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItem = (cartItem) => {
  return (
    <div>
        <div className='px-4 my-5 bg-light rounded-3' key={cartItem}>
            <div className="container py-4">
                <button className='btn-close float-end' onClick={() => handleClose(cartItem)}/>
                <div className='justify-content-center row'>
                    <div className='col-md-4'>
                        <img src={cartItem.img} alt={cartItem} height='200px' width='180px'/>
                    </div>
                </div>
                
        </div>
        </div>
    </div>
  )
}

const emptyCart = () => {
    return (
        <div className="bg-light px-4 my-5 rounded-3 py-5">
            <div className=" container py-4">
                <div className='row'>
                    <h3>Your cart is empty</h3>
                </div>
            </div>
        </div>
    )
}

const button = () => {
    return (
        <div className="container">
            <div className=" row">
               
                    <Link to='/checkout' className="btn btn-outline-primary mb-5 w-25" mx-auto>
                    proceed to checkout</Link>
            
            </div>
        </div>
    )
}

return (
    <div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItem)}
        {state.length !== 0 && button()}
    </div>
)
}

export default Cart