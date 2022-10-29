let con = document.querySelector(".container");
console.log(con);

con.style.backgroundColor = "#eee";
con.style.textAlign = "center";

let p1 = document.querySelectorAll("span");
console.log(p1);
for (let li of p1) {
  p1.style.color = "blueviolet";
  p1.style.fontWeight = "bold";
}
