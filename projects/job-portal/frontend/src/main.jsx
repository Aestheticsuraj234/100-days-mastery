import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CompanyProvider } from "./context/CompanyContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
   <AuthProvider>
    <CompanyProvider>
   
      <App />
         
    </CompanyProvider>
   </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
