/* eslint-disable react/prop-types */
// UserContext.js
import { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Jitendra Suthar', email: 'jitendrasuthar995@gmail.com' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
