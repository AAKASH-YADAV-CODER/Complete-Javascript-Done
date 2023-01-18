'use strict';

// Data needed for a later exercise


// Data needed for first part of the section
const weekdays = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'sat', 'sun'];
const openingHours = {
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
};//mordern ES6 ways to manipulate object literals
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced objects literals
  openingHours,
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
/////////// String Methods Practice  
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
for (const flight of flights.split('+')) {
  const [type, from, toO, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? "🔴" : ''}${type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${toO.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`.padStart(39);
  console.log(output);
}

/*
///// CHALLENGE #4

//  Main rool in this .Enteries make because it have index and ele both , index use for ✅ this and ele for split into first and second /////// confusion is to know about trim ( ) method

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const test = document.querySelector('textarea').value;
  // console.log(test);
  const splitforq = test.split('\n');
  console.log(splitforq);
  for (const [i, ele] of splitforq.entries()) {
    // console.log(ele);
    const [first, Second] = ele.toLowerCase().trim().split('_');
    // console.log(first, Second);
    const output = `${first} ${Second.replace(Second[0], Second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});


////////// PART - 2 String :- UPPER,Lower,replace,bool methods
const MyLife = "No true love,No true friend , No Money , Feeling Alone";
console.log(MyLife.toUpperCase());
console.log(MyLife.toLowerCase());
const AfterMoney = "Money is not everything, But it can change something like this :";
////// REPLACE
console.log(MyLife.replace('No', 'Yes'));
/// replace all word that is present in string
// const change = MyLife.replace('Feeling Alone', 'little bit okay');
// console.log(change);
const MyLifechange = MyLife.replace(/No/g, "yes").replace('Feeling Alone', 'little bit okay');
console.log(MyLifechange);
console.log(AfterMoney.concat(MyLifechange));

///// Trim basically use for adjust a situation
const mail = 'ay614838@gamil.com';
const mailUpper = 'Ay614838@gamil.com   ';
const mailLower = mailUpper.toLowerCase();
const forComp = mailLower.trim();
console.log(forComp);
console.log(mail === forComp);
/// Fix Captilization
const Myname = 'aAkash';
const capitalizeName1 = Myname[0].toUpperCase() + Myname.slice(1).toLowerCase();
const capitalizeName = Myname.replace(Myname[0], Myname[0].toUpperCase())
console.log(capitalizeName);
console.log(capitalizeName1);
///Boolean Methods
console.log(MyLife.includes("No"));
console.log(MyLife.startsWith("No"));
console.log(MyLife.endsWith("Alone"));
if (MyLifechange.startsWith('yes') && MyLifechange.endsWith('okay')) {
  console.log('You got it');
} else {
  console.log("you fail to learn");
}


///////// SPLIT &&& JOIN FUNCTION //////
const Forjoin = MyLife.split(" ");
console.log(Forjoin);
console.log(Forjoin.join(" "));
const myname = 'aakash yadav';
const [first, last] = myname.split(' ');
console.log([first, last]);
const RespectedName = ['Mr.', first.replace('a', 'A'), last.toUpperCase()].join(' ');
console.log(RespectedName);
/////// Question for Captialization
const Captialization = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const words of names) {
    // namesUpper.push(words[0].toUpperCase() + words.slice(1).toLowerCase());
    namesUpper.push(words.replace(words[0], words[0].toUpperCase()));
  }
  console.log(namesUpper);
};
Captialization('aakash Yadaav');
Captialization('akjadujka');
Captialization('vikash Yadaav');

/////////  PADDING ********* PASS LENGTH AND SYMBOLE OF CHARCTER TO ADD FOR THAT LENGTH
const Newname = 'vikas';
const Padname = Newname.padStart(10, '*');
console.log(Padname.padEnd(15, "*"));
console.log(Newname.padEnd(15, '*'));

/////// MAKING CREDITCARD MASK ////////
const maskCreditCard = function (num) {
  const str = num + '';
  // const str = String(num);
  const fournum = str.slice(-4);
  return fournum.padStart(str.length, '*');
  // console.log(makingofcard);
}
console.log(maskCreditCard('12376862864762'));
console.log(maskCreditCard(12376862864762));


//////////////// REPEAT ///////
const string = 'hai hai hai';
console.log(string.repeat(2));

const planesInLine = function (n) {
  for (let num = 0; num <= n; num++) {
    console.log(`There are ${num} planes in line ${'🛩 '.repeat(num)}`);
    // console.log(num);
  }
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
}
planesInLine(6);

// console.log(RespectedName.join(''));
// console.log(MyLife.join(" "));

/// Learning about stirng ---- what i do in it :- we pass string in variable ,length,indexOf,lastIndexOf,slice means data ko extract krna jo bhi index de rakha hai and -tive index for extracting from last, and at last we use function ,typeof new string
const MyLife = 'No money , NO true love, responsibilties';
console.log(MyLife.length);
console.log(MyLife[6]);
console.log(MyLife.indexOf('e'));
console.log(MyLife.indexOf('money'));
console.log(MyLife.lastIndexOf('t'));

console.log(MyLife.slice(4, -9));
console.log(MyLife.slice('', -8));

// console.log(MyLife.slice('3,);
console.log(MyLife.slice('', MyLife.lastIndexOf(',') - 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === "E") {
    console.log('bad luck having middle seat');
  } else {
    console.log('Congrate\'s you have window seat ');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('11d');
checkMiddleSeat('11E');

const Check = "11B";
const S = ('B') || ('E');
if (S === Check.slice(-1)) {
  console.log("Learning new concept");
} else {
  console.log('Keep trying');
};
console.log(new String("aakash"));
console.log(new String('Aakash').length);
console.log(typeof (new String("aakash")));
console.log(typeof new String('Aakash').slice(1));
// console.log(typeof new String('jonas').slice(1));

/////// Coding Challenge 3
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3.
console.log(`"An event happened, on average, every ${90 / gameEvents.size} minutes" `);
// bonus question
const Schedule = [...gameEvents.keys()].pop();
console.log(Schedule);
console.log(`"An event happened, on average, every ${Schedule / gameEvents.size} minutes" `);
//4.
for (const [min, event] of gameEvents.entries()) {
  const time = min < 45 ? 'first half' : 'Second Half';
  console.log(`[${time}] ${min} :${event}`);
}

//// Maps Iteration
const question = new Map([['question', 'what is your best programming language in your potfolio?'],
[1, 'c'],
[2, 'C++'],
[3, 'javascrip'],
[4, 'Python'],
['correct', 3],
[true, 'Congratulation'],
[false, 'wrong answer'],
]);
console.log(question);
// convert Object into map
const Mapshours = new Map(Object.entries(openingHours));
console.log(Mapshours);
// Map into array
const intoArr = [...Mapshours];
console.log(intoArr);
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
//Quiz
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key} ${value}`);
  }
}
const ans = Number(prompt('enter your answer'));
console.log(ans);
console.log(question.get(question.get('correct') === ans));

//////  MAPS /// it store any data type as key value in object
const restu = new Map();
restu.set('name', 'kanak Dhaba');
restu.set(1, 'west Indian');
restu.set('location', 'Near smapla NH-10');
console.log(restu);
console.log(restu.get('name'));

restu.set('Categories', ['indian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('close', 23)
  .set(true, 'We are open: resturant')
  .set(false, 'we are close');
console.log(restu);
console.log(restu.has('location'));
console.log(restu.has(true));
console.log(restu.get('location'));
console.log(restu.get(1));
const time = 4;
console.log(restu.get(time > restu.get('Open') && time < restu.get('close')));
restu.delete(1);
// restu.clear();

console.log(restu);

// restu.set([1, 2], 'hummm');
// console.log(restu.get([1, 2]));//this show undefined because there is not same object of not same key location in Heap so that way
const arr = [1, 2];
restu.set(arr, "hummm");
console.log(restu.get(arr));//This is gona work there because there is same locatin in Heap memory)
console.log(restu.set(document.querySelector('h1'), 'heading'));
// console.log(restu);
// console.log(restu.size);




/////// Sets ////// No Index , NO duplication, morder ES6 Data str.
const orderset = new Set(['pasta', 'pasta', 'pizza', 'pizza', 'risotto']);
console.log(orderset.size);
console.log(orderset);
orderset.add('Garlic Bread');
console.log(orderset.has('Galic Bread'));
console.log(orderset.has('pasta'));
console.log(orderset.has('Garlic Bread'));
orderset.delete('pizza');
// orderset.clear();
console.log(orderset.size);
console.log(orderset);
// String
console.log(new Set('Aakash'));
console.log(new Set('Aakash').size);
//we alos pass a array in set
const arr = [1, 2, 34, 5, 3];
const nSet = new Set(arr);

console.log(nSet);
//we also get as array in output not in object form
const Numsetspread = [...new Set(arr)];
console.log(Numsetspread);
console.log(new Set('Aakash').size);
* /
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//1
// let num = 0;
// for( const name of game.scored){
//   num+=1;
//   console.log(`"Goal ${num} : ${name}"`);
// }
// Or by entries Method
for(const [i,player] of game.scored.entries()){
  console.log(`"Goal ${i+1} : ${player}"`);
};

// 2
const Values = Object.values(game.odds);
// console.log(properties);
let average = 0;
// average+=Values;
// console.log(average);
// average/=Values.length;
// console.log(average);
for(const odd of Values) average+=odd;
average/=Values.length;
console.log(average);
// 3
for(const [team,odd] of Object.entries(game.odds)){
  // console.log(team,odd);
  const strteam = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${strteam} : ${odd}`);
}
// bonus Question.
const scorers = {};
for(const player of game.scored){
  const bonus =scorers[player] ? scorers[player]++ : (scorers[player]=1);
  console.log(bonus);//doubt
}

