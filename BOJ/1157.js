const fs = require('fs');
let a = fs.readFileSync('/dev/stdin').toString();

var cnt = new Array(26).fill(0);
var count = 0;
a= a.toUpperCase();

for (j in a) cnt[a.charCodeAt(j)-65]+=1 //filter 사용시 python count처럼 사용가능

var max = Math.max.apply(null, cnt)

for (j in cnt)
   if(cnt[j]==max) count+=1;

if(count>1) console.log('?')
else if(count==1) console.log(String.fromCharCode(cnt.indexOf(max)+65))