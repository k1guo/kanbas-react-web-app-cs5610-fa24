export default function AssignmentEditor() {
  return (
    <form>
      <div id="wd-assignments-editor" className="row mb-3">
        <label htmlFor="wd-name" className="col col-form-label">
          Assignment Name
        </label>
        <div className="mb-3">
          <input id="wd-name" value="A1" className="form-control col" />
        </div>

        <div>
          <textarea
            id="wd-description"
            cols={50}
            rows={10}
            className="form-control ml-2 col"
          >
            The assignment is available online. Submit a link to the landing
            page of your Web application running on Netlify. The landing page
            should include the following: - Your full name and section - Links
            to each of the lab assignments - Link to the Kanbas application -
            Links to all relevant source code repositories The Kanbas
            application should include a link to navigate back to the landing
            page.
          </textarea>
        </div>
      </div>

      <div className="row ">
        <div className="row mb-3 ">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label ">
            Points{" "}
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="wd-points"
              value={100}
            />
          </div>{" "}
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            {" "}
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select id="wd-group" className="form-select">
              <option value="COMEDY">...</option>
              <option value="DRAMA">...</option>
              <option selected value="SCIFI">
                ASSIGNMENTS
              </option>
              <option value="FANTASY">...</option>
            </select>
          </div>{" "}
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            Display Grade As
          </label>
          <div className="col-sm-10">
            <select id="wd-display-grade-as" className="form-select">
              <option value="COMEDY">...</option>
              <option value="DRAMA">...</option>
              <option selected value="SCIFI">
                Percentage
              </option>
              <option value="FANTASY">...</option>
            </select>
          </div>{" "}
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            Submission Type
          </label>
          <div className="col-sm-10">
            <div className="form-control">
              <select id="wd-submission-type" className="form-select">
                <option value="COMEDY">...</option>
                <option value="DRAMA">...</option>
                <option selected value="SCIFI">
                  Percentage
                </option>
                <option value="FANTASY">...</option>
              </select>
              <label className="col col-form-label mt-2">
                {" "}
                Online Entry Options
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-text-entry"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry{" "}
                </label>{" "}
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-website-url"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL{" "}
                </label>{" "}
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings{" "}
                </label>{" "}
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation{" "}
                </label>{" "}
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-text-entry"
                />
                <label className="form-file-upload" htmlFor="wd-file-upload">
                  File Uploads{" "}
                </label>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-assign" className="col-sm-2 col-form-label">
            Assign
          </label>

          <div className="col-sm-10">
            <div className="form-control">
              <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
                Assign to
              </label>
              <div className="input-group mb-2">
                <button
                  className="btn btn-secondary"
                  type="button"
                  id="wd-assign-button"
                >
                  Everyone
                </button>
                <input
                  type="text"
                  id="wd-assign-to"
                  className="form-control"
                  // placeholder="Everyone"
                />
              </div>
              {/* <input
              type="text"
              // placeholder="Everyone"
              id="wd-assign-to"
              className="form-control mb-2"
              
            /> */}

              <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">
                Due
              </label>
              <input
                type="date"
                id="wd-due-date"
                defaultValue="2000-05-13"
                className="form-control mb-3"
              />

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="wd-available-from"> Available from </label>
                  <input
                    type="date"
                    id="wd-available-from"
                    defaultValue="2000-05-06"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="wd-available-until"> Until </label>
                  <input
                    type="date"
                    id="wd-available-until"
                    defaultValue="2000-05-20"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col text-end">
          <button id="wd-submit?" className="btn btn-md btn-secondary me-1">
            Cancel{" "}
          </button>
          <button id="wd-submit?" className="btn btn-md btn-danger me-1">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
