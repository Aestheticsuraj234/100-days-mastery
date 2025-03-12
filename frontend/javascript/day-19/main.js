// let paragraph = document.getElementById("para1");

// let headings = document.getElementsByClassName("Heading")

// console.log(headings)

// let h1 = document.getElementsByTagName("h1")

// console.log(h1)

// const paragraph = document.querySelector("#para1")

// const heading = document.querySelector(".Heading")

const Headings = document.querySelectorAll(".Heading");

console.log(Headings)


const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement); // Append to body

console.log(newElement)