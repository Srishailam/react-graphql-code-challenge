import React from 'react'
import User from '../User/User'
import './UserList.module.css'
export default function UserList({users}) {
  return (
    <div className="UserList">
      <h1>Users List</h1>
      {
        (users || []).map( ({id, name, email, phone}) => (
            <User 
              key={id} 
              name={name} 
              email={email}  
              phone={phone}
            />
          ))
      }
    </div>
  )
}
