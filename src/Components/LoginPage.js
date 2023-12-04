import React, { useState } from 'react';
import "./App.css";
export const LoginPage = (props) => {

  const [password, setpassword]=useState("");
  const [visible, setvisible] =useState(false);
  const [email, setEmail]= useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Input feild should not be blank! ");
      return;
    }
    console.log('Email:',email);
    console.log('Password:', password);
    alert("Congradulations Login details submitted Successfuly!");
    setEmail("");
    setpassword("");  
  };
  return (
    <>
      <div className="container">
        <h1>{props.Title}</h1>
        <form action='#'  onSubmit={handleSubmit}>
        <div>
        <label htmlFor="Email">Username</label>
        <input type="email" placeholder="Enter your Email.." onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="Password">Password</label><div className='password'>
        <input type={visible ? "text" :"password"} value={password} placeholder="Enter password " onChange ={(e)=>setpassword(e.target.value)}   autoComplete="current-password" />
        </div>
        <div className="eye-icon" onClick={() => setvisible(!visible)} >
          {
            visible ? <i className="fa-solid fa-eye"></i> :<i className="fa-solid fa-eye-slash"></i>
          }
        </div>
        </div>  
        <div>
        <button type="submit" className='btn'> Login</button>
        </div>
        </form>
      </div>
    </>
  )
}