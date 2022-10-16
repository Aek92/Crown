import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumenFromAuth,
} from "../utils/firbase/firebase.utils";

//Actual value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currenUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log(user);
        createUserDocumenFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
