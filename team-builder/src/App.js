import React, { useState } from 'react';
import Form from './Components/Form.js';
import MemberCard from './Components/MemberCard.js';
import './App.css';

function App() {
  const [members, setMembers] = useState({name: "", email: "", role: ""});

  return (
    <div className="App">
      <Form />
      <MemberCard />
    </div>
  );
}

export default App;
