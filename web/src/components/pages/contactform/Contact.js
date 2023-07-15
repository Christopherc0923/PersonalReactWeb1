import React, { useState } from "react";
import Form from "./Form";
import "./Contact.css";

export default function Contact() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="container text-center row" id="jump">
      <div className="container-fluid col-lg-4 d-flex flex-column align-items-center justify-content-center">
        <h3 className="text-center">Contact Us</h3>
        <p className="text-center">
          This functionality will not work on github pages cannot connect to
          MongoDB
        </p>
      </div>
      <div className="form col-lg-8">
        <Form addData={addData} />
      </div>
    </div>
  );
}
