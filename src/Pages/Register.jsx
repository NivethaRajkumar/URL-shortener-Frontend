import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();
  const apiurl = import.meta.env.VITE_API_URLKEY;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { firstname, lastname, email, password };
    await axios
      .post(`${apiurl}/user/signup`, payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

    setEmail(" ");
    setPassword(" ");
    setFirstname(" ");
    setLastname(" ");
    // setTimeout(() => {
    //   navigate("/login");
    // }, 1000);
  };
  return (
    <section className="bg-primary py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="h-100 d-flex flex-row align-items-center justify-content-center">
         
          <form onSubmit={handleSubmit}>
          <h1>Register Here</h1>
            <div className="input_container ri-user-fill mt-5">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Firstname"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="input_container ri-user-fill">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="input_container ri-mail-fill">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_container ri-lock-password-fill">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-primary border border-radius">Register</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;