import React from "react";
import "./Login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(values);
    navigate("/profile");
  }

  function handleChange(evt) {

    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }
  return (
    <div className="login-view">
      <Navbar />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form onSubmit={handleSubmit}>
            <label for="chk" aria-hidden="true">
              Inicia Sesión
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="pswd"
              placeholder="Contraseña"
              required
            />
            <button type="submit">Ingresar</button>
            <a className="fgt-pwd" href="/forgotpwd">
              Olvidaste tu Contraseña?
            </a>
          </form>
        </div>

        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label for="chk" aria-hidden="true">
              Registrate
            </label>
          {/* <label htmlFor="username" hidden>Email</label> */}
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              required
              value={values.username}
              onChange={handleChange}
            />
            {/* <label htmlFor="email" style="display: none">Email</label> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={handleChange}
            />
            {/* <label htmlFor="password" hidden>Email</label> */}
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
              value={values.password}
              onChange={handleChange}
            />
            <button type="submit">Creá tu cuenta!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
