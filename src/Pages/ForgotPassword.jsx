import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const apiurl = import.meta.env.VITE_API_URLKEY;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email };
    await axios
      .post(`${apiurl}/user/forgot-password`, payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <section className="bg-primary py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="h-100 d-flex flex-row align-items-center justify-content-center">
          <form onSubmit={handleSubmit}>
            <h1>Forgot Password</h1>
            <div className="input_container ri-mail-fill mt-5">
              <label for="email">Email</label>
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

            <Button type="submit">Reset password</Button>
          </form>
          <h6>Password link will be send to your Email id.Check your inbox</h6>
        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;