let n = parseInt(prompt('Enter n: '));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt('Enter element: ')));
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}