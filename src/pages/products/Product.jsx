import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate();
  return (
    <>
        <h1>Product Page</h1>
        <hr/>

        <br/><br/>

        <Link to="new-products">New Products</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={(e) => navigate('old-products')}>Old Products</button>
        <hr/>

        <Outlet/>
    </>
  )
}

export default Product