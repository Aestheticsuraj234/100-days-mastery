import React, { Suspense, useEffect } from "react";
const LazyComponent = React.lazy(() => import("./components/LazyComponent"));
const App = () => {
  
  return (
    <div>
      <h1>React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;

// import React, { Suspense } from 'react'
// import { useMemo } from 'react';
// import { useState } from 'react';
// const LazyComponent = React.lazy(() => import('./components/LazyComponent'));
// const App = () => {
//   const [number, setNumber] = useState(5);
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount((prev) => prev + 1);
//         }}
//       >
//         Count: {count}
//       </button>
//       <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//       />
//       <ExpensiveCalculation number={number} />
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//     </div>
//   )
// }

// export default App

// const ExpensiveCalculation = ({ number }) => {
//   // Memoized calculation
//   const result = useMemo(() => {
//     console.log('Calculating factorial...');
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }, [number]);

//   return <div>Factorial of {number}: {result}</div>;
// };

// // import React, { memo, useState , useCallback } from "react";

// // const App = () => {
// //   const [count , setCount] = useState(0);

// //   const handleCount = useCallback(() => {
// //     setCount(count + 1);
// //   }, [count]);

// //   return (
// //     <div>
// //       <Button
// //         onClick={handleCount}
// //         label={`Increment Count: ${count}`}
// //       />
// //     </div>
// //   );
// // };

// // export default App;

// // const Button = memo(({ onClick, label }) => {
// //   console.log("Button rendered");
// //   return <button onClick={onClick}>{label}</button>;
// // });

// // // import React, { useState ,memo} from 'react';

// // // const App = () => {
// // //   const [count, setCount] = useState(0);
// // //   const [items, setItems] = useState([
// // //     { id: 1, name: 'Apple' },
// // //     { id: 2, name: 'Banana' },
// // //     { id: 3, name: 'Cherry' },
// // //   ]);

// // //   const addItem = () => {
// // //     const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
// // //     setItems((prevItems) => [...prevItems, newItem]);
// // //   }

// // //   return (
// // //     <div>
// // //      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
// // //      {/* <ChildComponent name="Akash" /> */}

// // //      <button onClick={addItem}>Add Item</button>
// // //      <List items={items} />
// // //     </div>
// // //   )
// // // }

// // // export default App

// // // // const ChildComponent = memo(({ name }) => {
// // // //   console.log('ChildComponent rendered');
// // // //   return <div>Hello, {name}!</div>;
// // // // })

// // // const ListItem = memo(({ item }) => {
// // //   console.log(`ListItem rendered for ${item.id}`);
// // //   return <li>{item.name}</li>;
// // // });

// // // const List = ({ items }) => {
// // //   return (
// // //     <ul>
// // //       {items.map((item) => (
// // //         <ListItem key={item.id} item={item} />
// // //       ))}
// // //     </ul>
// // //   );
// // // };

// // // // import React, { useEffect, useState } from "react";

// // // // const App = () => {
// // // //   const [name, setName] = useState("");
// // // //   const [resdata , setResData] = useState(null);
// // // //   const [loading , setLoading] = useState(false);

// // // //   // with dependency array
// // // //   // useEffect(()=>{
// // // //   //   console.log("The name is changed to " + name)
// // // //   // } , [name])

// // // //   // without dependency array
// // // //   // useEffect(() => {
// // // //   //   console.log("The name is changed to " + name);
// // // //   // });

// // // //   // with empty dependency array
// // // //   useEffect(() => {
// // // //     const fetchUsername = async() => {

// // // //       try {

// // // //         setLoading(true);
// // // //         const response = await fetch(`https://api.github.com/users/aestheticsuraj234`)

// // // //         const data = await response.json();

// // // //         setResData(data);

// // // //         setLoading(false);

// // // //       } catch (error) {
// // // //         console.log(error);

// // // //         setLoading(false);
// // // //       }
// // // //     }

// // // //     fetchUsername()

// // // //     // clean up
// // // //     return () => {
// // // //       setResData(null);
// // // //       setLoading(false);
// // // //     }
// // // //   }, []);

// // // //   const onChange = (e) => {
// // // //     setName(e.target.value);
// // // //   }

// // // //   const onSubmit = async(e) => {
// // // //     e.preventDefault();
// // // //     try {

// // // //       setLoading(true);
// // // //       const response = await fetch(`https://api.github.com/users/${name}`)

// // // //       const data = await response.json();

// // // //       setResData(data);

// // // //       setLoading(false);

// // // //     } catch (error) {
// // // //       console.log(error);

// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   console.log(resdata);

