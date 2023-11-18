import React, { useEffect, useState } from "react";
import "./Login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    role: false,
  });

  const [valuesLogin, setValuesLogin] = useState({
    email: "",
    password: "",
  });

  function handleSubmitRegister(evt) {
    evt.preventDefault();
    values.role = values.role ? "provider" : "user";
    fetch("http://localhost:3030/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        setUser(values);
        navigate("/profile");
      } else {
        alert("Error al crear usuario");
      }
    });
  }

  function handleSubmitLogin(evt) {
    evt.preventDefault();
    fetch("http://localhost:3030/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valuesLogin),
    }).then((res) => {
      if (res.ok) {
        setUser(values);
        navigate("/profile");
      } else {
        alert("Error al iniciar sesión");
      }
    });
  }

  function handleChangeRegister(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  }

  function handleChangeLogin(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...valuesLogin,
      [name]: value,
    };
    setValuesLogin(newValues);
  }
  return (
    <div className="login-view">
      <Navbar />
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form onSubmit={handleSubmitLogin}>
            <label for="chk" aria-hidden="true">
              Inicia Sesión
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={valuesLogin.email}
              onChange={handleChangeLogin}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={valuesLogin.password}
              onChange={handleChangeLogin}
              required
            />
            <button type="submit">Ingresar</button>
            <a className="fgt-pwd" href="/forgotpwd">
              Olvidaste tu Contraseña?
            </a>
          </form>
        </div>

        <div className="signup">
          <form onSubmit={handleSubmitRegister}>
            <label for="chk" aria-hidden="true">
              Registrate
            </label>
            {/* <label htmlFor="username" hidden>Email</label> */}
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              value={values.name}
              onChange={handleChangeRegister}
            />
            <input
              type="text"
              name="surname"
              placeholder="Apellido"
              required
              value={values.surname}
              onChange={handleChangeRegister}
            />
            {/* <label htmlFor="email" style="display: none">Email</label> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={handleChangeRegister}
            />
            {/* <label htmlFor="password" hidden>Email</label> */}
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
              value={values.password}
              onChange={handleChangeRegister}
              style={{ marginBottom: "10px" }}
            />
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                name="role"
                value={values.role}
                onChange={handleChangeRegister}
                style={{ width: "15px", height: "15px", margin: "auto" }}
              />
              <p style={{ margin: "auto" }}>Quieres publicar servicios?</p>
            </div>
            <button type="submit">Creá tu cuenta!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
