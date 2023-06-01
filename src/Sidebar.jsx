import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function SideBar() {
  return (
    <Sidebar>
      <p>Hábitos</p>
      <ContainerProgress>
        <CircularProgressbar
          value={50}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            textSize: "18px",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </ContainerProgress>
      <p>Histórico</p>
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
