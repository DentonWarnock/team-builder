import React from 'react';

function MemberCard(props) {

  return (    
    <div className="member-card"> 
    <h1>Current Members Info</h1>
    {/* {(props.membersList.length < 1) ? null : <div>hello friend</div>} trying to remove empty box */}
      {props.membersList.map(member => {
        return (
          <div className="card" key={member.id}>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
            {member.name !== "" ? <button className="edit-Btn" onClick={props.editMemberFn(member)}>Edit</button> : null}
          </div>
        );
      })}         
    </div>
  );
};

export default MemberCard;