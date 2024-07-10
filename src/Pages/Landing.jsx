import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const Landing = () => {
  const [currentmonth, setCurrentmonth] = useState("");
  const [currentday, setCurrentday] = useState("");
  const apiurl = import.meta.env.VITE_API_URLKEY;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${apiurl}/url/url-dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    //console.log(data);
    setCurrentmonth(data.month);
    setCurrentday(data.date);
  };
  return (
    <section className="bg-primary py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="d-flex justify-content-center gap-5">
          <div className="bg-white text-black border border-radius rounded">
            <h5 className="p-3">URL's of this month</h5>
            <h1 className="p-3 text-center ">{currentmonth}</h1>
          </div>
          <div className="bg-white text-black border border-radius rounded">
            <h5 className="p-3">URL's today</h5>
            <h1 className="p-3 text-center">{currentday}</h1>
          </div>
        </div>
        <div className="d-flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5 justify-content-center">
          <Link
            to="/createshorturl"
            className="btn btn-primary border border-radius mt-3"
          >
            <Button> Create Shorten URL</Button>
          </Link>
          <Link
            to="/urllists"
            className="btn btn-primary border border-radius mt-3"
          >
            <Button> See URL's</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;