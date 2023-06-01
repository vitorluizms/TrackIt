import NavBar from "../../Navbar";
import styled from "styled-components";
import SideBar from "../../Sidebar";

export default function Habits() {
  return (
    <Container>
      <NavBar />
      <SideBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: gray;
`;
