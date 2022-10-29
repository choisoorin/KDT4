let now= new Date();
console.log(now);

console.log(now.getFullYear(),"년");
console.log(now.getMonth()+1,"월"); //월은 0부터 시작함
console.log(now.getDate(),"일");
console.log(now.getHours(),"시")
console.log(now.getMinutes(),"분");
console.log(now.getSeconds(),"초");
console.log(now.getMilliseconds(),"ms");
console.log(now.getDay(),"요일"); //일요일 0부터시작


let a=now.getDay();
switch(a){
    case 0:
        console.log("일요일");
        break;
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
        console.log("토요일");
        break;
}

// 오늘이 평일인지 주말인지 구하기 (조건문)

if(a===1||a===2||a===3||a===4||a===5){
    console.log('평일');
}else{
    console.log('주말');
}

console.log(now.getDay()===0||now.getDay===6 ? '주말' : '평일');

// Math
console.log(Math.PI); //파이
console.log(Math.E);
console.log(Math.SQRT2);

// method
console.log(Math.min(100,99,23,88));
console.log(Math.max(100,99,23,88));

console.log(Math.round(5.8)); //정수로 반올림
console.log(Math.floor(5.8)); //버림
console.log(Math.ceil(5.4)); //올림

console.log(Math.random()); //난수생성 (범위 : 0 <= x < 1 )
console.log(Math.floor(Math.random()*100)); //난수를 정수값만 출력


console.log(Math.floor(Math.random()*10)); // 0 <= x <= 9 (0~9) 10개출력
console.log(Math.floor(Math.random()*10)+1); // 0 < x <= 10 (1~10) 10개출력
console.log(Math.floor(Math.random()*99)+2); // 1 < x <=100 99개출력
console.log(Math.floor(Math.random()*2)+21); // 20 < x <=22 2개출력





