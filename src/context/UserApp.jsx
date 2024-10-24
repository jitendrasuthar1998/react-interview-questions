// App.js
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';
import UpdateUser from "./UpdateUser";

const UserApp = () => {
  return (
    <UserProvider>
      <div>
        <h1>Welcome to the User Dashboard</h1>
        <UserProfile />
        <UpdateUser/>
      </div>
    </UserProvider>
  );
};

export default UserApp;