/// Looping Objects: keys,values and Entries
const days = Object.keys(openingHours);
console.log(days);
for(const day of Object.keys(openingHours)) console.log(days);

console.log(`we are open on ${days} : ${days.length} `);

const value = Object.values(openingHours);
console.log(value);

const Entire = Object.entries(openingHours);
console.log(Entire);
for ( const [days,{open,close}] of Entire){
 console.log(`on ${days} we open at ${open} and close at ${close}`);
};

////// OPTIONAL CHAINING/// (?.) is uesd to prevent an error if in object,array and in method there is not exist that property so its show underfind not error in consloe
// restaurant.openingHours[weekdays[0]] = { open: 12, close: 18 };not working
if (restaurant.openingHours && restaurant.openingHours.weekdays) {
  console.log(restaurant.openingHours[weekdays[0]]?.open);// issues resolve because weekdays[0] have an exact location of mon
  console.log(restaurant.openingHours.mon);//here in openingHours the mon properties not have exact location in openingHours //ITS ISSUEEE
};
console.log(openingHours.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const close = restaurant.openingHours[day]?.close ?? 'closed';
  console.log(`on ${day} ,we close at ${close} today`);
};
///Methods
console.log(restaurant.order?.(0, 2) ?? 'no dish');
console.log(restaurant.orderKanak?.(0, 2) ?? 'no dish');
///////ARRAYS
const users = [{ name:'aakash', email:'ay614838@gmail.com'}];
const user = [];
console.log(user[0]?. name ?? 'array is emptys');//here we can't access two properties here like name and email
if(users.length>0) console.log(users[0].email);
else console.log('user array is empty');

