import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";


export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 105 }}
      // bottom-0 和底部的距离为0
      // top-0 和顶部的距离为0
      // z-2 - applies z-index: 2 which brings the element above other elements with a lower z-index.
      // d-none 在所有屏幕尺寸下都隐藏元素
      // d-md-block  在中等一集更大屏幕尺寸上显示该元素 >= 768px
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* <a> 用于外部链接，导航到一个外部网站 */}
      {/* <a> 标签会触发整个页面的刷新，并导航到新的url */}
      {/* border-0 没有边框，移除边框 */}
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <br />
      {/* <Link>标签是React Router提供的组件 */}
      {/* 用于在React应用内部导航时使用，可以避免页面刷新 */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        {/* fs 代表 font-size，用于设置字体大小。 1 表示该字体大小的具体值。 */}
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Dashboard"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </Link>
      <br />
      <Link
        to="/Labs"
        id="wd-labs-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs{" "}
      </Link>
      <br />
      {/* complete styling the rest of the links */}
    </div>
  );
}
