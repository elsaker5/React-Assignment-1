import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
  return (
    <>
      <section className="home-hero d-flex align-items-center text-center text-white">
        <div className="container position-relative">
          <span className="hero-badge mb-4 d-inline-block">
            مرحبًا بك في عدسة
          </span>

          <h1 className="hero-title">
            اكتشف <span>فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="hero-desc mx-auto mt-3">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-outline-light px-4 pt-2">
              اعرف المزيد
            </button>
            <Link to="/blogs">
              <button className="btn btn-orange px-4 pt-2">
                استكشف المقالات ←
              </button>
            </Link>
          </div>

          <div className="row justify-content-center mt-5 g-4">
            <div className="col-md-6 col-lg-2">
              <div className="stat-card">
                <i class="fa-solid fa-pen-nib orange"></i>
                <h3>6</h3>
                <p>كاتب</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="stat-card ">
                <i class="fa-solid fa-pen-nib orange"></i>
                <h3>4</h3>
                <p>تصنيفات</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="stat-card ">
                <i class="fa-solid fa-pen-nib orange"></i>
                <h3> 10+ آلف</h3>
                <p>قارئ</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="stat-card ">
                <i class="fa-solid fa-pen-nib orange"></i>
                <h3>50+</h3>
                <p>مقالة</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
