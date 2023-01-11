import "./Header.css";
import NavItems, { NavItemsDrop, DropdownItem } from "../navItems/NavItems";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";
import logo from "../../assets/images/calculator.png";

function logout() {
  window.localStorage.removeItem("email");
  window.localStorage.removeItem("userId");
  window.localStorage.removeItem("role");
  window.location.pathname = "/";
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-blue bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="navbar-img" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FaBars />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItems>
              <Link className="nav-link active" aria-current="page" to="/">
                Ana sayfa
              </Link>
            </NavItems>
            {window.localStorage.getItem("email") &&
            window.localStorage.getItem("role") == 1 ? (
              <>
                <NavItems>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/DersEkle"
                  >
                    Ders Ekle
                  </Link>
                </NavItems>
                <NavItems>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/SoruEkle"
                  >
                    Soru Ekle
                  </Link>
                </NavItems>
              </>
            ) : null}
            <NavItemsDrop>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sınıflar
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <DropdownItem text="1.sinif" id="1" />
                <DropdownItem text="2.sinif" id="2" />
                <DropdownItem text="3.sinif" id="3" />
                <DropdownItem text="4.sinif" id="4" />
                <DropdownItem text="5.sinif" id="5" />
                <DropdownItem text="6.sinif" id="6" />
                <DropdownItem text="7.sinif" id="7" />
                <DropdownItem text="8.sinif" id="8" />
              </ul>
            </NavItemsDrop>
          </ul>
          <form className="d-flex">
            {!window.localStorage.getItem("email") ? (
              <>
                <NavItems>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Register"
                  >
                    <FaUserPlus />
                  </Link>
                </NavItems>
                <NavItems>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Login"
                  >
                    <FaSignInAlt />
                  </Link>
                </NavItems>
              </>
            ) : (
              <div className="nav-link active" onClick={logout}>
                {" "}
                <NavItems>
                  <FaSignOutAlt />
                </NavItems>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
