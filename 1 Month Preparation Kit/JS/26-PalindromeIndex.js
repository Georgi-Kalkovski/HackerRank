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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {

    const isPalindrome = (s) => {

        for (let i = 0; i < s.length / 2; i++) {
            if (s[i] != s[s.length - i - 1]) return false;
        }

        return true;
    }

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] != s[j]) {
            if (isPalindrome(s.substring(i + 1, j + 1))) {
                return i;
            }
            else if (isPalindrome(s.substring(i, j))) {
                return j;
            }
            else return -1;
        }
        else {
            i++, j--;
        }
    }

    return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
