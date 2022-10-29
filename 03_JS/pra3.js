//실습1
arr1 = [];
for (let i = 0; i <= 100; i++) {
  arr1[i] = i;
}
// console.log(arr1);

sum1 = 0;
for (i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);

sum2 = 0;
for (let el of arr1) {
  sum2 += el;
}
console.log(sum2);

sum3 = 0;
arr1.forEach(function (el, index, arr) {
  sum3 += el;
  //   console.log(index);
  //   console.log(arr);
});
console.log(sum3);

// 실습2
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = [];
let diff = [];

//1 for문
for (let i = 0; i <= fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);

let same2 = fruits1.filter((fr) => fruits2.includes(fr));
let diff2 = fruits1.filter((fr) => !fruits2.includes(fr));

console.log(same2);
console.log(diff2);

