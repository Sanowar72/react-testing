import React, { useState } from "react";

const defaultState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "", // Changed from setPassword to confirmPassword
};

const InputForm = () => {
  const [formData, setFormData] = useState(defaultState);

  const handleFormdata = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("This is form data:", formData);
  };

  return (
    <>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleFormdata} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleFormdata} />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFormdata}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleFormdata}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputForm;
