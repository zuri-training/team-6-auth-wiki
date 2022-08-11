import React, { createContext, useReducer } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing_Page from "./components/Landing_page/HomePage";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Landing_Page />} />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              {" "}
              <Dashboard />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="getstarted"
          element={
            <RequireAuth>
              {" "}
              <GetStarted />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="requirements"
          element={
            <RequireAuth>
              {" "}
              <Requirements />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="troubleshooting"
          element={
            <RequireAuth>
              {" "}
              <Troubleshooting />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="php_board"
          element={
            <RequireAuth>
              <PHP_Board />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="python_board"
          element={
            <RequireAuth>
              <Python_Board />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="javascript_board"
          element={
            <RequireAuth>
              {" "}
              <JavaScript_Board />{" "}
            </RequireAuth>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
