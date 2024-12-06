import { FaUserCircle } from "react-icons/fa";
// import * as db from "../../Database";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";
import * as coursesClient from "../client";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as userClient from "../../Account/client";
import * as courseClient from "../../Courses/client";

export default function PeopleTable(
  // { users = [] }: { users?: any[] }
  { users: initialUsers = [] }: { users?: any[] }
) {

  const { cid } = useParams<{ cid: string }>(); 
  const [users, setUsers] = useState<any[]>([]); 
  const [currentUser, setCurrentUser] = useState<any>(null); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 获取当前登录用户的信息
        const loggedInUser = await userClient.profile(); 
        setCurrentUser(loggedInUser);

        if (loggedInUser.role === "ADMIN") {
          const allUsers = await userClient.findAllUsers(); 
          setUsers(allUsers);
        } else if (cid) {
          const enrolledUsers = await courseClient.findUsersForCourse(cid); 
          setUsers(enrolledUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers(); // 页面加载时调用
  }, [cid]);

  {JSON.stringify(cid, null, 2)}
  {JSON.stringify(users, null, 2)}


  return (
    <div id="wd-people-table">
         <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>

        {/* {JSON.stringify(cid, null, 2)}
        {/* {JSON.stringify(uid, null, 2)} */}
{/* 
         <pre>{JSON.stringify(users, null, 2)}</pre> */} 
          {users
            // .filter((usr) =>
            //   enrollments.some(
            //     (enrollment) =>
            //       enrollment.user === usr._id && enrollment.course === cid
            //   )
            // )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap" key={user._id}>
                <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">

                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">
                    {user.firstName}
                  </span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                  </Link>

                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>{" "}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}