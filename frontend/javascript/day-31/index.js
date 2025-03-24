// let name = {
//     firstname: 'John',
//     lastname: 'Doe',
//     printFullName: function() {
//         console.log(this.firstname + ' ' + this.lastname);
//     }
// }

// let name2={
//     firstname: 'Jane',
//     lastname: 'Doe',
// }

// // Function borrowing
// name.printFullName.call(name2); // Jane Doe

let name = {
    firstname: 'John',
    lastname: 'Doe',
   
}

let printFullName = function(hometown , state) {
    console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ' ' + state);
}

let name2={
    firstname: 'Jane',
    lastname: 'Doe',
}

// Function borrowing
printFullName.call(name , 'Noida' , 'Uttar Pradesh'); // Jane Doe

// apply method
printFullName.apply(name2 , ['Noida' , 'Uttar Pradesh']); // Jane Doe


// bind method

let printMyName = printFullName.bind(name2 , 'Noida' , 'Uttar Pradesh');
printMyName(); // Jane Doe from Noida Uttar Pradesh