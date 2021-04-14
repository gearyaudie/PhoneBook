import React, { useState, useEffect } from "react";
import { db } from "../database/firebase";
import { Navbar } from "./Navbar";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    db.collection("contacts")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        const contacts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          contacts.push(data);
        });
        setContacts(contacts);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className='contactlist'>
        <div className=' container card'>
          <h1>Your Contacts</h1>
          <div className='flex'>
            <p>Name. </p>
            <p>Phone No.</p>
          </div>
          <hr />
          <div className='container'>
            {contacts &&
              contacts.map((contact, ID) => {
                return (
                  <div className='contactlist-out' key={ID}>
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
