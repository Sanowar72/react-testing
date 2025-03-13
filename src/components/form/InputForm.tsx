import React, { useEffect, useState } from "react";

const defaultState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const InputForm = () => {
  const [formData, setFormData] = useState(defaultState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormdata = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    // if (!formData.email) {
    //   console.log("Invalid email detected");
    //   setErrorMessage("invalid email");
    //   return;
    // }
    setErrorMessage("invalid email");
    // console.log("Form is valid");
    // setErrorMessage("");
  };
 
  return (
    <>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormdata}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormdata}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleFormdata}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleFormdata}
        />
        <br />
        {errorMessage && <p data-testid="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default InputForm;
