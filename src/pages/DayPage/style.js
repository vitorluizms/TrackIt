import styled from "styled-components";

const ContainerHabit = styled.div`
  width: 90%;
  height: 90%;
  gap: 5px;

  display: flex;
  flex-direction: column;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    margin: 0px 0px 0px 11px;
    color: #666666;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  strong {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
  }
  span {
    color: ${(props) => (props.done === false ? "#666666" : "#8FC549")};
  }
`;

const Content = styled.div`
  height: ${(props) => (props.started === false ? "100vh" : "100%")};
  margin: 98px 3% 70px 3%;

  display: flex;
  flex-direction: column;
  gap: 25px;
  div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(props) =>
      props.started === false ? "center" : "space-between"};
    justify-content: center;
    margin-top: ${(props) => (props.started === false ? "30vh" : "0")};

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

    color: ${(props) => (props.counter === 0 ? "#666666" : "#8FC549")};
  }
`;

const Habit = styled.div`
  width: 100%;
  height: 91px;

  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  div:nth-child(2) {
    width: 234px;
    height: 30px;
    margin-left: 11px;
    display: flex;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    margin: 0px 0 0px 11px;
    color: #666666;
  }

  img {
    width: 55px;
    height: 55px;
    margin-right: 13px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => (props.done === true ? "#8fc549" : "#EBEBEB")};
    border-radius: 5px;
    border: 15px solid
      ${(props) => (props.done === true ? "#8fc549" : "#EBEBEB")};

    &:hover {
      cursor: pointer;
      background: ${(props) => (props.done === true ? "#6b9633" : "#A9A9A9")};
      border: 15px solid
        ${(props) => (props.done === true ? "#6b9633" : "#A9A9A9")};
    }
  }
`;

export { ContainerHabit, Content, Habit };
