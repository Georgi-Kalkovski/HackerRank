'use strict';

const fs = require('fs');

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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    // Make array from the string
    let arr = s.split('');
    
    // Making valid ASCII update without repeating
    while (k >= 26) {
        k -= 26;
    }
    
    // Going trough the whole array
    for (let i = 0; i < arr.length; i++) {

        // current char
        let char = arr[i];
        // current char as ASCII code + the rotation
        let charCode = char.charCodeAt(0) + k;

        // check if char is lowercase
        if (char.match(/^[a-z]*$/)) {
            // if charcode reaches Z, return from start
            if (charCode > 122) {
                charCode -= 26;
            }
            // replace current char in array with the updated char
            arr[i] = String.fromCharCode(charCode);
            // check if char is uppercase
        } else if (char.match(/^[A-Z]*$/)) {
            // if charcode reaches Z, return from start
            if (charCode > 90) {
                charCode -= 26;
            }
            // replace current char in array with the updated char
            arr[i] = String.fromCharCode(charCode);
        }
    }
    // make string from the array and return it
    return arr.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
