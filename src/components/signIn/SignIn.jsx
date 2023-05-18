import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SignIn.scss";
import Toaster from "../Toaster/Toaster.jsx";
import user from "../ASSETS/user.png";
import locker from "../ASSETS/padlock.png";

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});
  const [showToaster, setShowToaster] = useState(false);

  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
    setShowToaster(true);
  };

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <span>
          <img className="input-icon" src={user} alt="" />
        </span>
        <input
          name="username"
          placeholder="Enter Username or Email"
          {...register("username", {
            required: "Username is required",
            minLength: { value: 3, message: "Enter more than 2 symbols" },
          })}
        />
      </div>
      <div className="error-container">
        {errors.username && <p> {errors.username.message}</p>}
      </div>

      <div className="input-container">
        <span>
          <img className="input-icon" src={locker} alt="" />
        </span>
        <input
          name="password"
          type={"password"}
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Enter more than 5 symbols" },
          })}
        />
      </div>
      <div className="error-container">
        {errors.password && <p> {errors.password.message}</p>}
      </div>

      <button name="submit">Submit</button>
      <p>Do not have an account?</p>
      <button>registration</button>

      {showToaster && <Toaster message="Successful" />}
    </form>
  );
}

export default SignIn;
