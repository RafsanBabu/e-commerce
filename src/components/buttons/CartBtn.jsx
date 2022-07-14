import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const CartBtn = () => {
  const state = useSelector((state) => state)
  // const length = state.length;
  return (
    <>
        <NavLink to='/cart' className='btn btn-outline-primary ml-2'>
            <span className='fa fa-shopping-cart me-1'></span>Cart ({state.addItems.length})
        </NavLink>
    </>
  )
}

export default CartBtn