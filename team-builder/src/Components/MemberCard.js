import React from 'react';

function MemberCard(props) {

  return (    
    <div className="member-card"> 
    <h1>Current Members Info</h1>
      {props.membersList.map(member => {
        return (
          <div className="card" key={member.id}>
            <h3>Name: {member.name}</h3>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
          </div>
        );
      })}         
    </div>
  );
};

export default MemberCard;