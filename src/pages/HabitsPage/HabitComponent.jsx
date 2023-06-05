import trash from "../../assets/dump.svg";
import { HabitContainer } from "./style";
import styled from "styled-components";

export default function Habit(props) {
  const { days, habit, deleteHabit } = props;

  return (
    <HabitContainer data-test="habit-container">
      <div>
        <p data-test="habit-name">{habit.name}</p>
        <img
          src={trash}
          alt="trash"
          onClick={() => {
            if (confirm("Você realmente quer apagar esse hábito?") === true) {
              deleteHabit(habit.id);
            }
          }}
          data-test="habit-delete-btn"
        />
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
    <Weekday day={day} days={days} data-test="habit-day">
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
