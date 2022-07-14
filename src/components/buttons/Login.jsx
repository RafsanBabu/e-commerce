import React from 'react';

const Login = () => {
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
    <span className='fa fa-sign-in'></span>
  Login
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className='btn btn-primary w-100 mb-2'><span className='fa fa-google me-2'></span>Sign in with Google</button>
        <button className='btn btn-primary w-100 mb-4'><span className='fa fa-facebook me-2'></span>Sign in with Facebook</button>
      <form>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary w-100 mt-5">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login