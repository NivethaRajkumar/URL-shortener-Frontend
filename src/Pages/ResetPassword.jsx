import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resetpassword = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { str } = useParams();
  //const str = "Lf83vBGB466S7Kns0oECX6la7xjTzVWG";
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get(`${apiurl}/user/check-str/${str}`)
      .then((res) => {
        setData(res.data.result);

        setEmail(res.data.result.email);
        //toast.success(res.data.message)
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  const apiurl = import.meta.env.VITE_API_URLKEY;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    //console.log(payload);
    await axios
      .post(`${apiurl}/user/reset-password`, payload)
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
            <h1>Reset password</h1>
            <div className="input_container ri-mail-fill mt-5">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={data.email}
                readonly
              />
            </div>
            <div className="input_container ri-lock-password-fill">
              <label for="password"> New Password</label>
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
            <Button type="submit">Reset password</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Resetpassword;