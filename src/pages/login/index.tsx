import { useEffect } from "react";
const DocsPage = () => {
  return (
    <section className="form_bg">
      <div className="container">
        <div className="form_container">
          <div className="form_header">
            <a href="index.html" className="registration_logo">
              <img src="assets/images/logo.png" alt="Bold Exchange Logo" />
            </a>
          </div>
          <form
            action="https://pixner.net/Bold Exchange/dark/contact.php"
            method="POST"
            className="mt-60"
          >
            <h1 className="form_title">Log in</h1>
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
              <a href="#" className="para" id="forgot">
                Forgot Password?
              </a>
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
                I don't have an account. <a href="signup.html">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DocsPage;
