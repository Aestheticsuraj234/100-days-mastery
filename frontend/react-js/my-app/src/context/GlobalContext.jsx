import { createContext, useState } from "react";

export const GlobalContext = createContext();


export const GlobalProvider = ({children})=>{

    const [username, setUsername] = useState("Akash")
    const [age, setAge] = useState(20)




    return (
        <GlobalContext.Provider value={{
            username, setUsername , age
        }}>
            {children}
        </GlobalContext.Provider>   
    )
}