import { FaPlus } from "react-icons/fa6";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import ProtectedFaculty from "../../ProtectedFaculty";
// import AssignmentEditor from "./AssignmentEditor";
import { useNavigate } from "react-router";
import AssignmentEditor from "./Editor";

export default function AssignmentControls(
//   {
//     assignmentName,
//     assignmentCourse,
//     setAssignmentName,
//     addAssignment,
//   }: {
//     assignmentName: string;
//     assignmentCourse: string;
//     setAssignmentName: (title: string) => void;
//     addAssignment: () => void;
//   },
) {
//     const navigate = useNavigate();
//     const handleAddAssignmentButtonClick = () => {
//       navigate(`/Kanbas/Courses/RS102/Assignments/A201`); 
//     };
    
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="search-container">
        <PiMagnifyingGlassThin className="search-icon" />
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="search-input  me-1"
        />
      </div>
      <ProtectedFaculty>
        <div className="d-flex ">
          <button
            id="wd-add-assignment-group"
            className="btn btn-md btn-secondary me-1"
          >
            <FaPlus
              className="position-relative me-1"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
{/* data-bs-toggle 和 data-bs-target 是 Bootstrap 用来控制模态框、下拉菜单、工具提示等交互功能的属性。 */}
          <button
            id="wd-add-assignment"
            className="btn btn-md btn-danger me-1 "
            // onClick={handleAddAssignmentButtonClick}
    
          >
            {/* <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a> */}
            <FaPlus
              className="position-relative me-1"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>

        </div>
      </ProtectedFaculty>
      <AssignmentEditor
       
        // moduleName={assignmentName}
        // setModuleName={setAssignmentName}
        // addAssignment={addAssignment}
      />
    </div>
  );
}
