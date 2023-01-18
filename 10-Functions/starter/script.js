'use strict';
// console.log("hello");
/*
//////// Default Parameters
const bookings = [];
const creatbooking = function (seatNum, Numpassengers = 1, price = 9 * Numpassengers) {
    // ES 5 short circuting
    Numpassengers = Numpassengers || 1;
    price = price || 9 * Numpassengers;

    /// Objects litterals
    const booking = {
        seatNum,
        Numpassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);

    // console.log(bookings);
}
creatbooking("HHI",);
creatbooking("HHI", undefined,);
creatbooking("HHI", 34, 3);


////// Argument's work as referance and Value , But actually javascript not have techniqu(Passing by referance ) we can pass a referance and will change value      : - So it work same we study before primitive and object litteral or referance type

const Firstname = 'Aakash';
const Charctersticks = {
    skinColor: 'brown',
    finance: 'Not earning',
    PhoneNum: 8708437951,
};
const CheckArgu = function (PrimitiveVal, ObjectVal) {
    PrimitiveVal = "Aakash Yadav";
    // ObjectVal.PhoneNum = 8059222489;
    ObjectVal.skinColor = 'whiter';
    ObjectVal.finance = "Could be Earn? ";
    if (ObjectVal.PhoneNum === 8059222489) {
        alert('Yes checked in, Phone is match');
    } else {
        alert('Not matcing');
    }
    // console.log(PrimitiveVal);
};
// CheckArgu(Firstname, Charctersticks);
// console.log(Firstname);
// console.log(Charctersticks);


// So here i pass a referance type (object) notpermitive value
const ChangePHone = function (Phone) {
    Phone.PhoneNum = Math.trunc(Math.random() * 5000000000);
    console.log(Phone);
    // Phone.PhoneNum = 8059222489;
};
ChangePHone(Charctersticks);
CheckArgu(Firstname, Charctersticks)


///// Remember that join method onlly work on Array
////////////////////  High Order function :- Function Accepting a CallBack function ////////
const StandarName = function (str) {
    const [first, seconds] = str.split(' ');
    // console.log([first, seconds].join(' '));
    const str1 = [first[0].toUpperCase() + first.slice(1).toLowerCase(), seconds.replace(seconds[0], seconds[0].toUpperCase())].join(' ');
    // console.log(str1);
    // const str2 = str[first, seconds].join(' ');
    return str1;
}
// console.log(StandarName('akash yadav'));
const StandarName1 = function (str) {
    const str1 = str.trim().toUpperCase();
    const str2 = str1.padStart(20, '*').padEnd(30, '*');
    return str2;
}
// console.log(StandarName1('aakash yadav '));

const transformer = function (str, fun) {
    console.log(`original string: ${str}`);
    console.log(`transformer string:- ${fun(str)}`);//call back function pass kr rhai hai
    console.log(`Function name := ${fun.name}`);
}

transformer('aakash yadav', StandarName1);
transformer('aakash yadav', StandarName);


const high5 = function () {
    console.log('👋🏾');
}
document.body.addEventListener('click', high5);
[1, 3, 45, 5,].forEach(high5);

///// yha taak maine apni galtiyo ko sudhare rha hu and in this topic we learn how function pass to another function


//////// Function Returning Function /////
const greeting = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name} `);
    }
}
greeting('hi')('aakash');///// first way of passing Argu
const grrt = greeting('hyy');//parent
//child varib.
grrt('akash');

const GreetArrow = (greeting) => (names) => console.log(`${greeting}${names}`);
GreetArrow('hello')('Aakash Yadav');


/////// The Call Method and to Applay Method //////
const Delhi = {
    airport: 'indraGandhi internationn airport',
    iataCode: 'LH',
    booking: [],
    book(FlightNUm, name) {
        console.log(`${name} have booked a seat on ${this.airport} ${this.iataCode}${FlightNUm}`);
        this.booking.push({ flight: `${this.iataCode}${FlightNUm}`, name });
        // console.log(booking),
        console.log(this.booking);
    },
};
// Delhi.book(343, "aakash Yadav");
// console.log(Delhi.booking);
const Noida = {
    airport: 'Noida interenation airport ',
    // this.airport.trim(),
    iataCode: 'BH',
    booking: [],
};
const LuchkNow = {
    airport: 'Chaudhary Charan Singh international Airport',
    iataCode: 'Gh',
    booking: [],
};

//////// Call Method ///////
// Noida.book(34, 'viaks');
const book = Delhi.book;
book.call(Noida, 345, 'vikash');
console.log(Noida);

book.call(LuchkNow, 35423, 'Mummy');
console.log(LuchkNow);

//////// Applay method /////////
const Details = [263, 'Mummy'];
book.apply(Noida, Details);
//  first method not realy use another adavance way of doing this
book.call(LuchkNow, ...Details);

//////No panic just see this gona be simple to understand


/// The Bind Method /////
const LuchkNowGh = book.bind(LuchkNow);
const DelhiLH = book.bind(Delhi, 23);// predefining the Arg first
const NoidaBH = book.bind(Noida);// here null and undefind means nothing passing up here you just have to pass all arguments that's it ///***** tumko agar koi OBJECT nhai milta then you should pass null as object of undefind as we did in question addtax
//// for here the above one is created as a function by bind method  ,they are ready for calling
LuchkNowGh(23, 'xyz');
//the above one is like simple passing arg in order

// predined Argu1 is declared above in this Second one it to be declare
DelhiLH('FatherShab');
NoidaBH(234, 'FatherSahab');
// console.log(typeof (NULL));


// Seeing in ADDEVENTLISTIONER or passing in it
Delhi.planes = 300;
Delhi.addplane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// Delhi.addplane();
document.querySelector('.buy').addEventListener('click', Delhi.addplane.bind(Delhi));
document.body.addEventListener('click', Delhi.addplane.bind(Delhi));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
/////// in this we don't have any object for referance so that's way i use null in replace of object
const addVAT = addTax.bind(null, 0.2);
console.log(addVAT(800));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));//Second method
console.log(addVAT2(23));
console.log(addTaxRate(0.2)(200));//first method of passing argu
*/


