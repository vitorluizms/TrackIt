import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/HomePage";
import Register from "./pages/RegisterPage/RegisterPage";
import Habits from "./pages/HabitsPage/HabitsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

