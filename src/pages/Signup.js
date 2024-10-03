import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const Signup = () => {
    //Defining Variables
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currency, setCurrency] = useState("USD"); // Default currency
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

let handleSubmit = async (e) => {
    setError('')
    setSuccess('')
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    
    try {
        const response = await axios.post(' http://localhost:3001/users/signup', {
            firstname,
            lastname,
            email,
            password,
            currency
        });
        Cookies.set('ticket', response.data.ticket)
        // Handle the response here
        setSuccess("Signup successful!"); 
    } catch (e) {
             // Display appropriate error message
      setError(e.response.data.error|| "An error occurred");
      console.log(e);

    }
};
  return (
    <>
      <div className="container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="currency">Currency:</label>
            <select
              className="form-select"
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {error && <div className="alert alert-danger mt-2">{error}</div>}
          {success && <div className="alert alert-success mt-2">{success}</div>}
        </form>
      </div>
    </>
  );
};

export default Signup;
