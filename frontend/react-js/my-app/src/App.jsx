import { useState } from "react";

function App() {
  const [count , setCount] = useState(0)
 const [favToy , setFavToy] = useState("Lego")


 function alertMe(event){
  console.log(event)
  alert("Hello")
 }

  return (
    <div>
      {/* <h1>Hello! {count}</h1>
      <div style={{display:"flex",gap:"10px"}}>IronMan

      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div> */}
      {/* <div>
        Your Fav Toy is {favToy}
      </div>

      <button onClick={()=>setFavToy("")}>IronMan</button>
      <button onClick={()=>setFavToy("HotWheels")}>HotWheels</button> */}


      <button onClick={alertMe}>
        Alert
      </button>
      
    </div>
  );
}

export default App;
