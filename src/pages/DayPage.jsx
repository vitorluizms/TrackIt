import styled from "styled-components";
import NavBar from "../Navbar";
import SideBar from "../Sidebar";
import { Container} from "./HabitsPage/style";
import { useState } from "react";

export default function Day() {
  const [count, setCount] = useState(1);

  return (
    <Container>
      <NavBar />
      <Content>
        <div>
          <h1>Segunda-feira, 17/05</h1>
          <p>
            {count === 0
              ? "Nenhum hábito concluído ainda"
              : "100% dos hábitos concluídos"}
          </p>
        </div>
        <Habit count={count}>
          <ContainerHabit>
            <p>Hábito 1</p>
            <div>
              <h2>
                Sequência atual: <span>{count === 0 ? "0 dias" : "1 dia"}</span>
              </h2>
              <h2>
                Sequência atual: <span>{count === 0 ? "0 dias" : "1 dia"}</span>
              </h2>
            </div>
          </ContainerHabit>
        </Habit>
      </Content>
      <SideBar />
    </Container>
  );
}

const ContainerHabit = styled.div`
  width: 90%;
  height: 90%;
`;

const Content = styled.div`
  height: 100%;
  margin: 98px 3% 70px 3%;

  display: flex;
  flex-direction: column;
  gap: 25px;
  div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;

    h1 {
      font-family: "Lexend Deca", sans-serif;
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;

      color: #126ba5;
    }

    img {
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;

      background: #52b6ff;
      border-radius: 5px;
      border: 12px solid #52b6ff;

      &:hover {
        cursor: pointer;
        background: #4169e1;
        border: 12px solid #4169e1;
      }
    }
  }

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    word-break: break-word;

    color: #666666;
  }
`;

const Habit = styled.div`
  width: 100%;
  height: 91px;
  gap: 5px;

  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  div:nth-child(2) {
    width: 234px;
    height: 30px;
    margin-left: 11px;
    display: flex;
  }
  div:nth-child(5) {
    display: flex;  
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    margin: 10px 0 0px 11px;
    color: #666666;
  }
  h2 {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    margin: 0px 0 0px 11px;
    color: #666666;
  }
  span {
    color: ${(props) => (props.count === 0 ? "#666666" : "#8FC549")};
  }
`;
