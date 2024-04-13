import React from 'react'
import { useParams } from 'react-router-dom'

const UserSkill = () => {
    const params = useParams();
  return (
    <div>UserSkill - {params.userId}</div>
  )
}

export default UserSkill