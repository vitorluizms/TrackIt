import trash from "../../assets/dump.svg";
import ButtonDay from "./Days";
import { HabitContainer } from "./style";
import styled from "styled-components";

export default function Habit(props) {
  const { days, habit } = props;

  return (
    <HabitContainer>
      <div>
        <p>{habit.name}</p>
        <img src={trash} alt="trash" />
      </div>
      <div>
        {days.map((day) => (
          <DayButton key={day.name} day={day} days={habit.days} />
        ))}
      </div>
    </HabitContainer>
  );
}

function DayButton(props) {
  const { day, days } = props;
  return (
    <Weekday day={day} days={days}>
      {day.weekDay}
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

  background: ${(props) =>
    props.days.includes(props.day.name) ? "#CFCFCF" : "#FFFFFF"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: ${(props) =>
    props.days.includes(props.day.name) ? "#FFFFFF" : "#DBDBDB"};
`;

const ContainerHabit = styled.div`
  img {
    width: 13px;
    border: none;
    background: #ffffff;
    margin: 0px 0 0px 11px;
  }
`;
