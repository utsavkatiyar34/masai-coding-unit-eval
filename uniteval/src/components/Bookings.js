import React from 'react'
import "../styles/home.css"
export default function Bookings() {
  return (
    <div className='bookings'>
      <h3>Your Bookings</h3>
      <input id='booking' type='text' disabled/>
      <button id='bookbtn'>CANCEL BOOKING</button>
    </div>
  )
}
