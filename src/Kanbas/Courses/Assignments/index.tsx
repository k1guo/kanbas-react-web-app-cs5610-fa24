import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import AssignmentSectionButtons from "./AssignmentSectionButtons";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  editAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments">
      <div>
        <AssignmentControls
          // assignmentName={assignmentName}
          // assignmentCourse={assignments.course}
          // setAssignmentName={setAssignmentName}
          // addAssignment={() => {
          //   dispatch(addAssignment({ name: assignmentName, course: cid }));
          //   setAssignmentName("");
          // }}
        />
      </div>
      <br />
      <br />

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray ">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-1 fs-3" />
              <TbTriangleInvertedFilled
                className="me-2"
                style={{ fontSize: "8px" }}
              />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <div
                className="me-2"
                style={{
                  border: "2px solid gray",
                  borderRadius: "18px",
                  padding: "5px",
                  fontSize: "14px",
                }}
              >
                40% of Total
              </div>
              <AssignmentControlButtons />
            </div>
          </div>
        </li>

        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray">
              <div className="assignment-row d-flex wd-lesson p-3 ps-1 align-items-center justify-content-between">
                {/* 左边的Icon */}
                <div className="icon-left">
                  <BsGripVertical className="me-1" />
                </div>
                <div className="icon-left">
                  <FaEdit
                    className="me-3"
                    style={{ fontSize: "20px", color: "green" }}
                  />
                </div>
                {/* 中间的三行内容 */}

                <div
                  className="assignment-details flex-grow-1 ps-1"
                  style={{ fontSize: "16px" }}
                >
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                  >
                    <b>{assignment.title}</b>
                  </a>
                  <br />
                  <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                  <b>Not available until</b> May6 at 12:00am |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>

                {/* 右边的Icon */}
                <div className="icon-right">
                  <AssignmentSectionButtons />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
