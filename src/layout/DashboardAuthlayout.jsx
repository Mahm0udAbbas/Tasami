import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation, useSearchParams } from "react-router";

const getHeadingText = (route, step, t) => {
  if (route === "/login") {
    return t("auth.login");
  }
  return t("auth.login");
};

const DashboardAuthlayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const route = location.pathname;
  const [searchParmas, setSearchParams] = useSearchParams();
  const step = searchParmas.get("step");

  return (
    <section className="auth_section">
      <div className="form_container">
        <div className="form-header">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
            <span />
            <h1>{getHeadingText(route, step, t)}</h1>
          </div>

          {/* {location.pathname.includes("dashboard") && <></>} */}
        </div>
        <Outlet />
      </div>

      <div className="img  d-none d-md-block">
        <img src="/images/regiester-image.webp" alt={t("auth.authImageAlt")} />
      </div>
    </section>
  );
};

export default DashboardAuthlayout;
