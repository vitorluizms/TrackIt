import plus from "../../assets/plus.svg";
import NavBar from "../../Navbar";
import SideBar from "../../Sidebar";
import ButtonDay from "./Days";
import Habit from "./HabitComponent";
import {
  Container,
  Content,
  AddHabit,
  ContainerHabit,
  ContainerLoader,
} from "./style";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import urlBase from "../../urls";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function Habits() {
  const { token } = useContext(UserContext);
  const [started, setStarted] = useState(false);
  const [addHab, setAdd] = useState(false);
  const [habits, setHabits] = useState([]);
  const [arrayDays, setArrayDays] = useState([]);
  const [nameHabit, setName] = useState("");
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get(`${urlBase}/habits`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
        setStarted(true);
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

  function postHabit(e) {
    e.preventDefault();
    const body = {
      name: nameHabit,
      days: arrayDays,
    };
    setState(true);

    axios
      .post(`${urlBase}/habits`, body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAdd(false);
        setName("");
        let array = [];
        setArrayDays(array);
      })
      .catch((response) => {
        alert(response.response.data.message);
      })
      .finally(() => {
        setState(false);
        getHabits();
      });
  }

  function deleteHabit(id) {
    axios
      .delete(`${urlBase}/habits/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then()
      .catch((response) => alert(response.response.data.message))
      .finally(() => getHabits());
  }

  function getHabits() {
    axios
      .get(`${urlBase}/habits`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits(response.data);
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
        <Content>
          <ContainerHabit>
            <h1>Meus Hábitos</h1>
            <img onClick={addHabit} src={plus} alt="plus" />
          </ContainerHabit>
          <AddHabit addHabit={addHab} onSubmit={postHabit}>
            <input
              type="text"
              id="nome do hábito"
              placeholder="nome do hábito"
              value={nameHabit}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={state}
            />
            <div>
              {days.map((day) => (
                <ButtonDay
                  day={day.weekDay}
                  key={day.name}
                  arrayDays={arrayDays}
                  setDays={setArrayDays}
                  dayId={day.name}
                  state={state}
                />
              ))}
            </div>
            <div>
              <p>Cancelar</p>
              <button>Salvar</button>
            </div>
          </AddHabit>
          {habits.map((habit) => (
            <Habit
              days={days}
              key={habit.id}
              habit={habit}
              deleteHabit={deleteHabit}
            />
          ))}
          <p>
            {habits.length === 0
              ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
              : ""}
          </p>
        </Content>
        <SideBar />
      </Container>
    );
  }
}
