let n=0;
let sum=0;
while(n<100){
    if(n%2===0 || n%3===0){
        sum+=n;
    }
    n++;
}
console.log(`1과 99까지 중에서 2또는 3의 배수의 합 : ${sum}`);

let i=prompt('숫자를입력하시오(0~5까지)');
    console.log('*'.repeat(i));
    console.log('*'.repeat(i-1));
    console.log('*'.repeat(i-2));
    console.log('*'.repeat(i-3));
    console.log('*'.repeat(i-4));


// console.log('*'.repeat(i));
// console.log('*'.repeat(i-1));
// console.log('*'.repeat(i-2));
// console.log('*'.repeat(i-3));
// console.log('*'.repeat(i-4));

