import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";


export default function Account() {
  return (
    <div id="wd-account-screen">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td >
            {/* layout things horizontally */}
            <td valign="top">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/Kanbas/Account/Signin" />}
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Account</h2>
    </div>
  );
}