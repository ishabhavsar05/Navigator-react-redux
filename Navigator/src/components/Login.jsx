// src/components/Login.js
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:"lightgray",width:"15%",padding:"100px",marginTop:"70px",marginBottom:"50px",marginLeft:"550px"}}>
      <h2>Login</h2>
      <input style={{height:"30px",width:"100%"}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br />
      <input style={{height:"30px",width:"100%"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br />
      <button style={{height:"30px",width:"100%",backgroundColor:"darkblue",color:"white"}} type="submit">Login</button>
    </form>
  );
}

export default Login;
