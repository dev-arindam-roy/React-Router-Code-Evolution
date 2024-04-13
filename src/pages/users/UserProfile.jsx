import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const params = useParams();
  return (
    <div>UserProfile - {params.userId}</div>
  )
}

export default UserProfile