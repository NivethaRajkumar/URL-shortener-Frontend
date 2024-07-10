import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListURLs = () => {
  const [urllist, setUrllist] = useState([]);
  useEffect(() => {
    fetchData();
  }, [urllist]);
  const apiurl = import.meta.env.VITE_API_URLKEY;
  const fetchData = async () => {
    const response = await fetch(`${apiurl}/url/geturls`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setUrllist(data.result);
    // console.log(data);
  };
  return (
    <section className="bg-primary py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <Table className="table-fixed">
          <thead>
            <tr>
              <th className="w-15 text-pretty p-4">Original URL</th>
              <th className="w-15 text-pretty p-4">Shorten URL</th>
              <th className="w-10 text-pretty ">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urllist.map((ele, index) => {
              return (
                <tr key={index} className="">
                  <td className="w-15 text-pretty p-4 text-break">
                    {ele.origUrl}
                  </td>
                  <td className="w-15 text-pretty p-4 ">
                    <Link
                      to={`${apiurl}/url/${ele.urlId}`}
                      className="hover:underline"
                    >
                      {ele.shortUrl}
                    </Link>
                  </td>
                  <td className="w-10 text-pretty">{ele.clicks}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Link to="/dashboard" className="mt-4 pb-4  mx-2 hover:underline text-white">
        Back to Dashboard
      </Link>
    </div>
    </section>
  );
};

export default ListURLs;