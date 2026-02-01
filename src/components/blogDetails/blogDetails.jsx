import React from "react";
import "./blogDetails.css";
import { Link, useLocation } from "react-router-dom";

export function BlogDetails() {
  const { state } = useLocation();
  const { blog } = state || {};

  if (!blog) {
    return (
      <div className="vh-100 bg-darkest d-flex align-items-center justify-content-center">
        <p className="text-white text-center m-0 fs-2">المقال غير موجود</p>
      </div>
    );
  }

  const { title, content, category, author, image, date, readTime, tags } =
    blog;

  const sections = content.split("##");
  const intro = sections[0];
  const bodySections = sections.slice(1);

  return (
    <div className="bg-dark-post min-vh-100 py-5" dir="rtl">
      <div className="container">
        <header className="text-center mb-5">
          <span className="badge btn-orange rounded-pill px-3 py-2 mb-3">
            {category}
          </span>
          <h1 className="display-5 fw-bold mb-4">{title}</h1>
          <div className="d-flex align-items-center justify-content-center gap-3 text-secondary small">
            <span>
              <i className="far fa-calendar ms-1 text-orange"></i> {date}
            </span>
            <span>
              <i className="far fa-clock ms-1 text-orange"></i> {readTime}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-center mt-4 p-2 bg-dark rounded-pill border border-secondary border-opacity-25 d-inline-flex px-4">
            <img
              src={author.avatar}
              className="rounded-circle ms-3"
              width="45"
              alt={author.name}
            />
            <div className="text-start">
              <h6 className="m-0 small fw-bold">{author.name}</h6>
              <small className="text-secondary small">{author.role}</small>
            </div>
          </div>
        </header>

        <div className="mb-5 px-lg-5">
          <img
            src={image}
            className="img-fluid rounded-4 w-100 shadow-lg"
            alt={title}
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

        <div className="row g-5 px-lg-5">
          <div className="col-lg-4 order-lg-2">
            <div className="info-box-custom p-4 mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center">
                <i className="fas fa-list-ul text-orange ms-2"></i> محتويات
                المقال
              </h6>
              <ul className="list-unstyled small text-secondary">
                {bodySections.map((section, index) => {
                  const lines = section.trim().split("\n");
                  const sectionTitle = lines[0];
                  return (
                    <li key={index} className="mb-2">
                      {sectionTitle}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="row g-2 mb-4">
              <div className="col-6">
                <div className="info-box-custom p-3 text-center">
                  <i className="far fa-clock text-orange d-block mb-2 fs-4"></i>
                  <small className="d-block text-secondary small">
                    وقت القراءة
                  </small>
                  <span className="fw-bold small">{readTime}</span>
                </div>
              </div>
              <div className="col-6">
                <div className="info-box-custom p-3 text-center">
                  <i className="far fa-calendar-alt text-orange d-block mb-2 fs-4"></i>
                  <small className="d-block text-secondary small">
                    تاريخ النشر
                  </small>
                  <span className="fw-bold small">{date}</span>
                </div>
              </div>
            </div>

            <div className="info-box-custom p-4 text-center">
              <i className="fas fa-envelope-open-text text-orange fs-2 mb-3"></i>
              <h6>لا تفوّت جديدنا</h6>
              <p className="small text-secondary">
                اشترك للحصول على أحدث المقالات
              </p>
              <Link to="/blogs">
                <button className="btn btn-orange w-100 rounded-3 py-2 fw-bold">
                  تصفح المزيد
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-8 order-lg-1">
            <div className="post-content">
              <div className="post-content text-end" dir="rtl">
                <p className="lead text-secondary mb-5">{intro}</p>

                {bodySections.map((section, index) => {                                     
                  const lines = section.trim().split("\n");
                  const sectionTitle = lines[0];


                  const sectionText = lines.slice(1).join("\n");


                  const icons = [
                    "fa-camera",
                    "fa-cog",
                    "fa-lightbulb",
                    "fa-check-circle",
                  ];

                  const currentIcon = icons[index % icons.length];

                  return (
                    <div key={index} className="mb-5">
                      <div className="d-flex align-items-center mb-3 mt-4">
                        <div className="content-icon me-0 ms-3">
                          <i className={`fas ${currentIcon} text-orange`}></i>
                        </div>

                        <h2 className="m-0 fw-bold h4 text-white">
                          {sectionTitle}
                        </h2>
                      </div>

                      <p
                        className="text-secondary opacity-75"
                        style={{ lineHeight: "1.8" }}
                      >
                        {sectionText}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-top border-secondary border-opacity-25">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <span className="text-secondary ms-2 small">
                    <i className="fas fa-tags text-orange ms-1"></i> الوسوم:
                  </span>
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge bg-dark border border-secondary border-opacity-50 fw-light text-secondary pt-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="info-box-custom p-4 mt-5 d-flex align-items-center">
                <img
                  src={author.avatar}
                  className="rounded-3 ms-4"
                  width="80"
                  alt={author.name}
                />
                <div>
                  <small className="text-orange d-block mb-1">
                    كاتب المقال
                  </small>
                  <h5 className="fw-bold mb-1">{author.name}</h5>
                  <p className="m-0 small text-secondary">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                    الفوتوغرافي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
