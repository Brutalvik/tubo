import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@firebaselocal/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = async (user) => {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setIsLoading(false);
  };

  const value = {
    currentUser,
    userLoggedIn,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      (!loading && children)
    </AuthContext.Provider>
  );
};
