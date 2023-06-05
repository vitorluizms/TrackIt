import styled from "styled-components";

const Content = styled.div`
  height: 100%;
  margin: 98px 3% 70px 3%;

  display: flex;
  flex-direction: column;
  gap: 25px;

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

  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    word-break: break-word;

    color: #666666;
  }
`;

export { Content };
