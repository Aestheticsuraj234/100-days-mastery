import React, { useRef } from 'react'



const Forms = () => {
    const nameRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(nameRef.current.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Enter your name' ref={nameRef} />
    <button type='submit'>Submit</button>
    </form>
  )
}

export default Forms













// import React, { useState } from 'react'

// const Forms = () => {
//     const [formData , setForm] = useState({
//         username : '',
//         email : '',
//         password : ''
//     })

//     const handleChange = (e)=>{
//         const { name, value } = e.target;
//         setForm((prevData) => ({
//           ...prevData,
//           [name]: value, // Dynamically update state
//         }));
//     }

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         console.log(formData)
//     }

//   return (
//     <form onSubmit={handleSubmit} >
//            <label>
//         Username:
//         <input type="text" name="username" value={formData.username} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       <label>
//         Password:
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
    
//   )
// }

// export default Forms


// import React, { useState } from 'react'

// const Forms = () => {
//     const [name , setName] = useState('')
//     const [email , setEmail] = useState('')

//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         console.log(
//             {
//                 name,
//                 email
//             }
//         )
//     }
//   return (
//     <form onSubmit={handleSubmit}>
//         <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
//         <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
//         <button type='submit'>Submit</button>
//     </form>
//   )
// }

// export default Forms