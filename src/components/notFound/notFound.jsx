import { Link } from "react-router-dom";
import "./notFound.css";

export function NotFound() {
  return (
    <div
      className="notfound-container min-vh-100 d-flex align-items-center justify-content-center text-center p-4"
      dir="rtl"
    >
      <div className="position-relative z-1 container">
        <h1 className="error-code m-0">404</h1>

        <div className="d-flex justify-content-center mb-4 mt-n5">
          <div className="icon-circle rounded-circle">
            <div className="orbit-dot"></div>
            <i className="fas fa-frown text-orange display-4"></i>
          </div>
        </div>

        <div className="content-text mb-5">
          <h2 className="display-6 fw-bold text-white mb-3">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "500px" }}>
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
          <Link
            to="/"
            className="btn btn-orange px-4 py-2 rounded-3 d-flex align-items-center gap-2"
          >
            <i className="fas fa-home"></i>
            الذهاب للرئيسية
          </Link>

          <Link
            to="/blogs"
            className="btn btn-outline-custom px-4 py-2 rounded-3 d-flex align-items-center gap-2"
          >
            <i className="fas fa-th-large"></i>
            تصفح المقالات
          </Link>
        </div>
      </div>
    </div>
  );
}
