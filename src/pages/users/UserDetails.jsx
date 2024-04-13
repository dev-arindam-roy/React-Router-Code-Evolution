import React from 'react'
import { useNavigate, useParams, NavLink, Outlet } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const navActiveStyle = ({isActive}) => {
        return {
            fontWeight: (isActive) ? 'bold' : 'normal',
            color: (isActive) ? 'red' : 'black',
            textShadow: (isActive) ? '0px 0px 4px #000' : 'none'
        }
    }
  return (
    <>
        <h1>User Details of - {params.userId}</h1>
        <hr/>
        <button onClick={() => navigate('/users')}>Back To User List</button>
        <hr/>
        <br/>
        <NavLink to="profile" style={navActiveStyle}>Profile</NavLink> | 
        <NavLink to="skills" style={navActiveStyle}>Skills</NavLink> | 
        <NavLink to="contact" style={navActiveStyle}>Contact Info</NavLink> 
        <hr/>
        <br/><br/>
        <Outlet/>
    </>
  )
}

export default UserDetails