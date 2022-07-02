import React from 'react'
import "../styles/home.css"
export default function Login() {
  return (
    <div>
      <form className='form'>
        <input id='loguser' type='text' placeholder='Enter Username'/>
        <input id='logpass' type='password' placeholder='Enter Password'/>
        <button id='logbtn'>SUBMIT</button>
      </form>
    </div>
  )
}
