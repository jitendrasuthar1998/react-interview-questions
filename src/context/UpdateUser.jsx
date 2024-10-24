// UpdateUser.js
import  { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [newName, setNewName] = useState(user.name);

  const handleUpdate = () => {
    setUser({ ...user, name: newName });
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
      />
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
};

export default UpdateUser;
