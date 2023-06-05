import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function SideBar() {
  const { percentage } = useContext(UserContext);

  return (
    <Sidebar data-test="menu">
      <Link to={"/habitos"} style={{ textDecoration: "none" }}>
        <p data-test="habit-link">Hábitos</p>
      </Link>
      <ContainerProgress>
        <Link to={"/hoje"}>
          <CircularProgressbar
            value={percentage}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              textSize: "18px",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
            data-test="today-link"
          />
        </Link>
      </ContainerProgress>
      <Link to={"/historico"} style={{ textDecoration: "none" }}>
        <p data-test="history-link">Histórico</p>
      </Link>
    </Sidebar>
  );
}

const Sidebar = styled.div`
  width: 100%;
  height: 70px;
  gap: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  bottom: 0;
  overflow: visible;

  background-color: #ffffff;

  p {
    font-family: "Lexend D";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
`;

const ContainerProgress = styled.div`
  display: flex;
  justify-content: center;
  width: 91px;
  height: 91px;

  margin-bottom: 50px;
  /* padding-right: 30px; */
`;
