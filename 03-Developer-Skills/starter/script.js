// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temp) {
    const min = temp[0];
    const max = temp[0];
    for (let i = 0; i < temp.length; i++) {
        const curTemp = temp[i];
        if (typeof (temp !== 'number')) continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
}
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//for adding two arr we use concat functi0n
const mergearr = function (arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergearr([1, 2, 3, 4], [5, 6, 7, 8]));
//Debugging with the console and breakpoints debug is usually use to find error in program three step to do it first is identify and then find after it finally fix that problem
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: 'celsius',
        value: Number(prompt('degree celsuis')),
    };
    console.log(measurement.value);
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());
// console.log(typeof (prompt()));
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log('...' + str);
};
printForecast(data1);

