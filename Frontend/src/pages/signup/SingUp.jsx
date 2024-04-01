import React from "react";
import Gender from "./Gender";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp.js";
const SignUp = () => {
  const [input, setInput] = useState({
    fullName : "",
    username : "",
    password : "",
    confirmPassword :"",
    gender : ""
  })
  const {loading,signup} = useSignUp();
  const handleChange = (e) =>{
     const newInput = {...input};
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  }
  const handleCheckBoxChange = (gender) =>{
    setInput({...input,gender});
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ExpertEase</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Alice Dubey"
              className="w-full input input-bordered h-10"
              value={input.fullName}
              onChange={handleChange}
              name="fullName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter same password"
              className="w-full input input-bordered h-10"
              value={input.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
          </div>
          <Gender onCheckBoxChange = {handleCheckBoxChange} selectedGender ={input.gender}/>
          <Link
            to="/login"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2">
              {loading?<span className="loading loading-spinner">Sign Up</span>:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
