import Home from "./pages/HomePage/HomePage";
import Register from "./pages/RegisterPage/RegisterPage";
import Habits from "./pages/HabitsPage/HabitsPage";
import Day from "./pages/DayPage/DayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

export default function App() {

  const [urlImage, setUrl] = useState('')
  const [token, setToken] = useState('')

  return (
    <>
      <UserContext.Provider value={{ urlImage, token, setUrl, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Day />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
