/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

// Higher-Order Component that adds loading functionality
const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

// A simple component that displays user information
const UserInfo = ({ name, age }) => {
  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// Wrapping the UserInfo component with the HOC
const UserInfoWithLoading = withLoading(UserInfo);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'John Doe', age: 30 });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <UserInfoWithLoading isLoading={loading} {...user} />
    </div>
  );
};

export default App;
