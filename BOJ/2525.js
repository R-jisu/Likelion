let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = input[0].split(' ').map(Number)

let num1 = N[0];
let num2 = N[1];
let second = Number(input[1]);
let addsecond = num2 + second;

while (addsecond >= 60 || num1>=24)
{       
    if (addsecond >= 60) {
        num1++; addsecond-=60;
    }
    if(num1 >= 24) {
        num1-=24;
    }
}

console.log(num1 + ' ' + addsecond);
