import React, { useState } from "react";

function Form(props) {
  const [member, setMember] = useState({name: "", email: "", role: ""});

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addMemberFn(member)
    setMember({name: "", email: "", role: ""});
  }

  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Member Name</label>
        <input
          id="name"
          value={member.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;