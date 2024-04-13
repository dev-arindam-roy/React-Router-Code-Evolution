import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../middleware/Auth'

const HeaderNav = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        auth.logout();
        navigate('/');
    }

    const navActiveStyle = ({isActive}) => {
        return {
            fontWeight: (isActive) ? 'bold' : 'normal',
            color: (isActive) ? 'red' : 'black',
            textShadow: (isActive) ? '0px 0px 4px #000' : 'none'
        }
    }
  return (
    <>
        <div className="header-nav">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about-us" style={navActiveStyle}>About Us</NavLink></li>
                    <li><NavLink to="/our-vision" style={navActiveStyle}>Our Vision</NavLink></li>
                    <li><NavLink to="/our-mission" style={navActiveStyle}>Our Mission</NavLink></li>
                    <li><NavLink to="/our-story" style={navActiveStyle}>Our Story</NavLink></li>
                    <li><NavLink to="/our-profile" style={navActiveStyle}>Our Profile</NavLink></li>
                    <li><NavLink to="/contact-us" style={navActiveStyle}>Contact Us</NavLink></li>
                    <li><NavLink to="/products" style={navActiveStyle}>Products</NavLink></li>
                    {auth.user && (
                        <li><NavLink to="/users" style={navActiveStyle}>All Users</NavLink></li>
                    )}
                    {auth.user && (
                        <li><NavLink to="/search-users" style={navActiveStyle}>Search Users</NavLink></li>
                    )}
                    {auth.user && (
                        <li>
                            <label>Hi {auth.user}</label>
                            <button onClick={logout}>Logout</button>
                        </li>
                    )}
                    
                    
                </ul>
            </nav>
        </div>
    </>
  )
}

export default HeaderNav