import React, { useState } from 'react'
import EmployeCard from './EmployeCard';
import PureComponent from './PureComponent';

const Parent = () => {

    const [id, setId] = useState(1);
    const [salary, setSalary] = useState(100000);
    const [age, setAge] = useState(25);
console.log("Parent");
  return (
    <div>
        <EmployeCard id={id} salary={salary} age={age}/>
        <PureComponent salary={salary} age={age}/>

        <button onClick={()=> setId((prevId) => prevId + 1)}>Increment ID</button>
    </div>
  )
}

export default Parent