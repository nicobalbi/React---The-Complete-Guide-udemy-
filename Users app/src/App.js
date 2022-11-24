import React, { useState } from 'react';
import UserForm from './components/Users/UserForm';
import Users from './components/Users/Users';


function App() {

  const [users, setUsers] = useState([])

  const addNewUser = user => {
    const newUser = {...user, id: Math.random().toString()}
    setUsers(prevState => [...prevState, newUser])
  }

  return (
    <div>
      <UserForm onAddNewUser={addNewUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
