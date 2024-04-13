import React from 'react'
import { useParams } from 'react-router-dom'

const UserContact = () => {
    const params = useParams();
  return (
    <div>UserContact - {params.userId}</div>
  )
}

export default UserContact