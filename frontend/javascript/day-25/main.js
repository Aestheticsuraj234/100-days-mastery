// fetch(url ,{})

// fetch("https://api.github.com/users/aestheticsuraj234" , {
//   method:"GET"  
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// fetch("https://api.github.com/users/aestheticsuraj234" , {
//     method:"POST",
//     body:{name:"Suraj"}  
//   })
//   .then((response)=>{
//       return response.json()
//   })
//   .then((data)=>{
//       console.log(data)
//   })
//   .catch((err)=>{
//       console.log(err)
//   })
//   .finally(()=>{
//       console.log("Alway")
//   })


// async / await

async function getGithubData(){
    try {
        const response = await fetch("https://api.github.com/users/aestheticsuraj234")
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("Alway")
    }
}

getGithubData()