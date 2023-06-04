import plus from "../../assets/plus.svg";
import NavBar from "../../Navbar";
import SideBar from "../../Sidebar";
import ButtonDay from "./Days";
import Habit from "./HabitComponent";
import { Container, Content, AddHabit, ContainerHabit } from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import urlBase from "../../urls";
import axios from "axios";

export default function Habits() {
  const { addHab, setAdd, token } = useContext(UserContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    axios
      .get(`${urlBase}/habits`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
        console.log(response.data);
      })
      .catch((response) => {
        alert(response.response.data.message);
      });
  }, []);

  const days = [
    { weekDay: "D", name: 0 },
    { weekDay: "S", name: 1 },
    { weekDay: "T", name: 2 },
    { weekDay: "Q", name: 3 },
    { weekDay: "Q", name: 4 },
    { weekDay: "S", name: 5 },
    { weekDay: "S", name: 6 },
  ];

  function addHabit() {
    if (addHab === false) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }

  return (
    <Container>
      <NavBar />
      <Content>
        <ContainerHabit>
          <h1>Meus Hábitos</h1>
          <img onClick={addHabit} src={plus} alt="plus" />
        </ContainerHabit>
        <AddHabit addHabit={addHab}>
          <input type="text" id="nome do hábito" placeholder="nome do hábito" />
          <div>
            {days.map((day) => (
              <ButtonDay day={day.weekDay} key={day.name} />
            ))}
          </div>
          <div>
            <p>Cancelar</p>
            <button>Salvar</button>
          </div>
        </AddHabit>
        {habits.map(habit => <Habit days={days} key={habit.id} habit={habit}/>)}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Content>
      <SideBar />
    </Container>
  );
}
