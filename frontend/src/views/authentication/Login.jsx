import React from 'react'
import "./Login.css"
import Navbar from '../../components/navbar/Navbar'

const Login = () => {
  return (
    <div className='login-view'>
      <Navbar/>
      <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true"/>

        <div className="login">
        <form>
            <label for="chk" aria-hidden="true">Inicia Sesión</label>
            <input type="email" name="email" placeholder="Email" required=""/>
            <input type="password" name="pswd" placeholder="Contraseña" required=""/>
            <button>Ingresar</button>
            <a className='fgt-pwd' href="/forgotpwd">Olvidaste tu Contraseña?</a>
          </form>

        </div>

        <div className="signup">
          <form>
            <label for="chk" aria-hidden="true">Registrate</label>
            <input type="text" name="txt" placeholder="Usuario" required=""/>
            <input type="email" name="email" placeholder="Email" required=""/>
            <input type="password" name="pswd" placeholder="Contraseña" required=""/>
            <button>Creá tu cuenta!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

