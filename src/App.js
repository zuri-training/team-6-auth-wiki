import React, { createContext, useReducer } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing_Page from "./components/Landing_page/HomePage";
import AboutUs from "./components/Landing_page/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import PHP_Board from "./components/Dashboard/PHP_Board";
import Python_Board from "./components/Dashboard/Python_Board";
import JavaScript_Board from "./components/Dashboard/JavaScript_Board";
import Login from "./components/auth/Login";
// import { initialState, reducer } from "./store/reducer";
import Signup from "./components/auth/Signup";
import { AuthProvider } from "./components/auth/auth";
import { RequireAuth } from "./components/auth/RequireAuth";
import GetStarted from "./components/Dashboard/GetStarted";
import Requirements from "./components/Dashboard/Requirements";
import Troubleshooting from "./components/Dashboard/Troubleshooting";
import PersistLogin from "./components/auth/PersistLogin";
import AnimationRoute from "./AnimationRoute";
// export const AuthContext = createContext();

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <AuthContext.Provider
    //   value={{
    //     state,
    //     dispatch
    //   }}
    // >
    <AuthProvider>
      <AnimationRoute />
    </AuthProvider>
  );
};

export default App;
