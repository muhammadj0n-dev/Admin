import React, { useState } from "react";
import "./index.css";
import UserModal from "../modal";

const Index = () => {
  const [cars, setCars] = useState([
    {
      id: "565hgvhgv8546",
      name: "mersades",
      price: 4544,
      brand: "nwqja",
      year: "2025",
      color: "blaack",
    },
  ]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [car, setCar] = useState([]);
  const deleteItem = (id) => {
    const new_Cars = cars.filter((item) => item.id !== id);
    setCars([...new_Cars]);
  };
  const editItem = (item) => {
    setCar(item);
    setModal(true);
  };
  const toggle = () => {
    setModal(false);
    setCar({});
  };
  return (
    <>
      <UserModal
        open={modal}
        car={car}
        toggle={toggle}
        cars={cars}
        setCars={setCars}
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-9 ">
            <div className="user d-flex my-3 gap-3 ">
              <button
                className="btn btn-primary"
                onClick={() => setModal(true)}
              >
                Open modal
              </button>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                className="form form-control"
              />
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>BRAND</th>
                  <th>YEAR</th>
                  <th>COLOR</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {cars
                  ?.filter((item) => {
                    if (
                      item?.name.toLowerCase().includes(search?.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.brand}</td>
                      <td>{item.year}</td>
                      <td>{item.color}</td>
                      <td className="d-flex gap-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => editItem(item)}
                        >
                          <box-icon name="edit"></box-icon>
                        </button>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="btn btn-info"
                        >
                          <box-icon name="trash"></box-icon>
                        </button>
                        <button className="btn btn-primary">
                          <box-icon name="show" type="solid"></box-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
