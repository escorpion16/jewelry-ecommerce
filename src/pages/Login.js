import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import jewelryVideo from "../videos/arab.mp4";

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
    <div className={styles.wrapperLogin}>
      <video autoPlay loop muted className={styles.jewelryVideo}>
        <source src={jewelryVideo} type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit(submit)} className={styles.containerLogin}>
        <h2>Anise Jewelry</h2>

        <div className={styles.testData}>
          <div>Test data</div>
          <div>email: admin@admin.com</div>
          <div>password: root</div>
        </div>

        <div className={styles.inputForm}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} required />
        </div>

        <div className={styles.inputForm}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            required
          />
        </div>
        {loginError}
        <button className={styles.btnLogin}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
