const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const up = document.querySelector("button.arrow_top");
const bottom = document.querySelector("button.arrow_bottom");
const left = document.querySelector("button.arrow_left");
const right = document.querySelector("button.arrow_right");

function handleColorTop() {
    body.style.background = `linear-gradient(to top, ${color1.value}, ${color2.value})`;
}
function handleColorBottom() {
    body.style.background = `linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
}
function handleColorLeft() {
    body.style.background = `linear-gradient(to left, ${color1.value}, ${color2.value})`;
}
function handleColorRight() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}



up.addEventListener("click", handleColorTop);
bottom.addEventListener("click", handleColorBottom);
left.addEventListener("click", handleColorLeft);
right.addEventListener("click", handleColorRight);


