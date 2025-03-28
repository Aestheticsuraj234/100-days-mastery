import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"

// const button = React.createElement("button" , null , "Click me")

const root = document.getElementById("root")

createRoot(root).render(
  //react fragment 
  <>
 <App/>
  </>
)