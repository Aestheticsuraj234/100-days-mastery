import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { BriefcaseBusiness } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserButton from "./UserButton";
const Navbar = () => {
    const {user:authUser} = useAuth()
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",

        "bg-white/90 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"} className="flex items-center space-x-2">
            <BriefcaseBusiness className="h-8 w-8 text-[#f08080]" />
            <span className="text-xl font-bold">JobPortal</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to={"/jobs"}
              className={
                "text-base font-medium text-gray-600 hover:text-[#f08080] transition-colors"
              }
            >
              Find Jobs
            </NavLink>
            <NavLink
              to={"/companies"}
              className={
                "text-base font-medium text-gray-600 hover:text-[#f08080] transition-colors"
              }
            >
              Companies
            </NavLink>
          </nav>
{
    authUser ? (<UserButton/>) :(   <div className="flex items-center space-x-4">
            <Link to={"/login"}>
              <Button variant="ghost">Login</Button>
            </Link>

            <Link to={"/signup"}>
              <Button className="bg-[#f08080] hover:bg-[#e57373] text-white">
                Sign Up
              </Button>
            </Link>
          </div>)
}
       
        </div>
      </div>
    </header>
  );
};

export default Navbar;
