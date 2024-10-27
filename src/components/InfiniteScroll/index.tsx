import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import {contacts} from "./contactsData.js";
import { Contact } from "./contacts.types";

export default function InfiniteScroll() {
  const [allContacts, _] = useState(contacts);
  const [data, setData] = useState<Contact[]>(allContacts.slice(0, 5));
  
  // console.log("data length", data.length);
  const pageNumberRef = useRef(1);
  const observer = useRef<IntersectionObserver | null>(null);
  

  const loadMoreContacts = (page: number, pageSize = 5) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newContacts = allContacts.slice(start, end);

    if (newContacts.length > 0 && data.length + newContacts.length <= allContacts.length) {
      setData((prevData) => [...prevData, ...newContacts]);
    }
  };

  // Callback for observing the last item

  const lastContactRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();

      console.log("data", data);
      console.log("all contacts", allContacts);
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data.length < allContacts.length && pageNumberRef.current) {
          pageNumberRef.current += 1;
          loadMoreContacts(pageNumberRef.current, 5); // Adjust pageSize as desired
        }
      });

      if (node) observer.current.observe(node);
    },
    [data]
  );

  // console.log("pageNumber", pageNumberRef.current);

  return (
    <div className="App">
      <h1>Contacts</h1>
      <div style={{maxHeight:500, overflow:"scroll"}}>
      {data.map((contact, index) => {
        if (data.length === index + 1) {
          return (
            <div
              key={index}
              ref={lastContactRef}
              style={{ padding: "20px", border: "1px solid #ccc" }}
            >
              <div>{index + 1}</div>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              style={{ padding: "20px", border: "1px solid #ccc" }}
            >
              <div>{index + 1}</div>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
            </div>
          );
        }
      })}
      </div>
    </div>
  );
}
