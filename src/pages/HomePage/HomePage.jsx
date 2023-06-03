import React from "react";
import logo from "../../assets/Logo_PNG.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Container, Form } from "./style";
import { useState } from "react";
import urlBase from "../../urls";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Home() {
  const { setUrl, token, setToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    setState(true);
    axios
      .post(`${urlBase}/auth/login`, body)
      .then((response) => {
        setUrl(response.data.image);
        setToken(response.data.token);
        navigate("/hoje");
      })
      .catch((response) => {
        alert(response.response.data.message);
        setState(false);
      });
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={login}>
        <input
          data-test="email-input"
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={state}
        />
        <input
          data-test="password-input"
          id="password"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={state}
        />
        <button disabled={state} data-test="login-btn">
          {state === false ? (
            "Entrar"
          ) : (
            <Vortex
              visible={true}
              height="40"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          )}
        </button>
      </Form>
      <Link to={"/cadastro"} data-test="signup-link">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
