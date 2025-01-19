import styles from "./App.css";
import Home from "@pages/Home";
import Menu from "@components/Menu/Menu";
import Navbar from "@components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "@components/Login/Login";
import SignupAlternate from "@components/Signup/SignupAlternate";
import Signup from "@components/Signup/Signup";
import { AuthProvider } from "@contexts/AuthProvider";
import ProtectedRoutes from "@contexts/ProtectedRoutes";
import HostDashboard from "@components/Dashboard/HostDashboard";
import SearchResults from "@components/SearchResults/SearchResults";

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

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/results" element={<SearchResults />} />
            <Route path="/host-dashboard" element={<HostDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
