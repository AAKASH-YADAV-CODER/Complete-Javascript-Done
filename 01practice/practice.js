var weekdays = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'sat', 'sun'];
// const openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
//     },
//     [weekdays[5]]: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };//mordern ES6 ways to manipulate object literals
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhanced objects literals
    // openingHours
    openingHours: {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0, // Open 24 hours
            close: 24,
        },
        fri: {
            open: 9,
            close: 19
        }
    },
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }//This is morder ES6 mehtod or function declearation in object literals
    ,
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(`order Reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} deliver to ${address} at ${time} `);
    },
    orderPasta: function (arg1, arg2, arg3) {
        console.log(`here is your delicious pasta with ${arg1},${arg2} and ${arg3}`);
    },
    orderpizza: function (a, ...more) {
        console.log(`your pizza is ready as per your niech like ${a}! an ,All ${more}`);
    },
};
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, } = obj);
// console.log(a, b);
// console.log(obj);

// // Nested objects
// const {
//     fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//     openStr += `${day}, `;
// }
// console.log(openStr);
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);