import React from 'react'
import { Link, useNavigate } from  'react-router-dom'


const NotFound = () => {
    const navigate = useNavigate();
  return (
    <>
        <h1>Page Not Found</h1>
        <hr/>
        <Link to="/?back=home">Back To Home</Link>
        <br/>
        <button type="button" onClick={(e) => navigate(-1)}>Back</button>
    </>
  )
}

export default NotFound