import check from "../../assets/check.svg";
import { Habit, ContainerHabit } from "./style";

export default function HabitComponent(props) {
  const { habit, count, checkHabit } = props;
  const UpperCaseHabit =
    habit.name.charAt(0).toUpperCase() + habit.name.slice(1);

  return (
    <Habit done={habit.done} count={count} data-test="today-habit-container">
      <ContainerHabit done={habit.done}>
        <p data-test="today-habit-name">{UpperCaseHabit}</p>
        <div>
          <strong data-test="today-habit-sequence">
            Sequência atual:{" "}
            <span>
              {habit.currentSequence === 1
                ? "1 dia"
                : `${habit.currentSequence} dias`}
            </span>
          </strong>
          <strong data-test="today-habit-record">
            Seu record:{" "}
            <span>
              {habit.highestSequence === 1
                ? "1 dia"
                : `${habit.highestSequence} dias`}
            </span>
          </strong>
        </div>
      </ContainerHabit>
      <img
        src={check}
        alt="check"
        onClick={() => checkHabit(habit.id, habit.done)}
        data-test="today-habit-check-btn"
      />
    </Habit>
  );
}
