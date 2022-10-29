// 문자열 관련 메소드
let str1 = "Strawberry Moon";
let str2 = "     Strawberry Moon   ";

console.log(str1[1]); // 배열 접근 가능
console.log(str1[0] + str1[3]);
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

console.log(str1.length);
console.log(str2.length);

console.log("Strawberry".toUpperCase());
console.log("Strawberry".toLowerCase());
let str3 = str2.trim(); // trim : 문자열 양끝 공백 없애기
console.log(str3);
console.log(str3.length);

let fruit = "applemango";
let msg1 = "Wow! It is so amazing!!";

// indexOf()
console.log(fruit.indexOf("a"));
console.log(fruit.indexOf("ple"));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("z"));

// charAt()
console.log(fruit.charAt(8));

// slice
console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-1));

// replace
console.log(msg1.replace("Wow", "ah"));
console.log(msg1.replace("i", "ah"));
console.log(msg1.replaceAll("i", "a"));
// 예제 2022. 10. 27 => 2022-10-27
console.log("2022.10.27".replaceAll(".", "-"));

// repeat
console.log("ㅎ".repeat(10));

// split
let hello = "hello";
console.log(typeof hello); //string
hello = hello.split("");
console.log(typeof hello); //object

// 실습
let today = "2022.10.27";
console.log(today.split("."));

// 배열관련 함수
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

console.log(arr1);
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr2.unshift("cat");
console.log(arr2);
arr2.shift();
console.log(arr2);
// arr2.shift();
// console.log(arr2);

// arr1[5] = 8;
// console.log(arr1);

// include -> true / false 반환
console.log(arr1.includes(3));
console.log(arr1.includes(7));

// indexOf
console.log(arr2.indexOf("quakka"));

// reverse - 기존 배열 바꿔줌
arr1.reverse();
console.log(arr1);

// join
let str4 = arr1.join("");
console.log(str4);

// for of / forEach
arr4 = [1, 2, 3, 4, 5];
let alpabets = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr4[i]);
}
for (let number of arr4) {
  console.log(number);
}
for (let alpabet of alpabets) {
  console.log(alpabet);
}
alpabets.forEach(function (el, index, arr) {
  console.log(el);
  console.log(index);
  //   console.log(arr);
});

//
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
//기본 for 문
for (let i = 0; i < arr4.length; i++) {
  sum1 = sum1 + arr4[i];
}

// for of
for (let el of arr4) {
  sum2 = sum2 + el;
}

// forEach

console.log(sum1);
console.log(sum2);
console.log(sum3);

//filter
/* 특정 조건에 해당하는 모든 요소들을 새로운 배열에 저장시켜줍니다. */
arr2.filter(function (word) {
  return word.length === 6;
});
console.log(arr2);

let sixAlphabets = arr2.filter(function (word) {
  return word.length === 6;
});
console.log(sixAlphabets);

// map
/* 배열의 모든 요소에 특정 조건을 걸어서 변경시켜줍니다
기존의 배열은 바뀌지 않고, 새로운 배열에 저장됩니다. */
let arr5 = arr1.map(function (num) {
  return num * 3;
});
console.log(arr5);
console.log(arr1);

// find
/* 배열 내부에서 특정 조건에 해당하는 값을 찾습니다.
  조건에 해당하는 값이 여러개라면
  가장 앞의index에 해당하는 값을 반환합니다.  */
let cute = arr2.find(function (el) {
  return el.length === 6;
});
let cute2 = arr2.find((el) => {
  return el.length === 5;
});
let cute3 = arr2.find((el) => el.length === 7);
console.log(cute);
console.log(cute2);
onsole.log(cute3);
