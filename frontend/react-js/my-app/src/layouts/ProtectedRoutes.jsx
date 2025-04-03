import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? (
        children
      ) : (
        <div>
          <Navigate to={"/login"}/>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoutes;
