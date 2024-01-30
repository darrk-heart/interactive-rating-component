let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let submit = document.getElementById("submit");

function showNext() {
  let prosper = document.getElementById("content2");
  let paul = document.getElementById("content");
  paul.style.display = "none";
  prosper.style.display = "block";
}
submit.addEventListener("click", showNext);

function changeColor(item) {
  item.style.backgroundColor = "hsl(25, 97%, 53%)";
}
function previousColor(item) {
  item.style.backgroundColor = "hsl(211, 19%, 26%)";
}
function beforeColor(item) {
  item.style.backgroundColor = "hsl(216, 12%, 54%)";
}
function marks(grade) {
  let mark = document.getElementById("mark");
  mark.innerHTML = "You selected " + grade + " out of 5";
}
one.addEventListener("click", function () {
  changeColor(one);
  previousColor(two);
  previousColor(three);
  previousColor(four);
  previousColor(five);
  marks(1);
});
two.addEventListener("click", function () {
  changeColor(two);
  beforeColor(one);
  previousColor(three);
  previousColor(four);
  previousColor(five);
  marks(2);
});
three.addEventListener("click", function () {
  changeColor(three);
  beforeColor(two);
  previousColor(one);
  previousColor(four);
  previousColor(five);
  marks(3);
});
four.addEventListener("click", function () {
  changeColor(four);
  previousColor(two);
  previousColor(one);
  beforeColor(three);
  previousColor(five);
  marks(4);
});
five.addEventListener("click", function () {
  changeColor(five);
  previousColor(two);
  previousColor(one);
  previousColor(three);
  beforeColor(four);
  marks(5);
});
