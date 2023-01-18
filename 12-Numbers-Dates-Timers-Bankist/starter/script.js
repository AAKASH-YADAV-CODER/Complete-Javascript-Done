'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-09-14T17:01:17.194Z',
    '2022-09-10T23:36:17.929Z',
    '2022-09-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'hi', // de-DE//
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2022-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
/// Formats date in as acc. own choice and internationlization
const formatMovementDate = function (date, local) {
  const diffBetwdays = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = diffBetwdays(new Date(), date);
  // console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterdat';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  const day = `${date.getDay()}`.padStart(2, 0);
  const month = `${date.getMonth()}`.padStart(2, 0);
  const year = `${date.getFullYear()}`;
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(local).format(date);
}



//////Format NUMBER in Intl according to country
const formatCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value);
};

// movemnts
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatCurr(Math.abs(mov), acc.locale, acc.currency)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCurr(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCurr(Math.abs(out), acc.locale, acc.currency)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCurr(interest, acc.locale, acc.currency)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
/// This logout timer function by jonnas isme mrko bate clear nahi hoi
// const startLogOutTimer = function () {
//   const tick = function () {
//     const min = String(Math.trunc(time / 60)).padStart(2, 0);
//     const sec = String(time % 60).padStart(2, 0);

//     // In each call, print the remaining time to UI
//     labelTimer.textContent = `${min}:${sec}`;

//     // When 0 seconds, stop timer and log out user
//     if (time === 0) {
//       clearInterval(timer);
//       labelWelcome.textContent = "Log in to get started";
//       containerApp.style.opacity = 0;
//     }

//     // Decrease 1s
//     time--;
//   };

//   // Set time to 5 minutes
//   let time = 120;

//   // Call the timer every second
//   tick();
//   const timer = setInterval(tick, 1000);

//   return timer;
// };


/// Function for logout timer  meri wale mai bhoot tiny mistake hai jo tick wale function se hoga like above and usem tick har eek sec ke baad call ho rha hai  but maine is also working good
const startlogoutTimer = function () {
  ///creating time 
  let time = 30;
  // after 1 sec showing UI of timer
  const timer = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String((time % 60)).padStart(2, 0);
    labelTimer.textContent = `${min} : ${sec}`;

    // if time=0 logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // decrement of time 
    time--;
  }, 1000);
  return timer;
}
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

///Fake login-
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// const now = new Date();
// const opt = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric',
//   weekday: 'short'
// };
// labelDate.textContent = new Intl.DateTimeFormat('hi-IN', opt).format(now);


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    //current date
    const now = new Date();
    // format date
    const option = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      weekday: 'long',
    };
    // const local = navigator.language;
    // console.log(local);
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, option).format(now);

    /// old we for doing and above one is acc to country we can select
    // const day = `${now.getDay()}`.padStart(2, 0);
    // const month = `${now.getMonth()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // logout timer
    if (timer) clearInterval(timer);
    timer = startlogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // adding to movements
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //reset timer
    clearInterval(timer);
    timer = startlogoutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      //current date
      currentAccount.movementsDates.push(new Date().toISOString());

      // reset timer
      clearInterval(timer);
      timer = startlogoutTimer();
      // Update UI
      updateUI(currentAccount);
    }, 2000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
//// CONVERSION AND CHECKING NUMBER //////
console.log(23 === 23.0);
console.log(23.0 === 23);// mean float int double all come in Number


///// This is tricky or you in my word in wierd think javascrip ruby and php
// Base 10  0 to 9 3/10 = 3.3333333
// Base 2   0,2 0.1 + 0.2 = 0.3000004 but we compare 0.3 it show false  in both representation there is diffrent calculation in fraction
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);


///// converting number
console.log(Number('23'));
console.log(+('3454'));

// Parsing means reading by parseInt parsFloat etc
console.log(Number.parseInt('34rem'));
console.log(Number.parseFloat('34.0rem'));

// is Nan = is not a nubmer
console.log(Number.isNaN('34'));
console.log(Number.isNaN(+'34x')); //becaus is not a number and reamaig other are no so that's why
console.log(Number.isNaN(+'34'));
console.log(Number.isNaN(34));
console.log(Number.isNaN(34 / 0));
// Nan is for checking no but good one is isFinite
/// isFinite
console.log(Number.isFinite('78'));
console.log(Number.isFinite('78x'));
console.log(Number.isFinite(+'78'));
console.log(Number.isFinite(78));
console.log(Number.isFinite(78 / 0));
// as above Nan its show vice-versa result in output its show only true if the value is acutully an number

// isInteger
console.log(Number.isInteger(42));
console.log(Number.isInteger('42'));
console.log(Number.isInteger(+'42.0'));
console.log(Number.isInteger(42 / 0));

/// Math and rounding
console.log(Math.sqrt(625));
// or
console.log(625 ** (1 / 2));
console.log(25 ** (1 / 3));


console.log(Math.max(23, 4532, 67, 727, 3));
console.log(Math.min(23, 4532, 67, 727, 3));

console.log(Math.trunc(243.53));
console.log(Math.abs(-243.5));

console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('13') ** (1 / 2));
console.log(Math.trunc(Math.random() * 9) + 1);

