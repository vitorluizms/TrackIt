import check from "../../assets/check.svg";
import { Habit, ContainerHabit } from "./style";

export default function HabitComponent(props) {

    const {habit, count, checkHabit} = props
    const UpperCaseHabit = habit.name.charAt(0).toUpperCase() + habit.name.slice(1);

  return (
    <Habit done={habit.done} count={count}>
      <ContainerHabit done={habit.done}>
        <p>{UpperCaseHabit}</p>
        <div>
          <strong>
            Sequência atual: <span>{habit.currentSequence === 1 ? '1 dia' : `${habit.currentSequence} dias`}</span>
          </strong>
          <strong>
            Seu record: <span>{habit.highestSequence === 1 ? '1 dia' : `${habit.highestSequence} dias`}</span>
          </strong>
        </div>
      </ContainerHabit>
      <img src={check} alt="check" onClick={() => checkHabit(habit.id, habit.done)}/>
    </Habit>
  );
}
