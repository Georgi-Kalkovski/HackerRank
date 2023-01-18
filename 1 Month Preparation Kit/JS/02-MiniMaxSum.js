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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here

    let numbers = arr.sort((a, b) => a - b);
    let minNum = 0;
    let maxNum = 0;

    for (let i = 0; i < 5; i++) {
        if(i > 0) {
            maxNum += numbers[i];
        }
        if(i < 4) {
            minNum += numbers[i];
        }
    }

    console.log(minNum + ' ' +maxNum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
