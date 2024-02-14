import React from 'react'

function EmployeCard({id,salary, age}) {
    console.log('EmployeeCard');
  return (
    <div>
        <h1>Inside Employee Component</h1>
        <h1>ID : {id}</h1>
        <h2>Salary : {salary}</h2>
        <h2>Age : {age}</h2>
    </div>
  )
}

export default EmployeCard