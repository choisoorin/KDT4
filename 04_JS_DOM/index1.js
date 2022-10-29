console.log(document);

console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);
console.log(document.domain);

// getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

//getElementsByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// getElementsByTagName
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("input"));

//getElementsByName
console.log(document.getElementsByName("id"));

//querySelector
console.log(document.querySelector(".pink"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("[name='id']"));

//querySelectorAll
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div")[2]);
console.log(document.querySelectorAll("input"));

// pink클래스 하나씩 출력해보기
let pinks = document.querySelectorAll(".pink");
for (let el of pinks) {
  console.log(el);
}
