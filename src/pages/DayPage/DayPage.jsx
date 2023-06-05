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
import { TailSpin } from "react-loader-spinner";

export default function Day() {
  const { token, percentage, setPercentage } = useContext(UserContext);
  const [started, setStarted] = useState(false)
  const [habits, setHabits] = useState([]);
  const [counter, setCounter] = useState(0);
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
        let count = 0;
        let finished = 0;
        if (response.data.length !== 0) {
          response.data.find((element) => {
            if (element.done === true) {
              count += 1;
            }
          });
          setCounter(count);
          finished = (count / response.data.length) * 100;
          setPercentage(finished);
        }
        setStarted(true)
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

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
        let count = 0;
        let finished = 0;
        if (response.data.length !== 0) {
          response.data.find((element) => {
            if (element.done === true) {
              count += 1;
            }
          });
          setCounter(count);
          finished = (count / response.data.length) * 100;
          setPercentage(finished);
        }
      })
      .catch((response) => {
        alert(response.response.data.message);
      });
  }

  if (started === false) {
    return (
      <Container>
        <NavBar />
        <Content started={started}>
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Content>
        <SideBar />
      </Container>
    );
  }

  if (started === true) {
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
}
