import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { db } from "../database/firebase";
import { useHistory } from "react-router";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const history = useHistory();

  // Move the data from the input to Firebase //
  const submitForm = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        number: number,
      })
      .then(() => {
        alert("Contacts Added");
      })
      .catch((e) => {
        alert(e.message);
      });

    setName("");
    setNumber("");
    history.push("/");
  };

  return (
    <>
      <Navbar />
      <div className='contactform'>
        <div className='container'>
          <h1>Enter a new contact</h1>
          <form onSubmit={submitForm}>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Person's Name"
              required
            />
            <input
              type='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='Phone Number'
              required
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};
