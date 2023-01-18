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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    a = a.sort((a, b) => a - b);
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);

        if (i == 0) {
            if (a[i] != a[i + 1]) {
                return a[i];
            }
        }
        if (i > 0 && i < a.length)
            if (a[i] != a[i + 1] && a[i] != a[i - 1]) {
                return a[i];
            }
        if (i == a.length)
            if (a[i] != a[i - 1]) {
                return a[i];
            }
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
