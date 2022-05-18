const fs = require('fs');
let a = fs.readFileSync('/dev/stdin').toString();

let firstN = Number(a); 
let num = firstN;
let cnt = 0;

while(1) {
    let ten = ~~(num/10); // ~~(A/B) == Math.floor(A/B)
    let second = num%10; 

    num = (second*10)+ (ten + second)%10; 
    cnt++;

    if(num == firstN) break;
}

console.log(cnt);