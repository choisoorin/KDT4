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
console.log(window);
window.addEventListener("scroll", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  console.log(scrollY);
  if (scrollY > 300) {
    document.querySelector(".scroll").style.opacity = "1";
  }
});
