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