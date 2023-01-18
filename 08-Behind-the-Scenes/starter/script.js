'use strict';
/*const a = 'Aka';
first();
function first() {
    const b = 'hlo';
    second();
    function second() {
        const c = 'hi';
        third();
    }
};
function third() {
    const d = 'hey!';
    console.log(a + b + c + d);
}
function calcage(birthyear) {
    const age = 2023 - birthyear;
    console.log(age, firstname);//here ander hum bahar wale ka variable access krr sakte hai but inner se outer scope chain of variable is not possible
    function printage() {
        const output = `${age} and ${firstname},${birthyear} isme hum tinno outer scope chain wale variable ko access kr sakte hai`;
        console.log(output);

        if (age >= 15 && age <= 25) {
            const str = `${firstname}`;//its blockscope
            console.log(str);
            var funcitionalscope = true;//isko access kr sakte hai outside this scopechain because closest function scope it just ignore the curley braces
        }
        console.log(funcitionalscope);
        // console.log(str);//its show referanca error because block scope chain will be definded in only in curley braces
    }
    printage();

}
const firstname = 'Aakash';
calcage(2003);
// console.log(age);//its show referance error that the main logic of this scope chain concept
///hosting and TDZ tmepraroy dead zone
// console.log(z);
// console.log(x);
// console.log(y);
let x = 10;//intialization
const y = 90;// ||
var z = ' aakash';//undefined
// console.log(addDecl(2, 4));
// console.log(addExpr(2, 4));
// console.log(addArrow(2, 4));
function addDecl(a, b)
return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;*/
// console.log(undefined);
// if (!numProducts) {
//     deleteShoppingCart();
// }
// var numProducts = 11;
// function deleteShoppingCart() {
//     console.log('all product deleted!');
// }
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
// console.log(window.x);


///////////////////////////////This keyword
// console.log(this);
// const calcAge = function (birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this);
// }
// calcAge(2003);
// const calcAgeArrow = birthYear => {
//     console.log(2022 - birthYear);
// }
// calcAgeArrow(2003);
// const aakash = {
//     year: 2004,
//     lastname: 'yadav',
//     calcAge: function () {
//         console.log(this.year);
//         console.log(2022 - this.year);
//     },
// };
// aakash.calcAge();
// const vikash = {
//     year: 1997,
// };
// vikash.calcAge = aakash.calcAge;
// vikash.calcAge();
// const f = aakash.calcAge;
// f();


////////////// Regular Functions vs. Arrow Function
// var firstname = 'Aakash';
// const akash = {
//     firstname: 'vikash',
//     year: 2003,

//     calcAge: function () {
//         // console.log(this);
//         console.log(2022 - this.year);
//         //its way to access the this keyword jab ghi sidhi ungli se na nikle tho ungle taadhi kr doo   SOLUTION   1
//         // const self = this;
//         // const isdogo = function () {
//         //     console.log(self);
//         //     // console.log(this.year>= 2000 && this.year<=2005);
//         //     console.log(self.firstname);
//         // };
//         //SOLUTION 2 for accessing this key word 
//         const isdogo = () =>{
//             console.log(this);
//             console.log(this.year>=2000 && this.year<=2005);
//         };
//         isdogo();
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`hey ${this.firstname}`);
//     },

// };
// akash.calcAge();
// akash.greet();


//PARAMETERS AND ARGUMENTS we only pass arguments in regular function not in arrow function
// function addDecl(a, b) {
//     console.log(a + b);
//     console.log(arguments);
//     return;
// };
// addDecl(2, 9, 4, 5, 6);
// const addExpr = function (a, b) {
//     console.log(arguments);
//     console.log(a % b);
//     return;
// }
// addExpr(2, 3, 56, 67);
// const addArrow = (a, b) => {
//     console.log(arguments);
//     console.log(a + b);
//     return;
// };
// addArrow(3,453,435,6,897);



/////////   OBJECTS VS PRIMITIVES 
// let age = 18;
// let oldage = age;
// age = 19;
// console.log(oldage);
// console.log(age);

// const akash = {
//     Firstname: 'akash',
//     age: 19,
// };
// console.log(akash);
// const vikash = akash;
// vikash.age=24;
// console.log(vikash);


////////////// PRIMITIVES AND OBJECTS IN PRACTICE  

// let name = 'Aakash';
// let firstname = name;
// name = 'akash';
// console.log(name);
// console.log(firstname);

// const akash = {
//     firstname: 'aakash',
//     lastname: 'yadav',
//     age:19,
//     family:['mummy','papa'],
// };
// const vikash = Object.assign({},akash);
// vikash.age = 24;
// vikash.firstname = 'vikash';
// vikash.family.push('sister');
// vikash.family.push('brother');
// console.log(akash);
// console.log(vikash);


//   SUMMARY :- MAIN CONCEPT OF ALL THIS SESSION IS AOBUT GLOBAL,FUNCTION,BLOCK SCOPE HOW THE ALL ARE CALL IN HEAP AND CALL STACK MEMORY AND IN DETAILS AND SOME PROPERTY LIKE JIT COMPILATION AND MANY MORE AND HOSTING HOW THEY USE OR ACCESS WIHTOUT DECLARE IN FUNCTION *****REMEMBER THE ONE THING IS,,, PROBABLY THERE IS NO CONCEPT WHICH IS USE ARROW FUNCTION AND AT LAST PRIMITVE WHICH IS STORE IN CALL STACK AND REFERANECE TYPE OR OBJECT WHICH IS STORED IN HEAP AND HOW THEY CREATE DEEP CLONE AND SHALLOW COPEY IN WHICH ONLY DEEP CLONE THEY IS PASSING ADDRESS OF VARIBALE OR REFERANCE TYPE AT LAST BY OBJECT.ASSIGN WE ALSO FIND BUGE HOW TO NOT TO CREATE DEEP COPY BUT ACQUIRING THE PROPERTY OF PARENTS OBJECT OF REFERANCT TYPE 



////////HENCE THEIR IS END OF THIS SESSION 