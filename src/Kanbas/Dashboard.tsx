import { Link } from "react-router-dom";
import CourseNavCard from "./CourseNavCard";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      {/* <hr /> 是 Kanbas Dashboard 下面那一行分界线*/}
      <h1 id="wd-dashboard-title"> Kanbas Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        {/* 课程1 */}

        {/* row-cols-1:在小屏幕设备（比如手机）上，每行显示一列 */}
        {/* row-cols-md-5：在中等及更大屏幕设备上（如平板、桌面显示器），每行显示 5 列。 */}
        {/* g 代表gutter，即网格系统中的列与列之间的间距。 */}
        {/* g4 = 24px */}

        {/* <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-5 g-4"
          style={{ rowGap: "35px" }}
        > */}
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                   <img src={course.image}  width="100%" height={160} />
                  {/* <img src="/images/reactjs.jpg" width="100%" height={160} /> */}
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    ></p>
                    {course.description}
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {/* 


          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          />
          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          />
          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          />
          <CourseNavCard
           title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
           imageUrl="images/reactjs.jpg"
           section="CS5610 20595 202510"
           buttonText="Start Learning"
           linkUrl="/Kanbas/Courses/1234/Home"
          />

          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          />
          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          />
          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          />
          <CourseNavCard
            title="CS5610 20595 Web Development SEC 02 Fall 2024 [VTL-2-OL]"
            imageUrl="images/reactjs.jpg"
            section="CS5610 20595 202510"
            buttonText="Start Learning"
            linkUrl="/Kanbas/Courses/1234/Home"
          /> */}

          {/* 
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>


                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
               
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              ...
            </div>
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              ...
            </div>
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              ...
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
