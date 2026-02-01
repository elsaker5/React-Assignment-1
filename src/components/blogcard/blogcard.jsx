import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { image, title, category, readTime, date, excerpt, author } = blog;

  return (
    <div
      className="card h-100 bg-card-custom border border-secondary border-opacity-25 rounded-4 overflow-hidden hover-card text-end"
      dir="rtl"
    >
      <div className="position-relative p-2">
        <img
          src={image}
          className="card-img-top rounded-4 object-fit-cover"
          alt={title}
          style={{ height: "220px" }}
        />

        <span className="position-absolute top-0 end-0 m-4 badge rounded-pill fw-light glass-badge border border-white border-opacity-10 py-2 px-3">
          {category}
        </span>
      </div>

      <div className="card-body d-flex flex-column p-4 pt-2">
        <div className="d-flex align-items-center gap-3 text-secondary small mb-3">
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-clock text-orange"></i>
            <span>{readTime}</span>
          </div>
          <span className="opacity-25">•</span>
          <div className="d-flex align-items-center gap-1">
            <i className="far fa-calendar-alt text-orange"></i>
            <span>{date}</span>
          </div>
        </div>

        <h5 className="card-title text-white fw-bold mb-3">{title}</h5>
        <p
          className="card-text text-secondary small mb-4 flex-grow-1"
          style={{ lineHeight: "1.6" }}
        >
          {excerpt}
        </p>

        <hr className="border-secondary opacity-25 my-3" />

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img
              src={author.avatar}
              className="rounded-circle border border-dark border-2"
              width="40"
              height="40"
              alt={author.name}
            />
            <div className="text">
              <h6 className="text-white m-0 small fw-bold pt-1">
                {author.name}
              </h6>
              <small className="text-secondary" style={{ fontSize: "0.75rem" }}>
                {author.role}
              </small>
            </div>
          </div>

          <Link
            to="/blogDetails"
            state={{ blog }}
            className="btn-circle rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
          >
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
