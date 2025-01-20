import styles from "./App.css";
// Pages
import Home from "@pages/Home/Home";
import SearchResults from "@pages/SearchResults/SearchResults";
import HostDashboard from "@pages/Dashboard/HostDashboard";

// Components
import Menu from "@components/Menu/Menu";
import Navbar from "@components/Navbar/Navbar";
import Login from "@components/Login/Login";
import SignupAlternate from "@components/Signup/SignupAlternate";
import Signup from "@components/Signup/Signup";

// Router-dom
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "@contexts/AuthProvider";
import ProtectedRoutes from "@contexts/ProtectedRoutes";

const App = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className="pt-[10vh]">
        <Menu />
        <Login />
        <Signup />
        <SignupAlternate />
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/search-results" element={<SearchResults />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/host-dashboard" element={<HostDashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
