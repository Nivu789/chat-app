import { createContext, useContext, useState } from "react";

export const authContext = createContext(null)


export const useAuthContext = () =>{
    return useContext(authContext)
}

export const AuthContextProvider = ({children}) =>{
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-app"))||null)
    console.log("Auth Context",authUser)
     return <authContext.Provider value={{authUser,setAuthUser}}>
        {children}
        </authContext.Provider>
}