import plus from "../../assets/plus.svg";
import NavBar from "../../Navbar";
import styled from "styled-components";
import SideBar from "../../Sidebar";
import ButtonDay from "./Days";
import { Container, Content, AddHabit, Habit } from "./style";
import { useState } from "react";

export default function Habits() {
  const days = [
    { weekDay: "D", name: "Domingo" },
    { weekDay: "S", name: "Segunda" },
    { weekDay: "T", name: "Terça" },
    { weekDay: "Q", name: "Quarta" },
    { weekDay: "Q", name: "Quinta" },
    { weekDay: "S", name: "Sexta" },
    { weekDay: "S", name: "Sábado" },
  ];
  const [addHab, setAdd] = useState(false);

  function addHabit() {
    if (addHab === false) {
      setAdd(true);
    } else {
      setAdd(false);
    }
    console.log(addHab);
  }

  return (
    <Container>
      <NavBar />
      <Content>
        <div>
          <h1>Meus Hábitos</h1>
          <img onClick={addHabit} src={plus} alt="" />
        </div>
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
        <Habit>
          <p>Hábito 1</p>
          <div>
            {days.map((day) => (
              <ButtonDay day={day.weekDay} key={day.name} />
            ))}
          </div>
        </Habit>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Content>
      <SideBar />
    </Container>
  );
}
