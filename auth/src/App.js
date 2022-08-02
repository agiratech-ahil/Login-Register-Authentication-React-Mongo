import "./App.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { Route, Routes } from "react-router-dom";
import Protected from "./Auth/Protected";
import Home from "./Auth/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/*" element={<Protected component={Home} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
