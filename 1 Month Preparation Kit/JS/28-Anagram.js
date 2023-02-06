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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    
    if (s.length % 2 != 0) {
        return -1;
    }
    let s1 = s.slice(0, s.length / 2);
    let s2 = s.slice((s.length / 2), s.length);

    let counter = 0;
    let size = s1.length;
    for (let i = 0; i < size; i++) {
        if (s2.indexOf(s1[0]) === -1) {
            counter++;
        }
        s2 = eraseChar(s2, s1[0]);
        s1 = eraseChar(s1, s1[0]);
    }
    
    return counter;
}

function eraseChar(s, char) {
    let i = s.indexOf(char);
    if (i === -1) {
        return s;
    }
    return s.slice(0, i) + s.slice(i + 1, s.length);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
