import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    axios
      .post(`https://ecommerce-exercise-backend.herokuapp.com/login/`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        navigate("/shop");
      })
      .catch(() => setLoginError("Credenciales invalidas"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} required />
        </div>

        <div className="input-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            required
          />
        </div>
        {loginError}
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
