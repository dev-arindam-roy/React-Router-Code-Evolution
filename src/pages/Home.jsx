import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../middleware/Auth';

const Home = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const letsSignUp = (e) => {
    e.preventDefault();
    navigate('/create-account?aff_id=123&sub_id=900&coupon_code=xxxx123');
  }
  return (
    <>
        <h1>Home Page</h1>
        <hr/>
        {!auth.user && (
          <button type="button" onClick={(e) => {e.preventDefault(); navigate('/login')}}>SignIn</button>
        )}
        {!auth.user && (
          <button type="button" onClick={letsSignUp}>Create Account</button>
        )}
        {auth.user && (
          <h3>Hi {auth.user}</h3>
        )}

        
    </>
  )
}

export default Home