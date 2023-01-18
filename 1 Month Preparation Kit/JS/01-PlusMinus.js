'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let posCounter = 0, negCounter = 0, zeroCounter = 0;
    let arrLength = arr.length;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0.0) {
            posCounter++;
        };
        if (arr[i] < 0.0) {
            negCounter++;
        };
        if (arr[i] == 0.0) {
            zeroCounter++;
        };
    }
    
    console.log((posCounter/arrLength).toFixed(6));
    console.log((negCounter/arrLength).toFixed(6));
    console.log((zeroCounter/arrLength).toFixed(6));


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
