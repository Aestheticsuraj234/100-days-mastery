import React from 'react'
import UserGreeting from './components/UserGreeting'
import Notification from './components/Notification'
import StatusMessage from './components/Status'
import NameList from './components/NameList'

const App = () => {
  const nameList = ["Suraj" , "Karan" , "Jhon Singh" , "Jhonny Depp"]
  return (
    <div>
      {/* <UserGreeting isLoggedIn={true}/> */}
      {/* <Notification notficationMessage={""}/>
      <StatusMessage status={"success"}/> */}
      
      {/* <NameList name={"Suraj"} />
      <NameList name={"Karan"} />
      <NameList name={"Jhon Singh"} />
      <NameList name={"Jhonny Depp"} /> */}
      {
        nameList.map((name , index)=>(<NameList key={index} name={name}/>)) 
      }

    </div>
  )
}

export default App














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
