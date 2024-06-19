import { Outlet } from "umi";
export default function Layout() {
  return (
    <>
      <header className="home_nav_two">
        <nav className="navbar fixed-top navbar-expand-lg navbar_two">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src="assets/images/Bold_Logo-color.svg"
                alt="Bold Exchange Logo"
                id="logo"
                style={{ width: "150px" }}
              />
            </a>
            <div className="d-flex flex-row order-2 order-lg-3 user_info">
              <div className="group_btn d-none d-sm-block">
                <a href="login.html" className="group_link log_in registration">
                  LOG IN
                </a>
                <a href="signup.html" className="group_link registration hover">
                  SIGN UP
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navDefault"
                aria-controls="navDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
                id="toggleIcon"
              >
                <span className="bar_one"></span>
                <span className="bar_two"></span>
                <span className="bar_three"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end order-3 order-lg-2"
              id="navDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    HOME
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="index.html">
                        HOME
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index-two.html">
                        HOME TWO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="user-portfolio.html">
                        Admin Panel
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="play.html">
                    HOW TO PLAY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="faq.html">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pd_right" href="contact.html">
                    CONTACT US
                  </a>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <a className="nav-link registration" href="login.html">
                    LOG IN
                  </a>
                </li>
                <li className="nav-item d-block d-sm-none">
                  <a className="nav-link registration hover" href="signup.html">
                    SIGN UP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
