import axios from "axios";
import React, { useState } from "react";
import Cookies from 'js-cookie';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    try{const response = await axios.post('http://localhost:3001/users/login', 
    {
        email,
        password
    }
    );

    Cookies.set('ticket', response.data.token)

    setSuccess("Logged in!");
    }catch(e){
        setError(e.response.data.error|| "An error occurred");
        console.log(e);
    }
  }
  return (
    <>
      <div className="container">
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" 
            className="form-control" 
            id="password" 
            onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
          {error && <div className="alert alert-danger mt-2">{error}</div>}
          {success && <div className="alert alert-success mt-2">{success}</div>}
        </form>
      </div>
    </>
  );
};

export default Login;
