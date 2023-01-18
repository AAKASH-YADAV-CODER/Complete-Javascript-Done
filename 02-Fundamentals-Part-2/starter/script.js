// strict part is like sili mistake error in variable name and use varialbe as key name that is already decleared
// function syntax
/*function fruit(apple,banana){
    console.log('apple banana');
    const juice= `'juice with ${apple} and ${banana}'`;
    return juice;
}
const applejuice=fruit(4,5);
console.log(applejuice);
//here varible mai store karke console krengetho return value milegi but directly callkrenge tho fuction ki console milegi
function failer(loser){
    return `lifeisNothing+${loser}`;
}
const print_it=failer("give_struggle");
console.log(print_it);//declaration
const failer1=function(losr){
    return `lifeisNothing${losr}`;
}
const printit=failer1("givehardstruggle");
console.log(printit);//function expression*/
//arrow functions krna hai
//calling function into function
//review function 
/*const calcAge=function(birthyear){
    return 2022-birthyear;
}
const retirementfromSE=function(birthyear , firstname){
    const age=calcAge(birthyear);
    const retirement=65-age;
    const print=`${firstname} will be retired in ${retirement}`
    return print;
    return  ;
    // if(retirement>0){
    //     console.log(`${firstname} is retire in ${retirement}`);
    //     return retirement;
    // }else{
    //     console.log(`${firstname} is already retired`);
    //     return -1;
    // }
}
// console.log(calcAge(2003));
console.log(retirementfromSE(2003,'Aakash'));
console.log(retirementfromSE(1950 , 'oldman'));
// Arrow function
const calcAge1=birthyear=>2023-birthyear;
const printit=calcAge1(2003);
console.log(printit);
// challange
const averageofteam=(a,b ,c) =>(a+b+c)/3;
console.log(averageofteam(2,5,6));

// Test case
let scoreDolphins = averageofteam(44, 23, 71);
let scoreKoalas = averageofteam(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins...');
    }
  }
  checkWinner(scoreDolphins, scoreKoalas);
  checkWinner(500,100);
//   Intro to array basically vase hi hote hai but isme different type of data type ko store kr sakte hai we use .length of length and unshift operator for add element and shift for remove first element &&&&& push and pop we know very well && index && include &&
const friends=['nobady','nobody','alone','tired'];
console.log(friends);
friends.shift();
console.log(friends);
friends.unshift('tired');
console.log(friends);
friends.push('Aakash😄');
console.log(friends);
// friends.pop();
console.log(friends);
console.log(friends.length);
console.log(friends.indexOf('Aakash😄'));
console.log(friends.includes('tired'));
// challange test 2//
const bills=[125,555,44];
const calcTip=function(bill){
  return bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
}
//const=calctip=bill=>bill>=50 && bill<=300 ?  bill*0.15 :bill*0.2;
const tip=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total=[bills[0]+tip[0],bills[1]+tip[1],bills[2]+tip[2]];
console.log(tip,total);
//OBJECTS isme hum different data type store kr sakte hai Array hum use krte hai order data ke liye but object unordered data for storing key value pair
const aakaskarray=[
  'Aakash',
  'yadav',
  8708437952,
  'wela'
];
const Aakash={
  firstname:'Aakash😄',
  lastname:'yadav',
  phoneNo :8708437951,
  kam:'wela'
};
// Dot vs bracket Notation
const Aakash={
  firstname:'Aakash😄',
  lastname:'yadav',
  phoneNo :8708437951,
  kam:'wela '
}
// console.log(Aakash);
// console.log(Aakash.firstname);
// console.log(Aakash['firstname']);
const namee='name';//here we breake variable frome object and store in another variable for console this gonna not work in dot
console.log(Aakash.kam + namee);//its only do what is actually define
// console.log(Aakash.'first'+namee);//its not working
console.log(Aakash['last'+ namee]);
console.log(Aakash['first' + namee]);
const interested=prompt('what do you wann know about me? choose between firstname,lastname,phoneNO,kam');
// console.log(Aakash.interested);//its not working
// console.log(Aakash[interested]);//thats why we use it
if(Aakash[interested]){
  console.log(Aakash[interested]);
}
else{
  console.log('enter the given value Invalid input');
}
//Remeber one thing always whenever you use any one output for particular expriement so plz clear out output function like in above case
//if we wanna add anything in class with the help of dot and bracket notation
Aakash.location='rohad';
Aakash['path']='rohad';
console.log(Aakash);
////////////////////Object Methods is basically defined function in calss for futher operation's Remember that use , comma after every datamember and one use declare any value and property don't repeat it for ideal situation **** one more think is "This operator little bit exiciting and also puzzle to under stand"  So thing i learned about this function is without this operation the function only access the argument during console but after declaring this operation it use the class value**
const Aakash={
  firstname : 'Aakash😄',
  lastname : 'Yadav',
  birthyear : 2003,
  friends : ['prashant','sahil','Deepanshu','manoj','suhil'],
  drivinglicence : true,
  calcage:function(){
    // console.log(this);
    this.age=2022-this.birthyear;
    return this.age;
    // birthYear
  },
  getSummary: function(){
    return `${this.firstname} is a ${this.calcage()} year old , and he has ${this.drivinglicence ? 'a': 'no'} driver's license.`;
  }
};
// console.log(Aakash.calcage(this));//This is by dot notation
console.log(Aakash['calcage']());
console.log(Aakash.age);
console.log(Aakash.getSummary());


//challange 3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 75,
  height: 1.5,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
console.log(mark.calcBMI(),john.calcBMI());
if(mark.bmi>john.bmi){
  console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`);
  // return;
}else{
  console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`);
  // return;
}
////Iteration : The for loop like as other programming language but int js there is only two data type that is let and const so do by this get the value of typeof and bool value etc........******
for (let i = 0; i < 10; i++) {
  console.log(`"lift it ten time ${i}"`);;
}
///isme switch and for and while loop hota hai bss //
const age = [];
for (let i = 0; i < years.length; i++) {
  console.log(years[i], typeof (years[i]));
  // age = years[0];
  // age[i] = typeof (years[i]);
  age.push(years[i]);
}
console.log(age);
//continue aaate hi usko hi print krna hai and break aatai hi trminate hoo jana hai
///continue and breakloop
const years = [1990, 1998, 2001, 2003, "aakash", "yadav", "NOtruefrined", "feeling_low"];
for (let i = years.length; i >= 0; i--) {
  if (typeof (years[i]) === 'string') {
    continue;
  }
  // console.log(years[i], typeof (years[i]));
}
for (let i = years.length; i >= 0; i--) {
  if (years[i] === "1990") {
    break;
  }
  console.log(years[i], typeof (years[i]));
}
///WHILE LOOP 
let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
// console.log(dice);
// }
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`loop is about t end..`);
    break;
  }
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);
// console.log(tip);
const calcAverage = function (Array) {
  let sum = 0;
  for (let i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  return sum / Array.length;
}
console.log(calcAverage([2, 2, 65]));
console.log(calcAverage(total), calcAverage(bills));*/
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}