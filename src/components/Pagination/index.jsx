import React, {useEffect, useState} from 'react'
import getContacts from "./lib/contacts";

const Pagination = () => {

const [contacts, setContacts] = useState([]);
const [number, setNumber] = useState(1);

const getPaginatedContacts = async() => {
    const paginatedContacts = await getContacts(number);
    console.log("paginatedContacts", paginatedContacts);
    setContacts(paginatedContacts)
} 

useEffect(()=> {
    getPaginatedContacts()
},[number ])

    const buttonNumbers = [1,2,3,4,5];

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:10, padding:"10px 0"}}>
        {
            contacts?.map((item, index)=> <div key={item.email}>
                <span>{index+1}.</span><span>Name:{" "} {item.name}</span>|<span> Email:{" "} {item.email}</span>    
            </div>)
}

    {
        buttonNumbers.map((item)=> <button key={item} onClick={()=> setNumber(item)}>{item}</button>)
    }
    </div>
  )
}

export default Pagination