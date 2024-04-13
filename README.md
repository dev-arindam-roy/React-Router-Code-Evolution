# All Abou React Router

```js
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { useParams, useSearchParams, Outlet } from 'react-router-dom'

<Outlet/>

const navigate = useNavigate();
navigate('/')
navigate('/about-us')
navigate('/create-account?aff_id=123&sub_id=900');

const params = useParams();
params.userId

const [searchParams, setSearchParams] = useSearchParams();
searchParams.get('name');

---


<li><Link to="/">Home</Link></li>
<li><NavLink to="/about-us" style={navActiveStyle}>About Us</NavLink></li>
```

### index.js
```js
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
### Create a separate file for all routes
```js
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import OurMission from '../pages/OurMission'
import OurVision from '../pages/OurVision'
import OurProfile from '../pages/OurProfile'
import OurStory from '../pages/OurStory'
import ContactUs from '../pages/ContactUs'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

import NotFound from '../exceptions/NotFound'

import Product from '../pages/products/Product'
import NewProduct from '../pages/products/NewProduct'
import OldProduct from '../pages/products/OldProduct'

import Users from '../pages/users/Users'
import UserDetails from '../pages/users/UserDetails'
import UserProfile from '../pages/users/UserProfile'
import UserSkill from '../pages/users/UserSkill'
import UserContact from '../pages/users/UserContact'

import { RequireAuth } from '../middleware/RequireAuth'



const LazyUserSearch = React.lazy(() => import ('../pages/users/UserSearch'));

const AppRoute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about-us" element={<AboutUs />}></Route>
            <Route path="our-mission" element={<OurMission />}></Route>
            <Route path="our-vision" element={<OurVision />}></Route>
            <Route path="our-profile" element={<OurProfile />}></Route>
            <Route path="our-story" element={<OurStory />}></Route>
            <Route path="contact-us" element={<ContactUs />}></Route>
            <Route path="login" element={<SignIn />}></Route>
            <Route path="create-account" element={<SignUp />}></Route>
            
            <Route path="products" element={<Product />}>
              <Route index element={<NewProduct />}></Route>
              <Route path="new-products" element={<NewProduct />}></Route>
              <Route path="old-products" element={<OldProduct />}></Route>
            </Route>

            <Route path="users" element={<RequireAuth><Users /></RequireAuth>}></Route>
            <Route path="users/:userId" element={<RequireAuth><UserDetails /></RequireAuth>}>
              {/* <Route index element={<UserContact />}></Route> */}
              <Route path="profile" element={<UserProfile />}></Route>
              <Route path="skills" element={<UserSkill />}></Route>
              <Route path="contact" element={<UserContact />}></Route>
            </Route>

            <Route path="search-users" element={<RequireAuth><React.Suspense fallback='loading.....'><LazyUserSearch /></React.Suspense></RequireAuth>}></Route>

            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </>
  )
}

export default AppRoute
```
### Auth.js
```js
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = user => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
```

### Login.jsx
```js
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
```
### IsAuth.js
```js
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export const RequireAuth = ({ children }) => {
    const auth = useAuth()
    const location = useLocation()

    if (!auth.user) {
        //return navigate('/login')
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
  return children;
}
```

### Detect auth in Home.jsx
```js
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
```