import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/userAuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/brecho-solidario/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/brecho-solidario/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-login">
          <form onSubmit={handleSubmit} className="login-form">
            <span className="login-form-title"> Bem vindo ao Brechó Solidário</span>
            <br></br>
            <div className="wrap-input">
              <span>E-mail</span>
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="wrap-input">
              <span>Senha</span>
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link className="txt2" to="/brecho-solidario/signup">
                Criar conta.
              </Link>
            </div>
          </form>
          <div>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