// // // //   return (
// // // //     <div>
// // // //       <form onSubmit={onSubmit}>
// // // //       <input type="text" placeholder="Enter Your name" name="username" value={name} onChange={onChange} />
// // // //       <button type="submit" disabled={loading}>Submit</button>
// // // //       </form>
// // // //       {
// // // //         loading && <h1>Loading...</h1>
// // // //       }
// // // //       {
// // // //         resdata && (
// // // //           <div>
// // // //             <h1>{resdata.name}</h1>
// // // //             <img src={resdata.avatar_url} alt={resdata.name} />
// // // //             <p>{resdata.bio}</p>
// // // //             <p>{resdata.location}</p>
// // // //             <p>{resdata.followers}</p>
// // // //           </div>
// // // //         )
// // // //       }
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;

// // // // // import Navbar from "./components/Navbar";
// // // // // import { Routes, Route } from "react-router-dom";
// // // // // import Home from "./pages/Home";
// // // // // import About from "./pages/About";
// // // // // import Dashboard from "./pages/Dashboard";
// // // // // import UserProfile from "./pages/UserProfile";
// // // // // import ProtectedRoutes from "./layouts/ProtectedRoutes";
// // // // // import Login from "./pages/Login";
// // // // // import NotFound from "./pages/NotFound";

// // // // // const App = () => {
// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />
// // // // //       <Routes>
// // // // //         <Route path={"/"} element={<Home />} />
// // // // //         <Route path={"/about"} element={<About />} />
// // // // //         <Route path={"/dashboard"} element={<Dashboard />} />
// // // // //         <Route
// // // // //           path={"/userprofile/:userId"}
// // // // //           element={
// // // // //             <ProtectedRoutes>
// // // // //               <UserProfile />
// // // // //             </ProtectedRoutes>
// // // // //           }
// // // // //         />
// // // // //         <Route path="/login" element={<Login />} />
// // // // //         {/* not found */}
// // // // //         <Route path="*" element={<NotFound />} />
// // // // //       </Routes>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // // import React from 'react'

// // // // // import NameList from './components/NameList'
// // // // // import Forms from './components/Forms'

// // // // // const App = () => {
// // // // //   const nameList = ["Suraj" , "Karan" , "Jhon Singh" , "Jhonny Depp"]
// // // // //   return (
// // // // //     <div>
// // // // //       {/* <UserGreeting isLoggedIn={true}/> */}
// // // // //       {/* <Notification notficationMessage={""}/>
// // // // //       <StatusMessage status={"success"}/> */}

// // // // //       {/* <NameList name={"Suraj"} />
// // // // //       <NameList name={"Karan"} />
// // // // //       <NameList name={"Jhon Singh"} />
// // // // //       <NameList name={"Jhonny Depp"} /> */}
// // // // //       {/* {
// // // // //         nameList.map((name , index)=>(<NameList key={index} name={name}/>))
// // // // //       } */}

// // // // //       <Forms/>

// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // // import { useState } from "react";

// // // // // function App() {
// // // // // //   const [count , setCount] = useState(0)
// // // // // //  const [favToy , setFavToy] = useState("Lego")

// // // // // //  function alertMe(event){
// // // // // //   console.log(event)
// // // // // //   alert("Hello")
// // // // // //  }

// // // // //   return (
// // // // //     <div>
// // // // //       {/* <h1>Hello! {count}</h1>
// // // // //       <div style={{display:"flex",gap:"10px"}}>IronMan

// // // // //       <button onClick={()=>setCount(count+1)}>Increment</button>
// // // // //       <button onClick={()=>setCount(count-1)}>Decrement</button>
// // // // //       </div> */}
// // // // //       {/* <div>
// // // // //         Your Fav Toy is {favToy}
// // // // //       </div>

// // // // //       <button onClick={()=>setFavToy("")}>IronMan</button>
// // // // //       <button onClick={()=>setFavToy("HotWheels")}>HotWheels</button> */}

// // // // //       {/* <button onClick={alertMe}>
// // // // //         Alert
// // // // //       </button> */}

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // // import { useState } from "react";

// // // // // function App() {
// // // // // //   const [count , setCount] = useState(0)
// // // // // //  const [favToy , setFavToy] = useState("Lego")

// // // // // //  function alertMe(event){
// // // // // //   console.log(event)
// // // // // //   alert("Hello")
// // // // // //  }

// // // // //   return (
// // // // //     <div>
// // // // //       {/* <h1>Hello! {count}</h1>
// // // // //       <div style={{display:"flex",gap:"10px"}}>IronMan

// // // // //       <button onClick={()=>setCount(count+1)}>Increment</button>
// // // // //       <button onClick={()=>setCount(count-1)}>Decrement</button>
// // // // //       </div> */}
// // // // //       {/* <div>
// // // // //         Your Fav Toy is {favToy}
// // // // //       </div>

// // // // //       <button onClick={()=>setFavToy("")}>IronMan</button>
// // // // //       <button onClick={()=>setFavToy("HotWheels")}>HotWheels</button> */}

// // // // //       {/* <button onClick={alertMe}>
// // // // //         Alert
// // // // //       </button> */}

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
