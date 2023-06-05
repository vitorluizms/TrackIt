import NavBar from "../../Navbar";
import SideBar from "../../Sidebar";
import { Container } from "../HabitsPage/style";
import { Content } from "./style";

export default function Historic() {
  return (
    <Container>
      <NavBar />
      <Content>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Content>
      <SideBar />
    </Container>
  );
}
