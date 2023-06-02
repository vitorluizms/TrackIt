import { LineWave } from "react-loader-spinner";
import logo from "../../assets/Logo_PNG.png";
import { Forms, Container } from "./style";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Forms>
        <input id="email" type="text" placeholder="email" />
        <input id="password" type="text" placeholder="senha" />
        <input id="name" type="text" placeholder="nome" />
        <input id="photo" type="text" placeholder="foto" />
        <button>Cadastrar</button>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Forms>
    </Container>
  );
}
