import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"


// const button = React.createElement("button" , null , "Click me")

const root = document.getElementById("root")

createRoot(root).render(
  //react fragment 
  <GlobalProvider>
      <BrowserRouter>
 <App/>
  </BrowserRouter>
  </GlobalProvider>

)