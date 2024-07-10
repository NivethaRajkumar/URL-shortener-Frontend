import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreateShortURL = () => {
  const [origUrl, setOrigUrl] = useState("");
  // const [shorturlid, setShorturlid] = useState("");
  const [data, setData] = useState("");
  const apiurl = import.meta.env.VITE_API_URLKEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { origUrl };
    console.log(payload);
    const response = await fetch(`${apiurl}/url/shorten-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    setData(result);
    console.log(data);
    toast(data.message);
  };

  return (
    <section className="bg-primary py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <input
                id="longurl"
                name="longurl"
                placeholder="Paste the link to shorten it..."
                className="p-2 font-medium italic w-50"
                value={origUrl}
                onChange={(e) => setOrigUrl(e.target.value)}
              />
              <br />
              <button type="submit" className="btn btn-primary mt-5 mx-2 border border-radius">
                Shorten URL
              </button>
            </form>
            <Table className="mt-5 mb-5">
              <tbody>
                <tr>
                  <td className="font-medium italic text-break bg-primary text-white">
                    {data.newUrl && data.newUrl.origUrl}
                  </td>
                  <td className="font-medium italic p-3 mt-5 bg-primary text-white">
                    {data.newUrl && (
                      <Link
                        to={`${apiurl}/url/${data.newUrl.urlId}`}
                        className="hover:underline text-white"
                      >
                        {data.newUrl && data.newUrl.shortUrl}
                      </Link>
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Link to="/dashboard" className="mt-4 mx-2 hover:underline text-white">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateShortURL;