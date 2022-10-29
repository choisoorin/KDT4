// // 함수선언문
// function helloWorld1(){
//     console.log('helloworld 1')
// }

// function helloWorld2(){
//     return 'helloworld 2'
// }


// helloWorld1();
// helloWorld2();
// console.log(helloWorld2());


// // 함수표현식
// let sayHello1 = function(text){
//     console.log(`안녕 ${text}`);
// }

// sayHello1('최수린');
// sayHello1('allie');


// // console.log(sayHello2('수린')); // 화살표함수 오류

// // 화살표함수
// let sayHello2 = (text)=>{
//     return `hi, ${text}`
// }

// console.log(sayHello2('수린'));


// // 

// function add(a,b){
//     return a+b;
// }

// console.log(add(22,33));

// // 실습
// function square(a){
//     console.log(a**2);
// }

// square(4);
// square(11);
// square(5);

// function multifly(x,y){
//     return x*y;
// }

// console.log(multifly(3,7));
// console.log(multifly(2,2));

// function count(){
//     let count2=7;
//     console.log(count2);
// }


function rectangle(a,b){
    console.log(a*b)
}
function triangle(a,b){
    console.log((a*b)/2);
}
function circle(a){
    console.log((a/2)*(a/2)*3.14);
}

rectangle(10,5);
triangle(4,3);
circle(10);

console.log(3 !== '3')
console.log((8 / '2') !== 4)
console.log(0 === false)
console.log(('1' + 2) === 12)
