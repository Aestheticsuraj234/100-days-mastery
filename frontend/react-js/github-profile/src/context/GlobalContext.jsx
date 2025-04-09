import { createContext, useState } from "react";

export const GlobalContext = createContext();


const GlobalProvider = ({children}) => {
    const [githubData , setGithubData] = useState(null)
    const [loading , setLoading] = useState(false)
    return (
        <GlobalContext.Provider value={{
            githubData,
            setGithubData,
            loading,
            setLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider