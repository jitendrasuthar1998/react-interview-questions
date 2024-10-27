import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import {contacts} from "./contactsData.js";
import { Contact } from "./contacts.types";

export default function InfiniteScroll() {
  const [allContacts, _] = useState(contacts);
  const [data, setData] = useState<Contact[]>(allContacts.slice(0, 5));
  const [pageNumber, setPageNumber] = useState(1);
  // console.log("data length", data.length);
  const pageNumberRef = useRef(1);
  const observer = useRef<IntersectionObserver | null>(null);
  // console.log("all contacts length", allContacts.length);
  // Function to load more contacts
  // const loadMoreContacts = (page: number, pageSize = 10) => {
  //   const start = (page - 1) * pageSize; // Corrected start index
  //   console.log("start", start);
  //   // console.log("pageSize", pageSize);
  //   const end = start + pageSize;
  //   console.log("end", start + pageSize);
  //   const newContacts = allContacts.slice(start, end);
  //   console.log("newContacts", newContacts);
  //   // console.log("contacts length", newContacts.length);
  //   // Only set more data if there are new contacts to add
  //   if (newContacts.length > 0) {
  //     setData((prevData) => [...prevData, ...newContacts]);
  //   }
  // };

  const loadMoreContacts = (page: number, pageSize = 5) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newContacts = allContacts.slice(start, end);

    if (newContacts.length > 0 && data.length + newContacts.length <= allContacts.length) {
      setData((prevData) => [...prevData, ...newContacts]);
    }
  };

  // Callback for observing the last item
  // const lastContactRef = useCallback(
  //   (node: HTMLDivElement) => {
  //     if (observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries) => {
  //       // console.log("entries", entries);
  //       // console.log("data.length", data.length);
  //       // console.log("contacts.length", allContacts.length);
  //       if (entries[0].isIntersecting && data.length <= allContacts.length) {
  //         pageNumberRef.current = pageNumberRef.current + 1;
  //         loadMoreContacts(pageNumberRef.current);
  //         setPageNumber((prevPage)=> prevPage + 1);
  //       }
  //     });

  //     if (node) observer.current.observe(node);
  //   },
  //   [data]
  // );

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
  );
}
