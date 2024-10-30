import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignemnts",
  initialState,
  // reducers 包含了3个 reducer 函数，分别用于添加、更新和编辑作业。
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        // // 使用时间戳作为唯一ID
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        point: 100,
        dueDate: "2000-05-13",
        availableDate: "2000-05-06"
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },



    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { addAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;