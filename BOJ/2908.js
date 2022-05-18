let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num1 = input[0];
let num2 = input[1];

num1 = Number(num1.split('').reverse().join(''));
num2 = Number(num2.split('').reverse().join(''));

console.log(num1 > num2 ? num1 : num2)

//js 변수 선언 
// var -> 변수 초기값 지정하지 않을 경우 변수는 값이 설정될 때까지 undefined 값을 가진다
// let -> 변수가 선언된 블록, 구문 또는 표현식 내에서만 유효한 변수를 선언
// const -> 블록범위의 상수 선언. 값 재할달 x 다시 선언x 처음 선언에 초기화 필수 (보통 대문자를 사용해 선언)
