import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const apiurl = import.meta.env.VITE_API_URLKEY;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    await axios
      .post(`${apiurl}/user/signin`, payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

    setEmail("");
    setPassword("");

    // setTimeout(() => {
    //   navigate("/landingpage");
    // }, 1000);
  };
  return (
    // <section classNameName='home_container'>
    //    <p> URL shortening is a technique on the World Wide Web in which a Uniform
    // Resource Locator (URL) may be made substantially shorter and still
    // direct to the required page. This is achieved by using a redirect which
    // links to the web page that has a long URL. For example, the URL
    // "https://en.wikipedia.org/wiki/URL_shortening" can be shortened to
    // "https://w.wiki/U". Often the redirect domain name is shorter than the
    // original one. A friendly URL may be desired for messaging technologies
    // that limit the number of characters in a message (for example SMS), for
    // reducing the amount of typing required if the reader is copying a URL
    // from a print source, for making it easier for a person to remember, or
    // for the intention of a permalink. In November 2009, the shortened links
    // of the URL shortening service Bitly were accessed 2.1 billion times.
    // Other uses of URL shortening are to "beautify" a link, track clicks, or
    // disguise the underlying address. This is because the URL shortener can
    // redirect to just about any web domain, even malicious ones. So, although
    // disguising of the underlying address may be desired for legitimate
    // business or personal reasons, it is open to abuse.Some URL shortening
    // service providers have found themselves on spam blocklists, because of
    // the use of their redirect services by sites trying to bypass those very
    // same blocklists. Some websites prevent short, redirected URLs from being
    // posted.</p>
    //     <a href="/login" classNameName='btn btn-primary'>Sign In</a>
    // </section>

    <section className="bg-primary py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="d-flex justify-content-center text-bg-primary">
              <div className="col-12 col-xl-9">
                <h2 className="h1 mb-4">Short URL</h2>
                <p className="lead mb-5">
                  URL shortening is a technique on the World Wide Web in which a
                  Uniform Resource Locator (URL) may be made substantially
                  shorter and still direct to the required page. This is
                  achieved by using a redirect which links to the web page that
                  has a long URL. For example, the URL
                  "https://en.wikipedia.org/wiki/URL_shortening" can be
                  shortened to "https://w.wiki/U". 
                </p>
                <p className="lead mb-5">Signin to Explore More </p>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="card border-0 rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <h3>Sign in</h3>
                      <p>
                        Don't have an account?{" "}
                        <Link to="/register">Sign up</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                      <Link to="/forgotpassword">Forgot password</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;