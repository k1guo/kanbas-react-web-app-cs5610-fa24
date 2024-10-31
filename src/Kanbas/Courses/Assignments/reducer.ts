import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignemnts",
  initialState,
  // reducers 包含了3个  reducer 函数，分别用于添加、更新和编辑作业。
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        // // 使用时间戳作为唯一ID
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description:assignment.description,
        point: assignment.point,
        dueDate: assignment.dueDate,
        availableFromDate: assignment.availableFromDate,
        availableUntilDate: assignment.availableUntilDate
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? { ...a, ...assignment } : a
      ) as any;
    },
    // setAssignmentName(state,  { payload: assignment }) {
    //   state.assignments.name = action.payload;
    // },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
  },
});
export const { addAssignment, updateAssignment, editAssignment ,deleteAssignment} =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;