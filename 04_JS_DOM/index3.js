const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-red");
const btn3 = document.querySelector(".btn-green");
const btn4 = document.querySelector(".btn-blue");
console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener("click", function () {
  alert("버튼 1을 선택하셨네요!");
});

btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "aqua";
});

const container = document.getElementById("container");
btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "green";
  div.innerText = "hi";
  container.append(div);
});

btn3.addEventListener("click", changeColor);

function changeColor() {
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
  div[divs.length - 1].style.backgroundColor = "yellow";
}

btn3.addEventListener("click", changeBtnColor);

btn4.addEventListener("click", changeBtnColor);

// 함수를 사용하면 재사용성이 높아짐!
function changeBtnColor() {
  //   this.style.backgroundColor = "yellow";
  //   this.style.color = "#000";

  this.classList.toggle("btn-yellow");

  //   if (this.classList.contains("btn-yellow")) {
  //     this.classList.remove("btn-yellow");
  //   } else {
  //     this.classList.add("btn-yellow");
  //   }
}

// scroll
// console.log(window);
// window.addEventListener("scroll", (event) => {
//   //   console.log(event);
//   //   console.log(event.target);
//   console.log(scrollY);
//   if (scrollY > 300) {
//     document.querySelector(".scroll").style.opacity = "1";
//   }
// });

//todo list 부분
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (e) {
  console.log(e);
});

input.addEventListener("keydown", function (e) {
  //   console.log(e);
  //   console.log(e.code);
  //   console.log(e.key);

  if (e.code === "ArrowUp") {
    console.log("up!!");
  } else if (e.code === "ArrowRight") {
    console.log("Right");
  } else if (e.code === "ArrowLeft") {
    console.log("Left");
  } else if (e.code === "ArrowDown") {
    console.log("Down!!");
  } else if (e.code === "Enter") {
    console.log("Enter!!");
  } else {
    console.log("others");
  }
});

const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); //콘솔창에 계속 띄워줌
  console.log("submit");
  const todoInput = document.querySelector("input[name=todo]");

  console.log(todoInput.value); // value : text 안의 글자 받아와줌

  const todo = todoInput.value;
  const newTodo = document.createElement("li");
  newTodo.append(todo);
  todos.append(newTodo);
  todoInput.value = ""; // input value값 빈문자, 입력하고 초기화되는것
});

const changeInput = document.getElementById("change-input");
changeInput.addEventListener("change", function () {
  console.log("change?!");
});
changeInput.addEventListener("input", function () {
  console.log("changing~");
  const div = document.querySelector(".intro");
  //   console.log(div);

  div.textContent = this.value;
});
