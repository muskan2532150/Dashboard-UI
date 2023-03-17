import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className=' bg-black text-white mx-auto login-page p-2 rounded'>
        <h1 className='text-center p-2'>Welcome back</h1>
    <form className="px-4 py-3">
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Email"/>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
          <label className="form-check-label" htmlFor="dropdownCheck">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    <a className="dropdown-item px-4 py-2" href="#">Sign up?</a>
  </div>
  )
}

export default Login