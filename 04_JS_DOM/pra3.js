const box = document.querySelector(".box");
console.log(box);
box.addEventListener("click", function () {
  if (box.classList.contains("box-orange")) {
    box.classList.add("box-skyblue");
    box.classList.remove("box-orange");
  } else {
    box.classList.add("box-orange");
    box.classList.remove("box-skyblue");
  }
});

const btn1 = document.querySelector("btn1");
const btn2 = document.querySelector("btn2");

const input = document.querySelector(".text");
const span = document.querySelector("span");

btn1.addEventListener("click", function () {
  input.setAttribute("placeholder", "아이디를 입력해 주세요");
  span.innerText = "아이디를 입력해 주세요";
  input.value = "";
});

btn2.addEventListener("click", () => {
  span.innerHTML = input.value;
  input.value = "";
});
