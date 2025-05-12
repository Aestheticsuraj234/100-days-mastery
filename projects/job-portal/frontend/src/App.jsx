import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./layout/layout";
import { Toaster } from "sonner";

import { Loader2 } from "lucide-react";
import { useAuth } from "./context/AuthContext";
import AddCompanyPage from "./pages/AddCompanyPage";
import MyCompanyPage from "./pages/MyCompanyPage";
const App = () => {
 const {loading , user:authUser , checkAuth} = useAuth()

  useEffect(() => {
    checkAuth();
  }, []);


  console.log(authUser)

  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="*"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignupPage /> : <Navigate to="/" />}
          />

          <Route path="/add-company" element={<AddCompanyPage/>}/>
                    <Route path="/my-company" element={<MyCompanyPage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
