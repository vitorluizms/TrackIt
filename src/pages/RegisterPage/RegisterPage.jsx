import { LineWave } from "react-loader-spinner";
import logo from "../../assets/Logo_PNG.png";
import { Forms, Container } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import urlBase from "../../urls";
import UserContext from "../../context/UserContext";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  function register(e) {
    e.preventDefault();
    const body = {
      email: email,
      name: name,
      image: photo,
      password: password,
    };
    axios
      .post(`${urlBase}/auth/sign-up`, body)
      .then(() => {
        navigate("/");
      })
      .catch((response) => alert(response.response.data.message));
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Forms onSubmit={register}>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          id="name"
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          id="photo"
          type="text"
          placeholder="foto"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <button>Cadastrar</button>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Forms>
    </Container>
  );
}
