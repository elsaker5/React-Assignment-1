import { NavLink, Link, Outlet } from "react-router-dom";
import "./layout.css";

export function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <div className="d-flex gap-2">
              <button className="btn p-4 py-2 rounded-5 search-btn">ابدا القراءة</button>
            </div>
            <div>
              <span className="ms-4 text-secondary"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>

            <div className="mx-auto border border-1 rounded-pill py-2 px-4 fw-bold">
              <ul className="navbar-nav  mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-NavLink text-decoration-none" to="/">
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink text-decoration-none"
                  to="/blogs"
                >
                  المدونة
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-NavLink text-decoration-none"
                  to="#"
                >
                  من نحن
                </Link>
              </li>
            </ul>
            </div>
          </div>

          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <div className="d-flex flex-column align-items-end">
              <span className="logo-text  fs-5">عدسة</span>
              <span className="logo-text desc">عالم التصوير الفوتوغرافي</span>
            </div>
            <i className="fa-regular fa-camera fs-1"></i>
          </Link>
        </div>
      </nav>

      <main className="layout-content pt-5">
        <Outlet />
      </main>

      <footer
        className="footer-section text-white py-4 border-top border-secondary border-opacity-10"
        dir="rtl"
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div className="logo-box-footer ms-2 pb-1">ع</div>
                <h4 className="mb-0 fw-bold">عدسة</h4>
              </div>
              <p className="text-secondary small lh-lg mb-4">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="social-icons d-flex gap-2">
                <Link to="#">
                  <i className="fab fa-x-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="footer-title mb-4">استكشف</h5>
              <ul className="list-unstyled p-0 d-flex flex-column gap-2">
                <li>
                  <Link to="/" className="footer-link">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="footer-link">
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="footer-title mb-4">التصنيفات</h5>
              <ul className="list-unstyled p-0 d-flex flex-column gap-2">
                <li>
                  <Link to="#" className="footer-link">
                    إضاءة
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    مناظر طبيعية
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    تقنيات
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="footer-title mb-4">ابقى على اطلاع</h5>
              <p className="text-secondary small mb-3">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <div className="subscribe-form">
                <input
                  type="email"
                  className="form-control bg-card-custom border-secondary border-opacity-25 mb-3 text-white shadow-none py-2"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button className="btn btn-orange w-100 fw-bold py-2 rounded-3 text-white">
                  اشترك
                </button>
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-between align-items-center flex-wrap small text-secondary">
            <p className="m-0">
              © 2026 عدسة. صنع بكل{" "}
              <span className="text-orange">
                <i class="fa-solid fa-heart"></i>
              </span>{" "}
              جميع الحقوق محفوظة.
            </p>
            <div className="d-flex gap-4 mt-2 mt-md-0">
              <Link to="#" className="footer-link-terms opacity-75">
                سياسة الخصوصية
              </Link>
              <Link to="#" className="footer-link-terms opacity-75">
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
