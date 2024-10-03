import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import AssignmentSectionButtons from "./AssignmentSectionButtons";
import { FaEdit } from "react-icons/fa";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div>
        <AssignmentControls />
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
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
               <b>
               A1 - ENV + HTML
               </b>
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

        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray">
          {/* Complete On Your Own */}
          <div className="assignment-row d-flex wd-lesson p-3 ps-1 align-items-center justify-content-between">
            <div className="icon-left">
              <BsGripVertical className="me-1" />
            </div>
            <div className="icon-left">
              <FaEdit
                className="me-3"
                style={{ fontSize: "20px", color: "green" }}
              />
            </div>
            <div
              className="assignment-details flex-grow-1 ps-1"
              style={{ fontSize: "16px" }}
            >
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                <b>
                A2 - CSS + BOOTSTRAP
                </b>
              </a>
              <br />
              <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
              <b>Not available until</b> May13 at 12:00am |
              <br />
              <b>Due</b> May 20 at 11:59pm | 100 pts
            </div>
            <div className="icon-right">
              <AssignmentSectionButtons />
            </div>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray">
          <div className="wd-lesson assignment-row d-flex wd-lesson p-3 ps-1 align-items-center justify-content-between">
            <div className="icon-left">
              <BsGripVertical className="me-1" />
            </div>
            <div className="icon-left">
              <FaEdit
                className="me-3"
                style={{ fontSize: "20px", color: "green" }}
              />
            </div>
            <div
              className="assignment-details flex-grow-1 ps-1"
              style={{ fontSize: "16px" }}
            >
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
               <b>
               A3 - JAVASCRIPT + REACT
               </b>
              </a>
              <br />
              <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
              <b>Not available until</b> May20 at 12:00am |
              <br />
              <b>Due</b> May 27 at 11:59pm | 100 pts
            </div>
            <div className="icon-right">
              <AssignmentSectionButtons />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
