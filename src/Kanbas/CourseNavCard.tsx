import { Link } from "react-router-dom";

interface CourseNavCardProps {
  title: string;
  imageUrl: string;
  description: string;
  buttonText: string;
  linkUrl: string;
}

const CourseNavCard: React.FC<CourseNavCardProps> = ({
  title,
  imageUrl,
  description,
  buttonText,
  linkUrl,
}) => {
  return (
    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
      <div className="card rounded-3 overflow-hidden">
        <Link
          className="wd-dashboard-course-link text-decoration-none text-dark"
          to={linkUrl}
        >
          <img src={imageUrl} width="100%" height={160} alt={title} />
          <div className="card-body">
            <h5 className="wd-dashboard-course-title card-title">{title}</h5>
            <p className="wd-dashboard-course-title card-text">{description}</p>
            <button className="btn btn-primary">{buttonText}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseNavCard;
