import React, { useEffect, useState } from "react";
import { Contact } from "./contacts.types";
import {contacts} from "./contactsData";

const WindowScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
    console.log("pageNumber", pageNumber);
    const [data, setData] = useState<Contact[]>(contacts.slice(0, 10));
    const loadMoreContacts = (page: number, pageSize = 10) => {
        const start = (page - 1) * pageSize; // Corrected start index
        const newContacts = contacts.slice(start, start + pageSize);
        
        // Only set more data if there are new contacts to add
        if (newContacts.length > 0) {
          setData((prevData) => [...prevData, ...newContacts]);
        }
      }; 
      
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(()=> {
    loadMoreContacts(pageNumber);
  },[pageNumber])

  return <div>
    {
      data.map((contact, index)=> <div key={index} style={{ padding: "20px", border: "1px solid #ccc" }}>
      <p>{index+1}</p>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </div>)
    }
  </div>;
};

export default WindowScroll;
