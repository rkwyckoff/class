// My Dashboard My Paths My Homework Catalog Kurt KW
// ASSIGNMENT
// Class Practice
//
//  Due: Thu, March 2nd
// Path: Front End Engineering - Atlanta - January 2017  Unit: Assignments
// More practice with classes, constructors and prototypes
//
// Objectives
//
// Obtain further knowledge of how Constructors & Prototypes work, while utilizing the newer Class syntax.
// Normal Mode
//
// In the example file below make sure you name each class differently as to not override each other. I need to be able to test them deployed on the console. Also make sure there are no JavaScript errors and check your code. Finally make sure it is formatted/indented correctly. Code is in place that validates each answer. It will currently say: Assertion failed for each question. Once you answer the question correctly that will go away. Use this to check your work.
//
// Copy the contents of the source file below into YOUR OWN main.js file.
// Complete each question (and the bonus if you want)
// Deploy the application to Surge.
// Deliverables
//
// Submit your Github Repo URL
// Deploy to Surge.sh and put a link in your Readme.md file
// Source File

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////                                                             ////
////    Classes!  Yay                                            ////
////                                                             ////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// 1. ------------------------------------------------------------ //

// Create a simple class function called `Foo` and create a new
// instance from it called `foo`.

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class Foo {
   constructor () {
   }
}
  let foo = new Foo();

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

console.assert(foo instanceof Foo);

// // --------------------------------------------------------------- //
//
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
//
// // 2. ------------------------------------------------------------ //

// Create a class function called `Dog` that sets a property
// on itself within the constructor. The property should be called
// `says` and the value should be `life is ruff`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //



class Dog {
  constructor() {
    this.says = "life is ruff";
  }
}

// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //
//
// ==== Validating =============================================== //

console.assert(new Dog().says === "life is ruff");

// --------------------------------------------------------------- //
//
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
//
// // 3. ------------------------------------------------------------ //
//
 //Create a class function called `Cat` that has a method on
 //it's prototype called `growl` that returns the string `meow`.
// create an instance of this called `cat`

// -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class Cat {
  constructor() {
    Cat.prototype.growl = function() {
     return "meow";
    }
  }
}
var cat = new Cat();

// // -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //
//
// // ==== Validating =============================================== //
//
console.assert(cat instanceof Cat);
console.assert(cat.growl() === "meow");

// // --------------------------------------------------------------- //
//
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
//
// // 4. ------------------------------------------------------------ //
//
// // Create a class called `KeepSecret`. The constructor function
// //  itself should accept a parameter called `secret` it should store
//  this in a private variable (use a closure). Add a method to the
//  prototype that is called `squeal` that returns the secret string.

// // -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
class KeepSecret {
  constructor(secret) {
     this.squeal = function() {
        return secret;
     };
  }
    squeal() {}
}


// -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //

// ==== Validating =============================================== //

let mySecret = "My class rocks!";
let dontTellNobody = new KeepSecret(mySecret);
console.assert(dontTellNobody.squeal() === mySecret);

// --------------------------------------------------------------- //

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//
// // 5. ------------------------------------------------------------ //
//
// // Create a class called `Key`. Create another class
// // called `Safe`. Make the Safe constructor take 2 arguments. The
// // first argument can be any piece if data to keep safe. This must
// // be stored using a private variable like you did with KeepSecret.
// // The 2nd param to the `Safe` constructor needs to be an instance
// // of `Key` you need to store it privately as well. Add a function
// // to the Safe prototype called `unlock` that accepts a key. If the
// // key matches the key that was used to create the Safe; then return
// // the secret data.
//
// // -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //

class Key {
  constructor () {
  }
}
var theKey = new Key ()

class Safe {
  constructor (safeData , theKey) {
    this.unlock = function (key) {
      if (key === theKey) {
        return safeData;
      }
    }
  }
}


// // -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //
//
// // ==== Validating =============================================== //
//
let sensitive = "shhhhh!";
let rightKey  = new Key();
let wrongKey  = new Key();
let safe      = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);
//
// // --------------------------------------------------------------- //
//
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// ////                                                             ////
// ////                  ___                                        ////
// ////                 / _ )___  ___  __ _____                     ////
// ////                / _  / _ \/ _ \/ // (_-<                     ////
// ////               /____/\___/_//_/\_,_/___/                     ////
// ////                                                             ////
// ////                                                             ////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
//
// // Bonus. -------------------------------------------------------- //
//
// // Create a class called `Validator`. Give it a method on it's
// // prototype called `email` that takes a string and returns true if
// // the string is a valid email address and false if it is not.
//
// // -- ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ - Your Answer - ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ -- //
//
//
//
// // -- ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ -- //
//
// // ==== Validating =============================================== //
//
// if (typeof Validator === "function") {
//   let valid = new Validator();
//   console.assert(valid.email("name@theironyard.com"));
//   console.assert(!valid.email("name-at-theironyard.com"));
// }
//
// // --------------------------------------------------------------- //
// Submit Assignment
//
//  https://github.com/rkwyckoff/class:
//
// tiy-kurt-class.surge.sh
// A
