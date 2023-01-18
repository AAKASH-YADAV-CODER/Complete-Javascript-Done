console.log('import one');
// import { cloneDeep } from 'lodash';
// this is type of name export
// import { favPlayer as FP, sports, list } from "./mine.js";
// FP("pardeep narwal", "narender hosier");
// console.log(sports);
// console.log(list);


// everything  wala concept
// import * as Fortest from './mine.js';
// Fortest.favPlayer("pardeep", "aakash");
// console.log(Fortest.sports);

//// Default export wala concept
import player, { list } from './mine.js';
player("pardeep", "Aakash");
console.log(list);

/////// Top level await //////////
/*
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getpost = async function () {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await result.json();
    console.log(data);
    return { title: data.at(-1).title, text: data.at(-1).body };
}
// not clear old class
// const lastpost1 = getpost();
// lastpost1.then(last => console.log(last));

// to clean the above await use here
const lastPost = await getpost();
console.log(lastPost);



//////// module Pattern ////
const mine2 = (function () {
    const sports = "kabaddi";
    const list = [];
    const kabadditeam = 12;
    const favPlayer = function (namefirst, namesecond) {
        list.push({ namefirst, namesecond });
        console.log(`${namefirst} and ${namesecond} is my favourite player`);
    }
    return { favPlayer, list, kabadditeam, sports };
})();
mine2.favPlayer("pardeep narwal");
mine2.favPlayer('aakash ydv');
console.log(mine2);
console.log(mine2.mine);//idher mine undefined hai quki ye top level module hai
*/

///// Common Js module
// export.favPlayer = function 




//////// Intoduction to NPM ////////////////

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const statment = {
    cart: [
        { product: 'pizza', quantity: 5 },
        { product: 'samosa', quantity: 3 }
    ],
    user: { loggedin: true },
}
const stateclone = Object.assign({}, statment);
const statedeepclone = cloneDeep(statment);
statment.user.loggedin = false;
console.log(stateclone);
console.log(statedeepclone);

// if (module.hot) {
//     module.hot.accept();
// }
/// Bundling with Parcel and script : npm i parcel@1.12.4

