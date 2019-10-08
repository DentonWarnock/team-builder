import React, { useState } from 'react';
import Form from './Components/Form.js';
import MemberCard from './Components/MemberCard.js';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1, 
      name: "", 
      email: "", 
      role: ""
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <Form addMemberFn={addMember} />
      <MemberCard membersList={members} />
    </div>
  );
}

export default App;
