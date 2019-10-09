import React, { useState, useEffect } from "react";

function Form(props) {
  const [member, setMember] = useState({name: "", email: "", role: ""});

  useEffect(() => {
    setMember(props.memberToEdit);
    console.log("Use Effect Props", props.memberToEdit)
  }, [props.memberToEdit]);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addMemberFn(member)
    setMember({name: "", email: "", role: ""});
  }

  console.log("Member in Form.js", member)

  return (
    <div className="form-body">
      <h1>Add New Member</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Member Name</label>
        <input
          id="name"
          value={member.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="email">Member Email</label>
        <input
          id="email"
          value={member.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="role">Member Role</label>
        <select 
          id="role"
          value={member.role}
          name="role"
          onChange={handleChange}
        >
          <option />
          <option>Q and A</option>
          <option>Front End</option>
          <option>Back End</option>
          <option>Full Stack</option>
          <option>Team Lead</option>
        </select>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default Form;