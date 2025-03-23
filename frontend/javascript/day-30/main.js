class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    logUserName(){
        console.log(this.username);
    }

    countUsers(){
        console.log("There are 50 users");
    }

    // values
    NAMES = ["Suraj" , "Karan" , "Akash"];
    EMAILS = ["nBZmK@example.com" , "1BtY5@example.com" , "oBk3W@example.com"];
}

const Suraj = new User("Suraj" , "nBZmK@example.com" , "suraj@123")
const Karan = new User("Karan" , "1BtY5@example.com" , "karan@123")
const Akash = new User("Akash" , "oBk3W@example.com" , "akash@123")



