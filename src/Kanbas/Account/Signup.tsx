import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2" />
      <input placeholder="password" type="password" className="form-control mb-2"/>
      <input placeholder="verify password" type="password" className="form-control mb-2"/>
      {/* <Link to="/Kanbas/Account/Profile" > Sign up </Link><br /> */}
      <button
        id="wd-submit?"
        className="btn btn-md btn-primary me-1 form-control mb-2"
      >
        Signup
      </button>
      <Link to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}
