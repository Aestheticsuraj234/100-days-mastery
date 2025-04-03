import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route
          path={"/userprofile/:userId"}
          element={
            <ProtectedRoutes>
              <UserProfile />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

// import React from 'react'

// import NameList from './components/NameList'
// import Forms from './components/Forms'

// const App = () => {
//   const nameList = ["Suraj" , "Karan" , "Jhon Singh" , "Jhonny Depp"]
//   return (
//     <div>
//       {/* <UserGreeting isLoggedIn={true}/> */}
//       {/* <Notification notficationMessage={""}/>
//       <StatusMessage status={"success"}/> */}

//       {/* <NameList name={"Suraj"} />
//       <NameList name={"Karan"} />
//       <NameList name={"Jhon Singh"} />
//       <NameList name={"Jhonny Depp"} /> */}
//       {/* {
//         nameList.map((name , index)=>(<NameList key={index} name={name}/>))
//       } */}

//       <Forms/>

//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
// //   const [count , setCount] = useState(0)
// //  const [favToy , setFavToy] = useState("Lego")

// //  function alertMe(event){
// //   console.log(event)
// //   alert("Hello")
// //  }

//   return (
//     <div>
//       {/* <h1>Hello! {count}</h1>
//       <div style={{display:"flex",gap:"10px"}}>IronMan

//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       </div> */}
//       {/* <div>
//         Your Fav Toy is {favToy}
//       </div>

//       <button onClick={()=>setFavToy("")}>IronMan</button>
//       <button onClick={()=>setFavToy("HotWheels")}>HotWheels</button> */}

//       {/* <button onClick={alertMe}>
//         Alert
//       </button> */}

//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
// //   const [count , setCount] = useState(0)
// //  const [favToy , setFavToy] = useState("Lego")

// //  function alertMe(event){
// //   console.log(event)
// //   alert("Hello")
// //  }

//   return (
//     <div>
//       {/* <h1>Hello! {count}</h1>
//       <div style={{display:"flex",gap:"10px"}}>IronMan

//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//       </div> */}
//       {/* <div>
//         Your Fav Toy is {favToy}
//       </div>

//       <button onClick={()=>setFavToy("")}>IronMan</button>
//       <button onClick={()=>setFavToy("HotWheels")}>HotWheels</button> */}

//       {/* <button onClick={alertMe}>
//         Alert
//       </button> */}

//     </div>
//   );
// }

// export default App;