const randomINY = (max, min) => Math.trunc(Math.random() * (max - min) + 1);// isme inparameter k andar pass krenge max and min show vo phele solve honge then humke uske andar ki range mai value milegi like isme i get 23 so 0 to 23 ke biche mai hi answer milega

console.log(randomINY(45, 23));

///rounding
console.log(Math.ceil(23.4));
console.log(Math.round(23.4));
console.log(Math.floor(23.4));
console.log((23.4).toFixed(3));// this convert into string
console.log(Math.floor(23.99));
console.log(Math.round(23.90));
console.log((2).toFixed(5));


///// Remainder
console.log(8 % 2);
console.log(8 % 3);
console.log(8 % 5);


console.log(8 / 2);
console.log(8 / 3);
console.log(8 / 4);

const isEven = (ele) => ele % 2 === 0;
console.log(isEven(4));
console.log(isEven(46));
console.log(isEven(468));
console.log(isEven(4689));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (ele, i) {
    if (i % 2 === 0) ele.style.backgroundColor = 'lightgreen';
    if (i % 3 === 0) ele.style.backgroundColor = 'blue';
    if (i === 1) ele.style.backgroundColor = 'lightblack';
    if (i === 5) ele.style.backgroundColor = 'yellow';
  });
});



//// Numeric operators
console.log(4508_900_000_000);
console.log(45.08_900_000_000);
console.log(Number.parseFloat('45.0_8_900_000_000'));
console.log(23.6_66);
*


///// Working with BigInt
// in javascript only store this no. beyond this will create an unsafe no.
console.log(2 ** 53 - 1);

// these are unsafe to use or precegence loses
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 7);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 5);

// so to resolve this in mordernES22 create an primitive value is non to bigint  lets do how it work
console.log(89217498745756597567768237527n);
console.log(BigInt(56446665));

// Operation
console.log(912479317287457n + 13741324624727427n);
const x = 27349683264629469n;
const y = 49823164982364;
console.log(x + BigInt(y));
console.log(x + ' a huge amount');

// we cann't do this sqrt
// console.log(Math.sqrt(25n));

// Expectation
console.log(23n >= 23);
console.log(23n > 23);
console.log(23n == '23');/// because left side is big int and right normal value
console.log(23n <= 23);
console.log((23n < 23));
console.log(typeof (34n));
console.log(13 / 2);
console.log(13n / 2n);



//////  creating Dates
const now = new Date();
console.log(now);
console.log(new Date('Jun 20 2022, 22:05:23'));
console.log(new Date('Dec 15,2016'));
console.log(new Date(2022, 13, 5, 18, 30, 5));
console.log(new Date(2000, 15, 12));


console.log(new Date(0));
console.log(new Date(4 * 60 * 28 * 1000));

const futuretime = new Date(2025, 1, 15, 18, 30, 25);
console.log(futuretime);
console.log(futuretime.getFullYear());
console.log(futuretime.getMonth());
console.log(futuretime.getDay());
console.log(futuretime.getDate());
console.log(futuretime.getHours());
console.log(futuretime.getMinutes());
console.log(futuretime.getSeconds());


console.log(futuretime.toISOString());

// we acces time stamp
console.log(futuretime.getTime());
console.log(Date(1739624425000));
console.log(Date.now());
console.log(Date(1662731060884));

console.log(futuretime.setFullYear(2030));
///// ase hi hum set kr sakte hai day hours year seconds min month etc.

// console.log(Date(1897390825000));
console.log(futuretime);


//// Operstion in dates
const futurdateNo = new Date(2023, 3, 15);
console.log(+(futurdateNo));

console.log(new Date());


////
///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'INR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('HINDI: ', new Intl.NumberFormat('hi', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);


////////// SetTimeOut and SetInterval /////
const FORmeTIMER = setTimeout(() => console.log(`Hi i am learning an javascrip so its print in 2sec`), 2000);
console.log(FORmeTIMER);

const ingredients = ['spinach', 'olvies'];
setInterval(function (ingi1, ingi2) {
  console.log(` I get Pizza of ${ingi1} and ${ingi2} , repeatedly . So I will start shop of pizza`);
}, 3000, ...ingredients);

// creating clock
const clock = function () {
  let now = new Date();
  setInterval(function () {
    const min = now.getMinutes();
    const hour = now.getHours();
    console.log(`${hour} : ${min}`);
    min++;
  }, 60000);
};
clock(); // not working

*/

///////// implementing countdown timer

// phele isme function create kro set timer log out Ka
// then uske baad time set kro 50 or what ever 
// thirdly setinterval for every one sec and then 
// min and sec creat kro divide and module wala funda bhi hai yha pe 
// joki maine dyhan nahi diy need mai tha  
// fhir labeltimer mai min and sec ko templet literals se cl kro 
// after that if timer === 0 ho jaye opacity 0 kro and labelWelcome mai resest  msg and clearInterval(timer) kr do 
//   at last time-- kr do 
// and fhir function mai call kr do login transfer and loan 
// one more thing is to remember is that phele clearInterval(timer)*** kro jisseki time mix na hoo different accoutn maii and reset ho jaye time loan and transfer k time
