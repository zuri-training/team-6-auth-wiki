import { createContext, useContext, useState, useReducer } from "react";
import { initialState, reducer } from "../../store/reducer/index";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [user, setUser] = useState(null)
    const [regUser, setRegUser] = useState({})
    const register = (user) => {
        setUser(regUser)
    }
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout,  state,
        dispatch, regUser }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}