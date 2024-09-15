export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>

      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr />
        {/* tr is new row, here is the row for assignment group*/}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group"> Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="COMEDY">...</option>
              <option value="DRAMA">...</option>
              <option selected value="SCIFI">
                ASSIGNMENTS
              </option>
              <option value="FANTASY">...</option>
            </select>
          </td>
        </tr>
        {/* Complete on your own */}
        <tr />
        {/* tr is new row, here is the row for Display Grade As*/}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as"> Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="COMEDY">...</option>
              <option value="DRAMA">...</option>
              <option selected value="SCIFI">
                Percentage
              </option>
              <option value="FANTASY">...</option>
            </select>
          </td>
        </tr>

        {/* tr is new row, here is the row for Submission Type*/}
        <tr />
        <tr>
        <td align="right" valign="top">
          <label htmlFor="wd-submission-type"> Submission Type</label>
        </td>
        <td>
          <select id="wd-submission-type">
            <option value="COMEDY">...</option>
            <option value="DRAMA">...</option>
            <option selected value="SCIFI">
              Online
            </option>
            <option value="FANTASY">...</option>
          </select>
          <td align="left" valign="top">
            <label>Online Entry Options</label>
            <tr />
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <tr />
            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <tr />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <tr />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <tr />
            <input type="checkbox" name="check-genre" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <tr />
          </td>
        </td>
        </tr>
        <tr />

        {/* two empty row */}

        {/* assign assign to part */}

        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to </label>
            <tr />

            <input type="text" placeholder="Everyone" id="wd-assign-to" />
            <tr />
        
            
            <label htmlFor="wd-due-date">Due </label>
            <tr />
            <input type="date" id="wd-due-date" defaultValue="2000-05-13" />
            <tr />
            <td>
              <label htmlFor="wd-available-from"> Available from </label>
              <tr />
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2000-05-06"
              />
            </td>
            <td>
              <label htmlFor="wd-available-until"> Until </label>
              <tr />
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2000-05-20"
              />
            </td>
          </td>
        </tr>
  
      </table>
      <hr />
      <table align="right">
        <tr>
     
          {/* 为什么向左靠齐 align我写的是右边啊 */}
          <td align="left">
            <button
              id="wd-submit?"
              onClick={() => alert("Cancel!")}
              // type="button"
            >
              Cancel
            </button>
            <button
              id="wd-submit?"
              onClick={() => alert("Save!")}
              // type="button"
            >
              Save
            </button>
          </td>
        
        </tr>
        
      </table>
    </div>
  );
}
