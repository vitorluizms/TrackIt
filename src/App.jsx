import Home from "./pages/HomePage/HomePage";
import Register from "./pages/RegisterPage/RegisterPage";
import Habits from "./pages/HabitsPage/HabitsPage";
import Day from "./pages/DayPage/DayPage";
import Historic from "./pages/Historic/HistoricPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

export default function App() {
  const [urlImage, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <UserContext.Provider
        value={{ urlImage, token, setUrl, setToken, percentage, setPercentage }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Day />} />
            <Route path="/historico" element={<Historic/>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
