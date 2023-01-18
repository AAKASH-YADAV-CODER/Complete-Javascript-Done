'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (err) {
  countriesContainer.insertAdjacentText('beforeend', err);
}
const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new error(`!wrong response so${errorMsg} give correct url ${response.status}`);
    return response.json();
  })
}
///////////////////////////////////////
// first XMLhttpRequest 
/*
const getcountriesdata = function (countries) {
  const req = new XMLHttpRequest();
  req.open('GET', `https://restcountries.com/v2/name/${countries}`);
  req.send();
  req.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
  });
};
getcountriesdata('portugal');

//////////////////////////////
// Welcome to callback hell
function getCountryAndNeighbour(country) {
  // first ajax call
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // render country first
    renderCountry(data);

    // Get neighbour country (2)
    // const [neighbour] = data.borders;
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour("usa");
// callback hell mean eek hi function mai multiple callback AJAX call
// like example of settimeout wala
setTimeout(() => {
  console.log("first call");
  setTimeout(() => {
    console.log("second call");
    setTimeout(() => {
      console.log("third call");
    }, 3000);
  }, 2000);
}, 1000);


///////// fetch and promises
// const req = fetch('https://restcountries.com/v2/name/usa');
// console.log(req);
const getcountriesdata = function (countries) {
  getJSON(`https://restcountries.com/v2/name/${countries}`, 'country not found')
    .then(data => {
      renderCountry(data[0])
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new error(`No neighbout exist ${neighbour}`);
      //country 2
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'country not found');
    })
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
      console.error(`${err} khrab hogya kuch0`);
      renderError(`something went wrong ${err.message} try again`);
    }).finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getcountriesdata("portugal");
});
*/
// ///////////////////////////////////////
// Consuming Promises :- cleaner way of AJAX one fetch( ) second then isme hum respone of url and third mai hum eek or then usme render kiya hai isme tho but ye return wala function hai 
// Chaining Promises :- neighbour wala kiya tha isme humne matlab tho bar consum kiya promises ko
// Handling Rejected Promises : - internet error se hota hai ye and isme catch function use krte hai agar koi error hai tho console krva do    ** finally function mai hume apna finall code dena hotta hai like whatever be happen is code but that particular code have to work 
// Throwing Errors Manually :- inbetween koi error aa jaee like response wale me and neighbout wale mai and isko krtee hai throw new error wale tarike se

///////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lan) {
//   fetch(`https://geocode.xyz/${lat},${lan}?geoit=json
// `).then(res => {
//     if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//     console.log(res);
//     return res.json();
//   }).then(data => {
//     console.log(data);
//     console.log(`you are in ${data.city} and name of country is ${data.country}`);
//     return fetch(`https://restcountries.com/v2/name/${data.country}`)
//   }).then(res => {
//     if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//     return res.json();
//   })
//     .then(data => {
//       renderCountry(data[0])
//     }).catch(err => console.error(`${err.message}`))
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);





/* The Event loop in practice
console.log("AAkash sbase phele set kregaa");
setTimeout(() => console.log("bye"), 0);
Promise.resolve("yes promis").then(res => console.log(res));
Promise.resolve("second wali promise").then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) { }
  console.log(res);
});

//// building a promise  //

const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() > 0) {
      resolve("Win");
    } else {
      reject('lose');
    }
  }, 2000)
});
lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));
// idher ye new promise yaad rakhna
/// Promisifying the setimeout
const wait = function (second) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, second * 1000);
  })
};
wait(1).then(() => {
  console.log("1st call");
  return wait(1);
}).then(() => {
  console.log('2 second passed');
  return wait(1);
})
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));
Promise.resolve("abx").then(x => console.log(x));
Promise.reject(new Error('problme')).catch(x => console.error(x));

//// Promisifying the Geolocation
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    )
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));
const whereAmI = function () {
  getPosition().then(pos => {
    const { latitude: lat, longitude: lan } = pos.coords;
    fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`).then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      console.log(res);
      return res.json();
    }).then(data => {
      console.log(data);
      console.log(`you are in ${data.city} and name of country is ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`)
    }).then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
      .then(data => {
        renderCountry(data[0])
      }).catch(err => console.error(`${err.message}`))
  });
};
btn.addEventListener('click', whereAmI);
*/
///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
const wait = function (second) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, second * 2000);
  });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imagepath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imagepath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    })
    img.addEventListener('error', function () {

      reject(new Error('image not found'));
    })
  });
}
let currentImg;
createImage('img/img-1.jpg')
  .then((img) => {
    currentImg = img;
    console.log('1st img is loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg')
  }).then((img) => {
    currentImg = img;
    console.log('image 3 load');
  })
  .catch(err => console.error(err));



////////// Consuming promises with asyn/await and Error handling with Try .... Catch

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `you are in ${dataGeo.city}, ${dataGeo.country}`
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

/////// Returning value from Async functions
console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
/// ******** alway's remember that promise have the returning value and also then function and catch and final and try catch





////////// Running promises in parllel
const get2countrydata = async function (c1, c2) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // console.log([data1.capital, data2.capital]);

    const data = await Promise.all([getJSON(`https://restcountries.com/v2/name/${c1}`), getJSON(`https://restcountries.com/v2/name/${c2}`)]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
get2countrydata('canada', 'portugal');

*/
///////////// Other Promise Combinators: race, allSettled and any
// Promise.race

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/italy`),
//   getJSON(`https://restcountries.com/v2/name/egypt`),
//   getJSON(`https://restcountries.com/v2/name/mexico`)])
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeout(5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));
// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.any [ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));



///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/


