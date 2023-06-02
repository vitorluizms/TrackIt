import { useState } from "react";
import styled from "styled-components";

export default function ButtonDay(props) {
  const { day } = props;
  const [selected, setSelected] = useState(false);

  function changeButton() {
    console.log('oi')
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }
  return (
    <Weekday onClick={changeButton} selected={selected}>
      {day}
    </Weekday>
  );
}

const Weekday = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.selected === true ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: ${props => props.selected === true ? '#FFFFFF' : '#DBDBDB'};
`;
