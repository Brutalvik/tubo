import styles from "./App.css";
//Pages
import Home from "@pages/Home/Home";
import Results from "@pages/Results/Results";
import HostDashboard from "@pages/Dashboard/HostDashboard";

//Components
import Menu from "@components/Menu/Menu";
import Navbar from "@components/Navbar/Navbar";
import Login from "@components/Login/Login";
import SignupAlternate from "@components/Signup/SignupAlternate";
import Signup from "@components/Signup/Signup";
// import SearchResults from "@components/SearchResults/SearchResults";

//Router-dom
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "@contexts/AuthProvider";
import ProtectedRoutes from "@contexts/ProtectedRoutes";

const App = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Menu />
      <Login />
      <Signup />
      <SignupAlternate />
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            {/* <Route path="/results" element={<SearchResults />} /> */}
            <Route path="/host-dashboard" element={<HostDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
