// class Animals{
//     constructor(name){
//         this.name = name;
//     }

//     eat(){
//         console.log(`${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }

//     walk(){
//         console.log(`${this.name} is walking`);
//     }

//     run(){
//         console.log(`${this.name} is running`);
//     }
// }

// const Horse = new Animals("Horse");


// class Horse extends Animals{
//     constructor(name , sound){
//      super(name)
//      this.sound = sound;   
//     }


//     makeSound(){
//         console.log(`${this.name} makes sound ${this.sound}`);
//     }
// }


// const Horse1 = new Horse("IDN" , "Neigh");

// Horse1.makeSound()

// Horse1.eat()

// console.log(Horse === Animals); // false
// console.log(Horse.prototype === Animals.prototype); // false

// console.log(Horse1 instanceof Horse); // false