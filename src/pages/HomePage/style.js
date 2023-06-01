import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  img {
    width: 180px;
    margin-top: 60px;
  }

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
    margin-top: 25px;
  }
`;

const Form = styled.form`
  height: 135px;
  margin-top: 32px;
  gap: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 303px;
    height: 45px;
    padding-left: 11px;

    background: #ffffff;
    color: #dbdbdb;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    text-align: left;
  }
  button {
    width: 317px;
    height: 45px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
    background: #52b6ff;
    border-radius: 5px;
    border: none;
  }
`;

export {Container , Form};