'use strict';
/////////  CONSTRUCTOR FUNCTION WIHT NEW OPERATOR
/*
const People = function (firstname, birthyear) {
    // these are properties or data of constructor function
    this.firstname = firstname;
    this.birthyear = birthyear;
    // isme hum fuctions creat nahi krtte quki on large data there is terribel effect of processor that's why? we don't use
    // this.calage = function () {
    //     const age = 2022 - this.birthyear;
    //     console.log(age);
    //     return;
    // }
    // never do this
};
const akash = new People('Aakash', 2003);
const vikas = new People('vikash', 1997);
console.log(akash, vikas);
//  these are instance of CF of People
const tubee = 'C';// this show relation between class and Objects
console.log(akash instanceof People);
console.log(tubee instanceof People);

///// Prototype kase create hotta hai use kase hotta hai
People.prototype.calcAge = function () {
    console.log(2022 - this.birthyear);
};
// this is method
People.prototype.relation = 'brother';
// ye property hai CF constructor function
akash.calcAge();
vikas.calcAge();
console.log(akash.relation, vikas.relation);
// all the prototype method and data
console.log(akash.__proto__);
console.log(akash.__proto__ === People.prototype);
// console.log(akash === People.prototype);
// is mai hum chek kr rahi hai ki People CF hai vo prototype hai akash ke nhai thats it as ,**like mai upper check krne ki kosis kr rha tha way of checking is write down
console.log(People.prototype.isPrototypeOf(akash));
console.log(People.prototype.isPrototypeOf(vikas));
/// Now joproperty hai or method hai vo kiske ha Prototype ka ya CF ke ye check hoga .hasOwnProperty
console.log(akash.hasOwnProperty('birthyear'));
console.log(akash.hasOwnProperty('firstname'));
console.log(akash.hasOwnProperty('CalcAge'));


//////// PROTOTYPE BUILT IN OBJECTS
//// Using Prototype we see how it have many built in method
console.log(akash.__proto__);
console.log(akash.__proto__.__proto__);
console.log(akash.__proto__.__proto__.__proto__);
const arr = [34, 25, 6, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__.__proto__);
Array.prototype.oneValue = function () {
    return [...new Set(this)];
}
console.log(arr.oneValue());
console.dir(Array.prototype.constructor);
const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(akash.__proto__.__proto__);
/// dir is direct to that function or content  this is show how  prototype function or method are inherited in between prototype hence the main logic of it to resue the code which is create in it
*/
///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}
const bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();


/////////////////////////////////////////////////////////////////////////        ES6 CLASSES        ///////////////////
// these classes are work in strict mode

// class declaration

// class Myself {
//     constructor() {

//     }
// }


// class expression
const Myself = class {
    constructor(fullname, birthyear) {
        this.fullname = fullname;
        this.birthyear = birthyear;

    }
    //instance methods
    calcAge() {
        console.log(2022 - this.birthyear);
    }
    greet() {
        console.log(` yes my Lord Mr.${this.fullname}! what i have to do`);
    }
    get age() {
        return 2022 - this._birthyear;
    }
    set fullname(name) {
        if (name.includes(' ')) this._fullname = name;
        else { `your ${name} is not full name` };
    }

    get fullname() {
        return this._fullname;
    }
    set birthyear(birth) {
        return this._birthyear = Number(birth);
    }
    get birthyear() {
        console.log(`your ${this._birthyear}`);
    }
    // static method
    static hey() {
        console.log('hellow world');
        // console.log(this);
    }
}
const akash = new Myself('Akash yadav', 2003);
// getter and setter call
console.log(akash.age);
// console.log(akash.fullname);
console.log(akash.fullname);
Myself.hey();

// Myself.prototype.calcAge() {
//     console.log(2022 - this.birthyear);
// }
// Myself.prototype.greet() {
//     console.log(` yes my Lord Mr.${this.name}! what i have to do`);
// }
// we can also create method like this

const vikash = new Myself('vikash yadav', 1997);
console.log(akash, vikash);
// akash.calcAge();
// vikash.calcAge();
// akash.greet();
// vikash.greet();
// console.log(akash.__proto__ === Myself.prototype);
// console.log(Myself.prototype.isPrototypeOf(akash));
// console.log(akash.__proto__);
// console.log(akash.hasOwnProperty('name'));
// console.log(akash.hasOwnProperty('calcAge'));
// console.log(Myself.prototype.hasOwnProperty('calcAge'));
// everything work same as CF but remember syntax and use in strict mode and not use ,comma's between method

