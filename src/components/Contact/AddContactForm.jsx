// In AddContactForm.js
import React from "react";
import Home from "../Home/Home";
import "./add.css";



function AddContactForm({ add,remove }) {
  console.log(add, "ct");

  const mapping = add.map((val, index) => (
    <tr key={index}>
      <td>{val.data.name}</td>
      <td>{val.data.num}</td>
      <td>{val.data.email}</td>
      <td>
        <button onClick={() => remove(val.id)}>delete</button>
      </td>
    </tr>
  ));
  


  return (

    <div>
<h2 className="h22">CONTACT LIST</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{mapping}</tbody>
      </table>
    </div>
  );
}

export default AddContactForm;
