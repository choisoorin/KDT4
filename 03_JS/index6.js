// for(변수 선언(초기값)) ; 조건식(어디까지 증/감) ; 증감){
//     반복코드
// }

// for문
for(let i=0 ; i<10 ; i++){
    console.log('안녕',i);
}

console.log('------');

for(let i=0 ; i<10 ; i+=2){
    console.log(`안녕 ${i}`);
}

for(let i=0 ; i<10 ; i+=3){
    console.log('3씩 늘어나겠네요!!',i);
}

for(let i=1 ; i<=5 ; i++){
    console.log(i);
}

for(let i=0 ; i<5 ; i++){
    console.log(i+1);
}

for(let i=1 ; i<6 ; i++){
    console.log(i);
}

for(let i=5 ; i>0 ; i--){
    console.log(i);
}

console.log('-----');

// 실습 : 1~n까지의 합 구하기
let n=11;
let sum1=0;

for(let i=1 ; i<n+1 ; i++){
    sum1+=i;
}
console.log(sum1);

// 배열과 함께 쓰는 for문
let fruits=['apple', 'mango', 'orange', 'banana'];
console.log(fruits.length); //4

for(let i=0 ; i< fruits.length ; i++){
    console.log(fruits[i]);
}

let score= [99, 99, 98, 85, 77];
let sum=0;
for(let i=0; i<score.length; i++){
    sum= sum+score[i];
}
console.log(sum/score.length);

avg = sum / score.length;
console.log(avg);


// if문과 for문
// 0~20까지 짝수일 때 합을 구하기
let sum2=0;
for(i=0; i<=20 ; i++){
    if(i%2==0){
        sum2+=i;
    }
}
console.log(sum2);

console.log('---');

// while문
let n2=1;
while(n2<=5){
    console.log(n2);
    n2++;
}

let n3=9;
while(n3>=4){
    console.log(n3);
    n3--;
}

// 1부터 10까지의 짝수 출력
n2=1;
while(n2<=10){
    if(n2%2==0){
        console.log(n2);
    }
    n2++;
}

// 무한루프
let a=0;
while(true){
    console.log(a);
    a++;

    if(a>10){
        break;
    }
}

let b=0;
// confirm 은 확인,취소 띄우고 확인은 true, 취소는 false
// while(confirm('계속 띄울까요?')){
//     b++;
//     alert(`${b}번째 alert 창`);
// }

// continue
let sum3=0;
for(i=0 ; i<=10 ; i++){
    if(i%2==0){
        continue;
    }
    sum3+=i;
}
console.log(sum3);


// 실습1
// 구구단을 반복문을 이용해서 콘솔로그로 출력해보기

for(let i=2 ; i<=9 ; i++) {
    for(let j=1 ; j<=9 ; j++){
        console.log(`${i}x${j}=${i*j}`);
        // console.log(i+'*'+j+'='+i*j);
    }
}


// 실습2
// 0~100의 숫자중에서 2또는 5의 배수 총합 구하기
// let sum4=0;
// for(let i=0; i<=100; i++){
//     if(i%2==0 || i%5==0){
//         sum4 += i;
//     }
//     i++;
// }
let n4=0;
while(n4<=100){
    if(n4%2==0 || n4%5==0){
        sum4 += n4;
    }
    n4++;
}
console.log(sum4);