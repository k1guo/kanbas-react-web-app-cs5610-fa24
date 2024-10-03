import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";

export default function Account() {
  return (
    <div id="wd-account-screen">
      
      <h2>Account</h2>
      <hr />
      <div className="d-flex">

      <div className="d-none d-md-block ">
        <AccountNavigation />
      </div>
      {/* layout things horizontally */}
      <div className="flex-fill wd-account-content-offset">
        <Routes>
          <Route
                path="/"
                element={<Navigate to="/Kanbas/Account/Signin" />}
              />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}
