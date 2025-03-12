// let box = document.getElementById("box");

// box.onmouseover = function () {
//   box.style.backgroundColor = "blue"; // Change to any color you like
// };

// box.onmouseout = function () {
//   box.style.backgroundColor = "chocolate"; // Reset to original color
// };

// const button = document.getElementsByTagName("button")[0]


// button.addEventListener("click"  , ()=>{
    //     body.style.backgroundColor = "red"
    // } , false)
    
    
    const body = document.getElementsByTagName("body")[0];
const parent = document.getElementById("parent");
const child = document.getElementById("child")


body.addEventListener("click" , ()=>{
    console.log("body clicked")
})


parent.addEventListener("click" , ()=>{
    console.log("Parent clicked")
})

child.addEventListener("click" , (event)=>{
    console.log(event)
    event.stopPropagation()
    console.log("Child clicked")
})