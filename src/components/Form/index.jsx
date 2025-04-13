import { useState } from "react"

const Form = () => {

    const [data, setData] = useState({firstName:"", lastName:"", email:""})
    const {firstName, lastName, email} = data;

    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log("event", e.target.value);
        // console.log("event field", e.target.name)

        setData((prev)=> (
            {
                ...prev,
                [name]:value
            }
        ))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const isUserExist = users.some((user)=> user.email == data.email);
        if(isUserExist){
            alert("User already exists with this email", data.email);
            return;
        }
      
        const newUsers = [...users, data].sort((user1, user2)=> user1.email.localeCompare(user2.email));
        setUsers(newUsers);
        setData({firstName:"", lastName:"", email:""});
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>First Name <input value={firstName} required name="firstName" id="firstName" onChange={handleChange}/></label>
            <br/>
            <label>Last Name <input value={lastName} required name="lastName" id="lastName" onChange={handleChange}/></label>
            <br/>
            <label>Email <input value={email} type="email" required name="email" id="email" onChange={handleChange}/></label>
            <br/>
            <button type="submit">Submit</button>
        </form>


        {
            users.length > 0 ? (
                <table>
          <thead>
          <tr><th>First Name</th><th>Last Name</th><th>Email</th></tr>
          </thead>
                <tbody>
                {users.map(({firstName, lastName, email})=> <tr key={email}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                </tr>)}
                </tbody>
        </table>
            ) : null
        }
    </div>
  )
}

export default Form