import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Login from "../src/pages/Login/Login"
import Register from "../src/pages/Register/Register"
import Meditation from "../src/pages/Meditation/Meditation"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="meditation" element={<Meditation />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
