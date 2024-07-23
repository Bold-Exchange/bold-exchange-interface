import { useEffect } from "react";
const DocsPage = () => {
  return (
    <section className="form_bg">
      <div className="container">
        <div className="form_container">
          <form action="#" method="POST" className="mt-60">
            <h1 className="form_title">Let's Create Your Account</h1>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control para"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password-field" className="form-label">
                Password
              </label>
              <div className="show_password">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="form-control para"
                  id="password-field"
                  required
                />
                <i className="fas fa-eye toggle-password"></i>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="con_password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
                className="form-control para"
                id="con_password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register Now!
            </button>
            <div className="form_footer">
              <span>OR</span>
              <div className="social_container d-flex align-items-center">
                <div className="facebook">
                  <a
                    href="#"
                    className="para d-flex align-items-center justify-content-evenly"
                  >
                    <img
                      src="assets/images/contact/facebook.png"
                      alt="Sign Up With Facebook"
                    />{" "}
                    FACEBOOK
                  </a>
                </div>
                <div className="google">
                  <a
                    href="#"
                    className="para d-flex align-items-center justify-content-evenly"
                  >
                    <img
                      src="assets/images/contact/google.png"
                      alt="Sign Up With Google"
                    />{" "}
                    GOOGLE
                  </a>
                </div>
              </div>
              <p className="para">
                Already have an account. <a href="login.html">Log in</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DocsPage;
