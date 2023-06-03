import logo from "../../assets/Logo_PNG.png";
import { Forms, Container } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import urlBase from "../../urls";
import { Vortex } from "react-loader-spinner";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [state, setState] = useState(false);

  function register(e) {
    e.preventDefault();
    const body = {
      email: email,
      name: name,
      image: photo,
      password: password,
    };
    setState(true);
    axios
      .post(`${urlBase}/auth/sign-up`, body)
      .then(() => {
        navigate("/");
      })
      .catch((response) => {
        alert(response.response.data.message);
        setState(false);
      });
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Forms onSubmit={register}>
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
        <input
          data-test="user-name-input"
          id="name"
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={state}
        />
        <input
          data-test="user-image-input"
          id="photo"
          type="text"
          placeholder="foto"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
          disabled={state}
        />
        <button disabled={state} data-test="signup-btn">
          {state === false ? (
            "Cadastrar"
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
        <Link to={"/"} data-test="login-link">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Forms>
    </Container>
  );
}
