import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@firebaselocal/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

// Hook to access auth state
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({ ...user });
        setUserLoggedIn(true);
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
      }
      setIsLoading(false);
    });

    return unsubscribe; // Clean up the subscription
  }, []);

  const value = {
    currentUser,
    userLoggedIn,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}{" "}
      {/* Only render children when loading is complete */}
    </AuthContext.Provider>
  );
};
