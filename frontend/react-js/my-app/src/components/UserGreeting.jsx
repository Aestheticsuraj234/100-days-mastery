import React from "react";

const UserGreeting = ({ isLoggedIn }) => {
  return <h1>Hello</h1>
};

export default UserGreeting;

// *1. Way One of conditional rendering
// if (isLoggedIn) {
//     return <div>Good morning Suraj🌄</div>;
//   } else {
//     return (
//       <div>
//         <h3>Please sign up</h3>
//       </div>
//     );
//   }


// *2. Way Two of conditional rendering
// return isLoggedIn ? (
//     <h1>Good morning Suraj🌄</h1>
//   ) : (
//     <div>
//       <h3>Please sign up</h3>
//     </div>
//   );