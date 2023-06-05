import styled from "styled-components";

export default function ButtonDay(props) {
  const { day, arrayDays, setDays, dayId, state } = props;
  function changeButton(day) {
    let array = [...arrayDays];

    if (!array.includes(dayId)) {
        array.push(dayId)
        setDays(array)
    }
    else {
        array = array.filter((element) => element !== dayId)
        setDays(array)
    }
  }
  return (
    <Weekday type="button" onClick={changeButton} days={arrayDays} day={dayId} disabled={state}>
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

  background: ${(props) => (props.days.includes(props.day) === true ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: ${(props) => (props.days.includes(props.day) === true ? "#FFFFFF" : "#DBDBDB")};

  &:hover {
    cursor: pointer;
    color: #52b6ff;
    border: 1px solid #52b6ff;
  }
`;
