import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="email" placeholder="Entrer your email"/>
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Entrer your email"/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
        
    </div>
  )
}
