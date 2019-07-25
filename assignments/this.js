/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
    - In the global scope, the value of "this" = the window.
* 2. Implicit binding
    - The value on the left of the preceding dot is what "this" is reffering to.
* 3. Explicit binding
    - When the call or apply method is used, "this" is explicitly defined.
* 4. New binding
    - When a constructor is created, "this" referes to the specific instance of the object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myName(name){
    console.log(this);
    return name;
}
myName("Chinaemere");

// Principle 2

// code example for Implicit Binding

const person = {
      name: "Chinaemere",
      age: "23",
      location: "Arlington, TX",
      greet: function(){
        console.log(`Hi, I am ${this.name} I am from ${this.location} and I am ${this.age} years old`);
      }
    }

    person.greet();

// Principle 3

// code example for New Binding

function food(favorite){
    this.food = favorite;
  }
  
  let myFavouriteFood = new food("Jollof Rice");
  
  console.log(`My favorite food is ${myFavouriteFood.food}.`);

// Principle 4

// code example for Explicit Binding

function noise(){
  console.log(this.sound);
}

const duck ={
  sound: 'quaaaackkkk'
}

noise.call(duck);