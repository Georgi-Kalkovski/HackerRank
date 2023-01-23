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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here

    //sorting array from smaller to bigger numbers
    ar = ar.sort((a, b) => a - b);
    //pairs counter
    let pairs = 0;
    
    while (true) {
        //check if array have enough socks to make pair
        if (ar.length > 1) {
            //getting first two socks from the array
            let leftSock = ar[0];
            let rightSock = ar[1];
            
            //check if first two socks are equal, 
            //if correct add +1 to the pairs counter and remove the socks from the array
            if (leftSock == rightSock) {
                pairs++;
                ar.splice(0, 2);
            } else {
                //when socks not equal, remove just the first sock
                ar.splice(0,1);
            }
        } else {
            //if not enough socks, show the pairs counter
            return pairs;
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
