import check from "../../assets/check.svg";
import { Habit, ContainerHabit } from "./style";

export default function HabitComponent(props) {
  const { habit, count, checkHabit } = props;
  const UpperCaseHabit =
    habit.name.charAt(0).toUpperCase() + habit.name.slice(1);

  return (
    <Habit done={habit.done} count={count} data-test="today-habit-container">
      <ContainerHabit done={habit.done} highest={habit.highestSequence} current={habit.currentSequence}>
        <p data-test="today-habit-name">{UpperCaseHabit}</p>
        <div>
          <div>
            <h2 data-test="today-habit-sequence">
              Sequência atual:{" "}
              <strong>
                {habit.currentSequence === 1
                  ? "1 dia"
                  : `${habit.currentSequence} dias`}
              </strong>
            </h2>
          </div>
          <div>
            <h2 data-test="today-habit-record">
              Seu record:{" "}
              <span>
                {habit.highestSequence === 1
                  ? "1 dia"
                  : `${habit.highestSequence} dias`}
              </span>
            </h2>
          </div>
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
