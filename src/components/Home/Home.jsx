import React, { useEffect, useState } from "react";
import "./Home.css";



function Home({ addContact }) {

  const [contact, setcontact] = useState({})

  

  const Handlechange = (e) => {
    setcontact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  console.log(contact);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.num === "" || contact.email === "") {
      alert("fill all the details");
      return;
    } else {
      addContact(contact);
      setcontact({name:'',num:"",email:""})
    }
  };
  

  return (
    <div>
      <div className="head">
        <span className="h1">MANAGE CONTACT</span>
      </div>

      <div>
        <h2 className="h2">ADD CONTACT</h2>
        <div className="input">
          <form>
            <label htmlFor=""> NAME</label>
            <input
              style={{ height: 30, width: 400, padding: 5 }}
              placeholder="Enter a name"
              name="name"
              onChange={Handlechange}
              value={contact.name}
            ></input>
            <br />
            CONTACT
            <input
              style={{ height: 30, width: 400, padding: 5 }}
              placeholder="Enter a number"
              name="num"
              onChange={Handlechange}
              value={contact.num}
            ></input>
            <br />
            EMAIL
            <input
              style={{ height: 30, width: 400, padding: 5 }}
              placeholder="Enter a email"
              name="email"
              onChange={Handlechange}
              value={contact.email}
            ></input>
            <br />
            <button onClick={handlesubmit}>ADD CONTACT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
