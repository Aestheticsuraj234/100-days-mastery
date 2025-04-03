import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"


// const button = React.createElement("button" , null , "Click me")

const root = document.getElementById("root")

createRoot(root).render(
  //react fragment 
  <BrowserRouter>
 <App/>
  </BrowserRouter>
)