// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// import PeopleTable from "./Courses/People/Table";
// import "./styles.css";
// // import * as db from "./Database";
// import { useEffect, useState } from "react";
// import store from "./store";
// import { Provider, useSelector } from "react-redux";
// import ProtectedRoute from "./Account/ProtectedRoute";
// import Session from "./Account/Session";
// import * as client from "./Courses/client";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";

// export default function Kanbas() {
//   const [courses, setCourses] = useState<any[]>([]);
//   console.log("current22Courses", courses)
//   const [enrolling, setEnrolling] = useState<boolean>(false);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
// console.log("currentUser at first", currentUser)

// // console.log("currentUser ID at first", currentUser._id)

//   const deleteCourse = async (courseId: any) => {
//     const status = await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const findCoursesForUser = async () => {
//     try {
//       const courses = await userClient.findCoursesForUser(currentUser._id);
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   // const fetchCourses = async () => {
//   //   try {
//   //     const allCourses = await courseClient.fetchAllCourses();
//   //     const enrolledCourses = await userClient.findCoursesForUser(
//   //       currentUser._id
//   //     );
//   //     const courses = allCourses.map((course: any) => {
//   //       if (enrolledCourses.find((c: any) => c._id === course._id)) {
//   //         return { ...course, enrolled: true };
//   //       } else {
//   //         return course;
//   //       }
//   //     });
//   //     setCourses(courses);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
  
//   // const allCourses =  courseClient.fetchAllCourses();
//   // console.log("all Courses", allCourses)

//   // const enrolledCourses =  userClient.findCoursesForUser(currentUser._id);

//   // console.log("enrolled Courses",  enrolledCourses)


//     const fetchCourses = async () => {
//     try {
//       const courses = await courseClient.fetchAllCourses();
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //   useEffect(() => {
//   //   if (enrolling) {
//   //     fetchCourses();
//   //   } else {
//   //     findCoursesForUser();
//   //   }
//   // }, [currentUser, enrolling]);


//   const [course, setCourse] = useState<any>({
//     _id: "1234",
//     name: "",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     department: "D123",
//     credits: 4,
//     description: "",
//     image:"/images/reactjs.jpg",
//   });
 
//   const addNewCourse = async() => {
//     const newCourse = await courseClient.createCourse(course);
//     setCourses((courses) => [
//       ...courses,
//       newCourse 
//     ]);
//   };



//   const updateCourse = async() => {
//     await courseClient.updateCourse(course);
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };



//   const updateEnrollment = async (courseId: string, enrolled: boolean) => {
//     if (enrolled) {
//       await userClient.enrollIntoCourse(currentUser._id, courseId);
//     } else {
//       await userClient.unenrollFromCourse(currentUser._id, courseId);
//     }
//     setCourses(
//       courses.map((course) => {
//         if (course._id === courseId) {
//           return { ...course, enrolled: enrolled };
//         } else {
//           return course;
//         }
//       })
//     );
//   };
 

 

//   useEffect(() => {
//     fetchCourses();
//   }, [currentUser]);




//   console.log("current Courses", courses)


//   return (
//     <Session>
//     <Provider store={store}>
//       <div id="wd-kanbas">
//         {/* <h1>Kanbas</h1> */}
//         <KanbasNavigation />
//         {/* p-3 means padding's value is 3 */}
//         <div className="wd-main-content-offset p-3">
//           <Routes>
//             <Route path="/" element={<Navigate to="Account" />} />
//             <Route path="/Account/*" element={<Account />} />
//             {/* <ProtectedRoute> 用于对页面或组件进行访问控制。如果条件不满足，则会阻止用户访问，并将用户重定向到登录页面。 */}
//             <Route
//               path="/Dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard
//                     courses={courses}
//                     course={course}
//                     setCourse={setCourse}
//                     addNewCourse={addNewCourse}
//                     deleteCourse={deleteCourse}
//                     updateCourse={updateCourse}
//                     enrolling={enrolling} 
//                     setEnrolling={setEnrolling}
//                     updateEnrollment={updateEnrollment}
//                   />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/Courses/:cid/*"
//               element={
//                 <ProtectedRoute>
//                   <Courses courses={courses} />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/Calendar" element={<h1>Calendar</h1>} />
//             <Route path="/Inbox" element={<h1>Inbox</h1>} />
//             {/* <Route path="/Courses/:cid/People" element={<PeopleTable />} /> */}
//           </Routes>
//         </div>
//       </div>
//     </Provider>
//     </Session>
//   );
// }





import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Provider, useSelector } from "react-redux";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    // const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
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
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
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
                  enrolling={enrolling}
                  setEnrolling={setEnrolling}
                  updateEnrollment={updateEnrollment}
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
        </Routes>
      </div>
    </div>
  );
}