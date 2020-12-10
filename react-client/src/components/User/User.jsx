import React from 'react'
import { FaMailBulk, FaMobileAlt } from 'react-icons/fa';
import './User.module.css'
export default function User({ name, email, phone }) {
  return (
    <div className="User">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Avatar" />
      <div class="container">
        <h4><b>{name}</b></h4>
        <div className="Email"><FaMailBulk /><p>{email}</p></div>
        <div className="Phone"><FaMobileAlt /><p>{phone}</p></div>
      </div>
    </div>
  )
}
