import React, { useEffect, useState } from "react";
import { contacts } from "../InfiniteScroll/contactsData";
import { Contact } from "../InfiniteScroll/contacts.types";

const AutoComplete = () => {
  const [searchText, setSearchText] = useState("");

  const [searchResult, setSearchResult] = useState<Contact[]>([]);

  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(()=> {
    if(searchText){
        const debouncing = setTimeout(()=> {
            handleSearchResult();
        }, 500)
    
        return () => {
            console.log("clearing timeout");
            clearTimeout(debouncing);
        }
    }
  },[searchText])

  const handleSearchResult = () => {
    console.log("handleSearch called");
    let result = contacts.filter((contact) =>
        //   contact.name.startsWith(event.target.value)
        contact.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResult(result);
  };

  useEffect(() => {
    if (!searchText) {
      setSearchResult([]);
    }
  }, [searchText]);

  return (
    <div>
      <h1>Search Contacts with Pagination</h1>

      <input type="text" value={searchText} onChange={handleOnChange} />
      <button onClick={handleSearchResult}>Search</button>

      {searchResult?.map((result) => (
        <div key={result.email}>{result.name}</div>
      ))}
    </div>
  );
};

export default AutoComplete;
