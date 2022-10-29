// innerHTML, innerText, textContent

let div1 = document.getElementById("div1");
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
div1.innerText = "여기는 <b>첫번째</b> 태그입니다. &hearts;      !!";
console.log(div1.innerText); // 여기는 <b>첫번째</b> 태그입니다. &hearts; !!
div1.textContent = "여기는 <b>첫번째</b> 태그입니다. &hearts;      !!";
console.log(div1.textContent); // 여기는 <b>첫번째</b> 태그입니다. &hearts;      !!

let div2 = document.querySelector(".mint");
div2.innerHTML = "민트초코는 <span>맛없다!</span>";

// setAttribute -> 속성 접근, 변경
console.log(document.getElementById("pooh"));
// document.getElementById("pooh").id = "POOH";
document.getElementById("pooh").setAttribute("alt", "푸");
console.log(document.getElementById("pooh"));

let a = document.querySelector("#google");
a.textContent = "naver";
a.setAttribute("href", "https://www.naver.com");
console.log(a.getAttribute("href"));

// style 속성 사용
let list = document.querySelectorAll("#friends li");
console.log(list);

for (let li of list) {
  //   li.style.backgroundColor = "blue";
  //   li.style.color = "white";
  //   li.style.fontSize = "1.3rem";
  li.classList.add("add-li");
}
let h1 = document.getElementsByTagName("h1");
for (let el of h1) {
  //   el.style.backgroundColor = "blue";
  el.classList.add("add-h1");
}

// 노드 찾기, 부모 형제 자식 요소에 접근
let friends = document.getElementById("friends");
let tigger = document.getElementById("tigger");
console.log(friends, tigger);
// 자식노드에 접근 .children
console.log(friends.children);
console.log(friends.children[0]);
// 부모노드에 접근
console.log(tigger.parentNode);
// 형제노드에 접근
console.log(tigger.previousElementSibling); //티거 앞에있는 이요르
console.log(tigger.nextElementSibling); //티거 next피글렛
console.log(tigger.nextElementSibling.nextElementSibling); //로빈

// 노드 생성, 추가, 삭제
// 1. 생성 createElement
let container = document.querySelector(".container");
let p = document.createElement("p");
console.log(p);
p.innerText = "추가된 p태그";
p.style.fontWeight = 700;
p.style.backgroundColor = "red";
container.append(p);

let p2 = document.createElement("p");
p2.innerText = "p2";
p2.classList.add("p-2");
container.appendChild(p2);

let p3 = document.createElement("p");
p3.innerText = "p3";
p3.classList.add("p-3");
container.prepend(p3);

// after, before
// let h3 = document.createElement("h3");
// h3.textContent = "새로 추가된 제목 h3";
// h1.before(h3);

// let h2 = document.createElement("h2");
// h2.textContent = "새로 추가된 제목 h2";
// h1.after(h2);

// 3. 삭제
let firstli = document.querySelector("li"); //이요르 선택
let ul = firstli.parentElement;
console.log(ul);

// ul.removeChild(firstli);
firstli.remove();
