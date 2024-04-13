import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
        <h1>SignUp | Create New Account</h1>
        <hr/>
        <button type="button" onClick={(e) => navigate('/')}>Back</button>
    </>
  )
}

export default SignUp