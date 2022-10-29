// if문
if(5>3){
    console.log('얍');
}

if(5==3){
    console.log('얍');
}

let number=Number(prompt('숫자를 입력해주세요'));
console.log(typeof- number);

// if(number>10){
//     console.log('10보다 큰 수 입니다.')
// }else{
//     console.log('입력 받은 수가 10보다 작거나 같습니다')
// }

if(number>10){
    console.log('10보다 큰 수 입니다.')
}else if(number==10){
    console.log('10입니다.')
}else{
    console.log('10보다 작은 수 입니다.')
}

if(number>100){
    console.log('잘못된 점수입니다.');
}else if(number>=90){
    console.log('A');
}else if(number>=80){
    console.log('B');
}else if(number>=70){
    console.log('C');
}else if(number>=60){
    console.log('D');
}else{
    console.log('E');
}

let age=Number(prompt('나이를 입력해주세요(0~100)'));
if(age>=20){
    console.log('성인');
}else if(age>=17){
    console.log('고등학생');
}else if(age>=14){
    console.log('중학생');
}else if(age>=8){
    console.log('초등학생');
}else{
    console.log('유아');
}

// it문 중첩

let userId='user01';
let userPw='1234aaa';

function loginUser(){
    let inputId=prompt('아이디를 입력해주세요')
    let inputPw=prompt('패스워드를 입력해주세요')
    
    if(userId==inputId){
        if(userPw==inputPw){
            console.log('로그인 성공');
            alert(`안녕하세요 ${userId}님`);
        }else{
            alert('비밀번호가 일치하지 않습니다.');
        }
    }else if(inputId===''){
        alert('아이디를 입력하지 않았습니다.')
    }else{
        alert('없는 아이디 입니다.')
    }
}

// loginUser();



// switch문
let t=4;
switch(t){
    case 3:
        console.log('입력값이 4보다 작습니다');
        break;
    case 4:
        console.log('입력값이 4입니다');
        break;
    case 5:
        console.log('입력값이 4보다 큽니다');
        break;
    default:
        console.log('어느 수인지 파악이 안됩니다.');
        break;
}


switch(parseInt(number/10)){
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    default:
        console.log('D');
        break;
}


// 삼항연산자
let num=5;
if(num%2 === 1){
    console.log('홀수');
}else{
    console.log('짝수');
}

let result = num%2 == 1 ? '홀수' : '짝수' ;
console.log(result);

let fruit='banana';
console.log(fruit==='banana' ? '바나나' : '바나나가 아닙니다');


let now = new Date().getHours();
console.log(now);
now>=0 && now< 12 ? console.log('오전') : console.log('오후');;
