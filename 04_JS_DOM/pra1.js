let li = document.querySelector(".container");
console.log(li);

li.style.backgroundColor = "#eee";
li.style.textAlign = "center";

let con = document.querySelectorAll("span");
console.log(con);
for (let li of con) {
  li.style.color = "blueviolet";
  li.style.fontWeight = "bold";
}
