import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
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
    justify-content: space-between;
    align-items: center;

    span {
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

const AddHabit = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.addHabit === false ? "none" : "")};
  background: #ffffff;
  border-radius: 5px;

  input {
    width: calc(100% - 36px);
    height: 40px;
    margin: 10px 0 10px 11px;
    padding-left: 11px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: #dbdbdb;
  }

  div:nth-child(2) {
    width: 234px;
    height: 30px;
    margin-left: 11px;
    display: flex;
  }

  div:nth-child(3) {
    height: 35px;
    margin-right: 16px;
    margin-top: 32px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      color: #52b6ff;
      margin-right: 23px;
    }

    button {
      width: 84px;
      height: 35px;

      background: #52b6ff;
      border-radius: 5px;
      border: none;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;

      color: #ffffff;
    }
  }
`;

const Habit = styled.div`
  width: 100%;
  height: 91px;
  gap: 11px;

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
  p {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    margin: 10px 0 0px 11px;
    color: #666666;
  }
`;

export { Container, Content, AddHabit, Habit };
