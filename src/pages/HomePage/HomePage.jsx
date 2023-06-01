import React from "react";
import logo from "../../assets/Logo_PNG.png";
import { Link } from "react-router-dom";
import { Container, Form } from "./style";

export default function Home() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <input id="email" type="text" placeholder="email" required />
        <input id="password" type="text" placeholder="senha" required />
        <Link to={"/habitos"}>
          <button>Entrar</button>
        </Link>
      </Form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
