import { createContext, useContext, useState } from "react";

export const authContext = createContext(null)


export const useAuthContext = () =>{
    return useContext(authContext)
}

export const AuthContextProvider = ({children}) =>{
    const [authUser,setAuthUser] = useState(localStorage.getItem("chat-app")||null)
     return <authContext.Provider value={{authUser,setAuthUser}}>
        {children}
        </authContext.Provider>
}