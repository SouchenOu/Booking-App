import { createContext, useContext, useEffect, useState } from "react";

const AuthenticationContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    useEffect(()=>{
        if(storedData){
            console.log("storedData", storedData);
            const {userToken, user} = storedData;
            console.log("userToken", userToken);
            console.log("user-->", user);
            
            setToken(userToken);
            setUserData(user);
            setIsAuthenticated(true);
        }
    },[]);

    const login = (newToken, newData) =>{
        localStorage.setItem('user_data', JSON.stringify({userToken : newToken, user : newData}));

        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
    };

    const logout = () =>{
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
    }

    return <AuthenticationContext.Provider value={{token, isAuthenticated, userData,login, logout}}>{children}</AuthenticationContext.Provider>

};

export const useAuth = () =>useContext(AuthenticationContext)