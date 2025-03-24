let username = {
    firstname: 'John',
    lastname: 'Doe',
    
}

let sayMyFullName =  function(age , city) {
    console.log(`${this.firstname} ${this.lastname} ${age} ${city}`);
  
}
// username.sayMyFullName(); // John Doe

let username2 = {
    firstname: 'Jane',
    lastname: 'Doe',
  
}

// Call() method

// sayMyFullName.call(username2 , "25" , "Noida"); // Jane Doe 25 Noida


// Appply() method

// sayMyFullName.apply(username2 , ["25" , "Noida"]); // Jane Doe 25 Noida


let sayMyName = sayMyFullName.bind(username2 , "25" , "Noida");

sayMyName()