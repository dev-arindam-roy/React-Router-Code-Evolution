import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <>
        <h1>All Users</h1>
        <hr/>
        <ul>
        {(() => {
            let lis = [];
            for (let i = 0; i < 10; i++) {
                lis.push(<li key={i}>
                    <Link to={'/users/' + i}>User - {i}</Link>
                </li>)
            }
            return lis;
        })()}
        </ul>
    </>
  )
}

export default Users