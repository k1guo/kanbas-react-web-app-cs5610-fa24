// // reducer.js
// const initialState = {
//     courses: [],
//     enrollments: [] // Track which courses a student is enrolled in
//   };
  
//   const courseSlice = createSlice({
//     name: "courses",
//     initialState,
    
//   });
  
//   // Export actions
  
  


import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
const initialState = {
  enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
  name: "assignemnts",
  initialState,
  reducers: {
    setCourses(state, action) {
      state.enrollments = action.payload;
    },
  
    enrollCourse(state,  { payload: enrollment }) {
        const newEnrollment: any = {
            // 使用时间戳作为唯一ID
            _id: new Date().getTime().toString(),
           user: enrollment.user,
           course: enrollment.course
          };
          state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
  //  { "_id": "9", "user": "123", "course": "RS102" }
    unenrollCourse(state, { payload: enrollment}) {
      const enrollmentId = enrollment._id;
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId);
    },


    loadEnrollments(state) {
      const storedEnrollments = localStorage.getItem('enrollments');
      if (storedEnrollments) {
        state.enrollments = JSON.parse(storedEnrollments); // Load from localStorage
      }
    }


    // updateAssignment: (state, { payload: assignment }) => {
    //     state.assignments = state.assignments.map((a: any) =>
    //       a._id === assignment._id ? { ...a, ...assignment } : a
    //     ) as any;
    //   },


  },
});



export const { setCourses, enrollCourse, unenrollCourse, loadEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;