// 1. string
let myName= '길동';
let email= 'gildong@naver.com';
let a= " say 'hello'"
console.log(myName);
console.log(email);
console.log(a);

console.log('내 이름은',myName);
console.log('내 이름은'+myName);
console.log(`내 이름은${myName}`);


// 2. number
let number= 123;
let opacity= 0.7;

// 3. boolean (대문자x, 소문자로 구성)
let checked=true;
let unchecked=false;

console.log(checked);
console.log(unchecked);

// 4. undefined
let undef;
console.log(undef);

// 5. null
let empty= null;
console.log(empty);

// 6. 배열
let fruits = ['orange','apple','pineapple','banana'];
let fruits2=new Array ('orange','apple','pineapple','banana');

console.log(fruits);
console.log(fruits2);

let data = [1, 'apple', false, null, undef];
console.log(data);

// 배열 응용
// 2차원 배열
const korean = [[1,2,3,4,5],[11,12,13,14,15],[21,22,23,24,25]];
console.log(korean[0]);
console.log(korean[1][2]);

const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];
console.log(letters[3][0],letters[1][3],letters[0][1],letters[0][3],letters[2][2]);

let nums =[
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [10,11,12]
    ]
]
// 8 출력
console.log(nums[1][0][1]);


// 7. object (액세서리)
let cat= {
    name: '나비',
    age: 1,
    isCute:true,
    mew:function(){
        return '냐옹';
    },
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.mew());

//대괄호 사용시 따옴표 어떤 자료형이든 써야함
console.log(cat['name']);
console.log(cat['age']);
console.log(cat['mew']());

let student={
    name:'수린',
    age: 28,
    js:false,
    soo:function(){
        return 'soorin';
    }
};

console.log(student.name);
console.log(student.soo());
console.log(student.age);
console.log(student.js);


// 8. typeof
console.log(typeof 'aa');
console.log(typeof 1);

let b = true;
console.log(typeof b);
console.log(typeof NaN);

console.log('3' -3);
console.log('a' -3);

// 실습문제
console.log(typeof 1,"isn't",typeof "a","data type.");
console.log(`${typeof(1)} isn't ${typeof 'a'} data type.`);
console.log("typeof를 array나 null에 사용하면", typeof null,"결과를 얻을 수 있습니다.");



console.log('---------------------------------');
//형변환 실습

let str1= true;
let str2= 123;
let str3= null;


// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1);
console.log(typeof str1.toString());

let n1= true;
let n2= false;
let n3= '123';
let n4='123.9';

console.log(Number(n1));
console.log(Number(n2));
console.log(typeof Number(n3));
console.log(typeof Number(n4));

console.log(Number(n3));
console.log(Number(n4));
console.log(parseInt(n3));
console.log(parseInt(n4));

// 실습
let mathScore= "77";
let engScore= "88";
// mathScore=Number(mathScore);
// engScore=Number(engScore);
// let avgScore= (mathScore+engScore) /2;

let avgScore= (Number(mathScore)+Number(engScore)) /2;
console.log(avgScore);

// let mathScore1=prompt("수학점수를 입력해주세요");
// console.log(typeof mathScore1);
// let engScore1=prompt("영어점수를 입력해주세요");
// console.log(typeof engScore1);

// let avgScore1= (Number(mathScore1)+Number(engScore1)) /2;
// console.log(avgScore1);



