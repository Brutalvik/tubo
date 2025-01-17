import styles from "./App.css";
import Home from "@pages/Home";
import Menu from "@components/Menu/Menu";
import Navbar from "@components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "@components/Login/Login";

const App = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Menu />
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
