const h2 = document.querySelector("h2");
const bg = (document.getElementById("bg").style.backgroundImage =
  "url(./images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg)");
// const bc = (document.getElementById("bg").style.backgroundImage =
//   "url(./images/jakob-owens-uWbRcJSJLV8-unsplash.jpg)");
const timer = setInterval(() => {
  const bg = 0;
  bg++;
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 4000);
setInterval(() => {
  h2.textContent = new Date().toLocaleTimeString();
}, 1000);
h2.setAttribute("style", "font-family: Lucida Sans");
const h3 = document.querySelector("h3");

setInterval(() => {
  h3.textContent = new Date().toLocaleDateString();
}, 1000);

// const div = document.querySelector("div");
// const words = Array.from(div.children);
// const sorteed = words.sort((a, b) => {
//   return a.textContent.length - b.textContent.length;
// });
// sorteed.at(-1).style.backgroundColor = "red";
// Array.from(div.children).forEach((itm) => {
//   item.setAttribute();
// });