///////The for-of loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item);
// for(const item of menu.entries()){ console.log(item);
// }
for(const [i,el] of menu.entries()){
  console.log(`here is index ${i+1} and here is element ${el} of an array of menu`);
}
// console.log(...menu.entrie ());

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);


const printGoals = function (...players){
  console.log(players);
  console.log( `${players.length} were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies','Muller');
printGoals(...game.scored);

team1>team2 && console.log(`${game.team2} is more likely to win`);

team1 < team2 && console.log(`${game.team1} is more likely to win`);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

///////Nullish :- NUllish coalescing operator  include Null and undefined (not 0 and " ")

restaurant.guestnum = '';
const guest = restaurant.guestnum || 10;
console.log(guest);

const guest1 = restaurant.guestnum ?? 10;
console.log(guest1);

//short Circuiting (&& and ||)
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.MyCareerpredection = false ;
const MyCareer = restaurant.MyCareerpredection || 'No';
console.log(MyCareer);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Aakash');
console.log('akash' && 7);

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderpizza) {
  restaurant.orderpizza('mushrooms', 'spinach');
}

restaurant.orderpizza && restaurant.orderpizza('mushrooms', 'spinach');

/// REST AND SPREAD OPERATOR , IN SPREAD THERE IS MULTIPLE VALUE OR PARAMETER WILL BE PASS IN FUNCTION AND OR EXTEND THE ARRAY IN UNPACK ARRAY LIKE WE CAN EXTEND INTO ONE ARRAT EXISTING OF MULTIPLE ARRAT

//// REST REST REST REST/////
///// BUT IN REST IN IT THIS IS OPPOSITE OF SPREAD IN THIS WE PACK AN ARRAY AND MULTIPLE PARAMETER WILL PASS IN FUCTION FOR GET OUTPUT IN THE FORM OF ARRAY(PACKED WAY) . here we containing the rest of element in array

const arr = [3,4,56,2,7,88];
const arr1=[4,5,...[2,5,67,]];//its spread because on right of = operator
const [a,b,...other]=arr;///it is passing on left of = operator
console.log(a,b,other);
console.log(arr1);

const [pizza,,risotto,...otherfood]=[...restaurant.starterMenu,...restaurant.mainMenu,];
console.log(pizza,risotto,otherfood);

//objects
const {sat,...weekdays}=restaurant.openingHours;
console.log(sat,weekdays);
console.log(weekdays);

// Functions
const add = function(...number){
  // console.log(number);
  let sum=0;
  for(let i=0;i<number.length;i++)
  sum+=number[i];
  console.log(sum);

}
add(3,5);
add(3,5,6,7);
add(3,5,5,8,9);
const x = [5,7,8,9,32,3];
add(...x);

restaurant.orderpizza('mushrooms','onion','olives','spinach','capsicum');
restaurant.orderpizza('mushrooms');
///// THE SPREAD OPERATOR ////////
const array = [1,23,4,5,6];
const newArr = [2,array[0],array[1],array[2],array[3],array[4]];
console.log(newArr);
const newArray = [10,20,...array];
console.log(newArray);//this is morder javascript

//Copy array
const mainMenuCopy = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(mainMenuCopy);

//ITRABLES:- arrays,maps,sets,strings Not in objects

const str = 'aakash';
const sepreateSTR = [...str,'','yadav'];
console.log(sepreateSTR);
console.log(...str);

const ingredients = [
// prompt('let\'s make pasta! ingredients1?'),
// prompt('ingredient 2?'),
// prompt('ingredients 3?')
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);


//// IN OBJECTS
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

const restaurantcopy = {...restaurant};
restaurantcopy.name='burger';
console.log(restaurantCopy);
console.log(restaurantcopy.name);
console.log(restaurant.name);*/
// console.log(newRestaurantcopy);
// const newRestaurantcopy=restaurantcopy;



////  DESTRUCTURING ARRAYS ///////
// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [a, , b] = restaurant.starterMenu;
// console.log(a, b);
// // [a,b]=[b,a]; THIS WAS GONA BE ONE METHOD
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

//form function there is 2 return value of different array;
// const [a,b] = restaurant.order(2,0);
// console.log(a,b);

//nested destructuring
// const nested = [2,3,[5,6]];
// const [i,,j]=nested;
// console.log(i,j);
// const [a,,[c,b]]=nested;
// console.log(a,c,b);


// //Default values
// const [p=0,q=0,r=1] = [8,9];
// console.log(p,q,r);

//// DESTRUCTURING OBJECTS ///////
/*restaurant.orderDelivery({
  time:'23:00',
  address:'kanak dhaba',
  mainIndex:2,
  starterIndex:2,
});
///for default value if value will pe pass over as arguments as compared both of these function for clear it in mind.
restaurant.orderDelivery({
  address:'foji dhaba',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: a, 
  openingHours: b, 
  categories: c, } = restaurant;
console.log(a, b, c);

//MUtating variables
let x =34;
let y =54;
const obj={x:23,y:24,z:67};
({x,y}=obj);//**********
console.log(x,y); 

////NESTED OBJECTS//
const {fri:{open:o,close:cl}} = openingHours;
console.log(o,cl); */
