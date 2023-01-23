function processData(input) {
    //Enter your code here
    // split by '\n' to get t, n and a
    let lines = input.split('\n');

    // getting the array,
    // splitting it by space, 
    // making the elements numbers and 
    // sorting them from small to big number
    let arr = lines[2]
        .split(' ')
        .map(x => Number(x))
        .sort((a, b) => a - b);

    // finding the midIndex
    let midIndex = arr[Math.floor(arr.length / 2) - 1];

    // getting first half of the array without the mid element
    let firstHalfArr = arr.slice(0, midIndex);
    // getting second half of the array with the mid element and 
    // reversing the array
    let secondHalfArr = arr.slice(midIndex, arr.length).reverse();
    // making one array from the two halves
    let finalArr = [...firstHalfArr, ...secondHalfArr];

    // returning the array as a string
    console.log(finalArr.join(' '));
    return finalArr.join(' ');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
