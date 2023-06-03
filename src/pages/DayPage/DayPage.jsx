import NavBar from "../../Navbar";
import SideBar from "../../Sidebar";
import { Container } from "../HabitsPage/style";
import { Content } from "./style";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import urlBase from "../../urls";
import axios from "axios";
import HabitComponent from "./Habit";

export default function Day() {
  const { token } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [finished, setFinished] = useState(0);
  const currentDate = dayjs().locale("pt-br").format("dddd, DD/MM");
  const UpperCaseDate =
    currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  useEffect(() => {
    axios
      .get(`${urlBase}/habits/today`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  let counter = finished;
  const value = habits.find((element) => {
    if (element.done === true) {
      counter += 1;
    }
  });
  let percentage = ((counter / habits.length) * 100);

  function checkHabit(id, done) {
    const bodyy = {};

    if (done === false) {
      axios
        .post(`${urlBase}/habits/${id}/check`, bodyy, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(getHabit)
        .catch((response) => alert(response.response.data.message));
    }
    if (done === true) {
      axios
        .post(`${urlBase}/habits/${id}/uncheck`, bodyy, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(getHabit)
        .catch((response) => {
          alert(response.response.data.message);
        });
    }
  }

  function getHabit() {
    axios
      .get(`${urlBase}/habits/today`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((response) => {
        alert(response.response.data.message);
      });
  }

  return (
    <Container>
      <NavBar />
      <Content counter={counter}>
        <div>
          <h1>{UpperCaseDate}</h1>
          <p>
            {counter === 0
              ? "Nenhum hábito concluído ainda"
              : `${percentage}% dos hábitos concluídos`}
          </p>
        </div>
        {habits.map((habit) => (
          <HabitComponent
            habit={habit}
            count={counter}
            checkHabit={checkHabit}
            key={habit.id}
          />
        ))}
      </Content>
      <SideBar />
    </Container>
  );
}
