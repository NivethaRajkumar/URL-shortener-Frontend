import React from "react";
import { Container } from "react-bootstrap";
import Loginpage from "./Pages/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
//import Loginpage from "./Pages/Loginpage";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import ResetPassword from "./Pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import ConfirmRegistration from "./Pages/ConfirmRegistration";
import CreateShortURL from "./Pages/CreateShortURL";
import ListURLs from "./Pages/ListURLs";

const App = () => {
  return (
    <div>
      <div>
        <ToastContainer></ToastContainer>
      </div>
      <div>
        <Container className="main_container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<Landing />} />
              <Route path="/reset-password/:str" element={<ResetPassword />} />
              <Route
              path="/activate-user/:str"
              element={<ConfirmRegistration />}
            />
             <Route path="/createshorturl" element={<CreateShortURL />} />
             <Route path="/urllists" element={<ListURLs />} />
            
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
};

export default App;