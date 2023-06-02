
import Home from "./pages/HomePage/HomePage";
import Register from "./pages/RegisterPage/RegisterPage";
import Habits from "./pages/HabitsPage/HabitsPage";
import Day from "./pages/DayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Day />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