///// // Getter and Setter
const account = {
    name: 'akash',
    movements: [23, 45, -56, 5, 6, 78, -98],
    get latest() {
        return this.movements.slice(3);
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
console.log(account.latest);
account.latest = 78;
console.log(account.movements);
console.log(account.latest);
// so isme hum same functions se element read and write kr sakte hai




////////// OBJECT CREATE //////////////////////////////////
const Myself1 = {
    calcAge() {
        return 2022 - this.birthyear;
    },
    init(name, year) {
        this.name = name;
        this.year = year;
        console.log(name, year);
    },
};
const obj = Object.create(Myself1);
obj.name1 = "Aakash yadav";
obj.birthyear = 2003;
console.log(obj.calcAge());
obj.init("akash", 2004);
*/
///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


const Car = class {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
};
const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/


///////// INHERITANCE BETWEEN CLASSES :" CONSTRUCTOR FUNCTION" ////
/*
const MaaBapu = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
MaaBapu.prototype.calage = function () {
    return 2022 - this.birthYear;
};

const Bacha = function (firstName, birthYear, sports) {
    //rem
    MaaBapu.call(this, firstName, birthYear);
    this.sports = sports;
}
// linking prototype for inheritanc // rem**
Bacha.prototype = Object.create(MaaBapu.prototype);


Bacha.prototype.intro = function () {
    console.log(`My name is ${this.firstName} and I like to play ${this.sports} at age ${akash.calage()}`);
}
const akash = new Bacha("Akash yadav", 2003, "kabaddi");
akash.intro();
console.log(akash.calage());
console.log(akash instanceof Bacha);
console.log(akash instanceof MaaBapu);
console.log(akash instanceof Object);
console.log(akash.__proto__.__proto__);
console.log(akash.__proto__);
console.dir(MaaBapu.prototype.constructor);
*/
///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
};

const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();




///////// INHERITANCE BETWEEN CLASSES : "ES6";////////////

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }
    introduc() {
        console.log(`my name is ${this.fullName} , I study ${this.course}.`);
    }
    calcAge() {
        console.log(
            `I'm ${2037 - this.birthYear
            } years old, but as a student I feel more like ${2037 - this.birthYear + 10
            }`
        );
    }
};
const akash = new StudentCl("Aakash Yadav", 2003, "Computer Science");
akash.introduc();
akash.calcAge();

console.log(akash instanceof StudentCl);
console.log(akash instanceof PersonCl);
console.log(akash instanceof Object);
console.log(akash.__proto__.__proto__);
console.log(akash.__proto__);
console.dir(PersonCl.prototype.constructor);

///////// INHERITANCE BETWEEN CLASSES : "Object.Create" ///////////
// main method wala object literal
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
    introduc() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    },
};
/// linking classes and creating there own method
const akash = Object.create(PersonProto);
akash.init("akash yadav", 2003);
// akash.introduc();
akash.calcAge();

/// linking classes and creating there own method
const vikas = Object.create(PersonProto);
vikas.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}
vikas.init("Vikash yadav", 1997, "Computer Science");
vikas.introduc();


////////// Encapsulation Protected(_) properties and Method
// Encapsulation: Private(#) Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)
const Account = class {
    // pulbic fields (instance)
    locale = navigator.language;

    // private field (instance)
    #movements = [];
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        /// protected
        this._pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;
        console.log(`Thanks for opening account ${owner}`);
    }
    // public method and interface
    getmovements() {
        return this.#movements;
    }
    displaypin() {
        return this._pin;
    }
    deposite(val) {
        this.#movements.push(val);
        return this;
    }
    withdrawal(val) {
        this.deposite(-val);
        return this;
    }
    // private method
    #approveloan(val) {
        return val;
    }
    requestloan(val) {
        if (this.#approveloan(val)) {
            this.deposite(val);
            console.log(`your loan is approve`);
        }
    }
    // static method are is also same for protected,public,privat
    static hlpr() {
        console.log("helper");
    }
}
const Akash = new Account("Akash yadav", "RUPEE", 1111);
Akash.deposite(3299);
Akash.deposite(4499);
Akash.deposite(1399);
Akash.withdrawal(232);

Akash.requestloan(1000);
// acess public properties
console.log(Akash.displaypin());
console.log(Akash.getmovements());// only way of accessing
// console.log(Akash.pin);
console.log(Akash);
// console.log(Akash.#movements);
Account.hlpr();

// Chaining Method
Akash.deposite(232).deposite(345).deposite(566).deposite(23).withdrawal(343).withdrawal(232).withdrawal(232);
console.log(Akash.getmovements());
*/
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge
            }`
        );
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();

console.log(rivian.speedUS);

