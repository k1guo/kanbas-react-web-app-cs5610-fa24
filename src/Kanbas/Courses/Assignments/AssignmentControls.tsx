import { FaPlus } from "react-icons/fa6";
import { PiMagnifyingGlassThin } from "react-icons/pi";

export default function AssignmentControls() {
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

        <button id="wd-add-assignment" className="btn btn-md btn-danger me-1 ">
          <FaPlus
            className="position-relative me-1"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </div>
    </div>
  );
}
