import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const UserSearch = () => {
    const [filter, setFilter] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    
    const filterUser = (e) => {
        e.preventDefault();
        setSearchParams({name:filter, isNameSearch:true});
    }
    const resetFilter = (e) => {
        e.preventDefault();
        setFilter('');
        setSearchParams({});
    }
    
    const searchName = searchParams.get('name');
    console.log(searchName == null);
  return (
    <>
        <h1>User Filter</h1>
        <hr/>
        <p>
            Search: <input type="text" value={filter} onChange={(e) => setFilter(e.target.value) } />
            <button onClick={filterUser}>Search</button>
            <button onClick={resetFilter}>Clear</button>
            <br/>
            {searchName}
        </p>
        <ul>
        {(() => {
            let lis = [];
            for (let i = 0; i < 50; i++) {
                lis.push(<li key={i}>
                    <Link to={'/users/' + i}>User{i}</Link>
                </li>)
            }
            if (searchName !== null) {
                return lis.filter((value, index) => (index == searchName) ? searchName : '')
            } else {
                return lis;
            }
        })()}
        </ul>

    </>
  )
}

export default UserSearch