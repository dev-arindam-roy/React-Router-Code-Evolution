import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../middleware/Auth';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');

  const auth = useAuth();

  const redirectTo = location.state?.path || '/'

  const login = (e) => {

    e.preventDefault();
    if (username === 'arindam') {
      auth.login(username);
      navigate(redirectTo, { replace: true });
    } else {
      alert('Wrong username');
    }
    
  }
  return (
    <>
        <h1>Sign In Page</h1>
        <hr/>
        <button type="button" onClick={(e) => navigate(-1)}>Back</button>
        <hr/>

        <p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={login}>Sign In</button>
        </p>
    </>
  )
}

export default SignIn