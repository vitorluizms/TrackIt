import React from "react";
import logo from "../../assets/Logo_PNG.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Container, Form } from "./style";
import { useState } from "react";
import urlBase from "../../urls";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

export default function Home() {
  const { setUrl, token, setToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${urlBase}/auth/login`, body)
      .then((response) => {
        setUrl(response.data.image);
        setToken(response.data.token);
        navigate("/hoje")
      })
      .catch((response) => alert(response.response.data.message));
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={login}>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Entrar</button>
      </Form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