///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        // prompt(this.question + this.options)
        const answer = Number(prompt(
            `${this.question}\n${this.options.join('\n')}\n(Write option number)`)
        )
        console.log(answer);
        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
        }
        else {
            console.log('wrong answer Enter the instructed answer');
        }
        // typeof answer === 'number' &&
        //     answer < this.answers.length &&
        //     this.answers[answer]++; This does the same work BUt above one is more symmetric and readable  THis is done by short circuiting method of and operator
        // console.log(this.answers);// for checking

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },

};
// poll.registerNewAnswer();
//
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));


poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


//// IIFE (immediately invoked function Experession)//////
(function () {
    var VArvari = 'this is also for accessing';
    const Foraccess = 'not access';
    console.log('testing for IIFE');
}());
// console.log(VArvari);
// console.log(Foraccess);
{
    var variable = 'hello';
    const Foraccess = 'not accessable';
}
console.log(variable);
// console.log(Foraccess);


/////// CLOSURE ////////
// function x() {
//     function y() {
//         var fortest = 'helo';
//         console.log(fortest);
//     };
//     // const nestedfun = (y.fortest);
//     y();
//     console.log(nestedfun);
// };
// x();
// const secureBooking = function () {
//     var passenger = 0;
//     return function () {
//         passenger++;
//         console.log(passenger);
//     };
//     // console.log(passenger);
// };
// const bookforaccess = secureBooking();
// bookforaccess();
// bookforaccess();
// bookforaccess();

// const a = 'aakash';
// first();
// function first() {
//     const b = 'manoj';
//     const c = 50;
//     if (c >= 40) {
//         const dhek1 = 3;
//         var dhekk = true;
//     }
//     console.log(dhek1);
//     third();
//     function third() {
//         const d = 'hey';
//         // console.log(`${a} ${b} ${dhekk} ${d}`);
//         console.log(`${a} ${b} ${dhek1} ${d}`);
//     }
// };

let f;
function g() {
    const a = 3;
    f = function () {
        console.log(a * 3);
    }
};

function h() {
    const b = 2;
    f = function () {
        console.log(b * 2);
    }
}
g();
f();
console.dir(f);

h();
f();
console.dir(f);

/////////// example 2 /////
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`total no. passenger for boarding are ${n}`);
        console.log(`no. of passenger in each group are :-${perGroup} in each three row`);
    }, wait * 1000);
    console.log(`your boarding time start's in ${wait} seconds`);
};

boardPassengers(100, 2);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀


// (function () {
//     document.querySelector('h1').style.color = 'red';
//     document.querySelector('body').addEventListener('click', function () { document.querySelector('h1').style.color = 'blue'; })

// }());

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
*/