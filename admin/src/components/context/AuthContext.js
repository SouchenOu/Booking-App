import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user : JSON.parse(localStorage.getItem("user")),
    loading : false,
    error : null,
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN_START" :
            return {
                user : null,
                loading : true,
                error : null,
            }
        case "LOGIN_SUCCESS" :
            return {
                user: action.payload,
                loading : false,
                error : null,
            }
        case "LOGIN_FAILURE" :
            return {
                user : null,
                loading : false,
                error : action.payload,

            }
        case "LOGOUT" :
            return {
                user : null,
                loading : false,
                error : null,
            }
            
        default: 
            return state

    }
}

//AuthContextProvider is a component that wraps its children with AuthContext.Provider.

export const AuthContextProvider = ({children}) =>{

    //useReducer initializes the state and provides a dispatch function to trigger actions.
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));

    },)
    return (
        /*The Provider component makes the user, loading, error, and dispatch values available to any nested components that consume the context.*/ 
        <AuthContext.Provider value={{user : state.user, loading : state.loading, error : state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
        
    )
}