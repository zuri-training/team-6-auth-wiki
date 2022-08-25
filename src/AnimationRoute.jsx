import Dashboard from "./components/Dashboard/Dashboard";
import Landing_Page from "./components/Landing_page/HomePage";
import AboutUs from "./components/Landing_page/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import PHP_Board from "./components/Dashboard/PHP_Board";
import Python_Board from "./components/Dashboard/Python_Board";
import JavaScript_Board from "./components/Dashboard/JavaScript_Board";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { RequireAuth } from "./components/auth/RequireAuth";
import GetStarted from "./components/Dashboard/GetStarted";
import Requirements from "./components/Dashboard/Requirements";
import Troubleshooting from "./components/Dashboard/Troubleshooting";
import PersistLogin from "./components/auth/PersistLogin";
import {AnimatePresence} from 'framer-motion'

const AnimationRoute = () => {
    const location = useLocation()
    return (
        <AnimatePresence>

        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing_Page />} />
      <Route element={<PersistLogin />}>
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
      </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
          </AnimatePresence>
  )
}

export default AnimationRoute