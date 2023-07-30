import React, { useState } from "react";
import LForm from "./LForm";
import Table from "./LTable";

export default function Leetcode() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div
      className="container-fluid spacer layer3"
      style={{ margin: "0px", minHeight: "100vh" }}
      id="dark"
    >
      <LForm addData={addData} />
      <Table data={data} />
    </div>
  );
}
