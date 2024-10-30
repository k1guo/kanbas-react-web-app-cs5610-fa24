import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import PeopleTable from "./Courses/People/Table";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image:"/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };

  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div id="wd-kanbas">
        {/* <h1>Kanbas</h1> */}
        <KanbasNavigation />
        {/* p-3 means padding's value is 3 */}
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            {/* <ProtectedRoute> 用于对页面或组件进行访问控制。如果条件不满足，则会阻止用户访问，并将用户重定向到登录页面。 */}
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
            {/* <Route path="/Courses/:cid/People" element={<PeopleTable />} /> */}
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
