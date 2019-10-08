import React from 'react';

function MemberCard(props) {

  return (
    <div className="member-card">    
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Role: {props.role}</h3>
    </div>
  )
}

export default MemberCard;