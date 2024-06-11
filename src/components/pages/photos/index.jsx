import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const index = () => {
  const [photo, setPhoto] = useState([]);
  const [count, setCount] = useState(1);
  const [limit ,setLimit] = useState(10)
  useEffect(
    (item, index) => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_page=${count}&_limit=${limit}`
        )
        .then((response) => {
          setPhoto(response.data.slice(0, 25));
        });
    },
    [count ,limit]
  );
  const handlePrew = (type) => {
    if (type === "prew") {
      if (count > 1) {
        setCount((prew) => prew - 1);
      }
    } else {
      setCount((prew) => prew + 1);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <select onChange={(e)=>setLimit(e.target.value)} className="form from-control my-3">
          <option selected>Select limit</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        {photo.map((item, index) => (
          <div className="card p-5 col-12 col-md-3 mb-4" key={index}>
            <img src={item.thumbnailUrl} alt="" className="" />
          </div>
        ))}
        <div className="btn d-flex gap-3 justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => handlePrew("prew")}
          >
            PREW
          </button>
          {count}
          <button
            className="btn btn-primary"
            onClick={() => handlePrew("next")}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
