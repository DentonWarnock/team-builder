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
  const [memberToEdit, setMemberToEdit] = useState([{}]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }

  const editMember = member => {
    setMemberToEdit(member)
  }

  return (
    <div className="App">
      <Form addMemberFn={addMember} editMemberFn={editMember} memberToEdit={memberToEdit} />      
      <MemberCard membersList={members} editMemberFn={editMember} />
    </div>
  );
}

export default App;
