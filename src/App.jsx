import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
