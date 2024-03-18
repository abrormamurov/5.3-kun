// const h2 = document.querySelector("h2");

// // const bc = (document.getElementById("bg").style.backgroundImage =
// //   "url(./images/jakob-owens-uWbRcJSJLV8-unsplash.jpg)");
// const timer = setInterval(() => {
//   const bg = 0;
//   bg++;
// }, 1000);

// setTimeout(() => {
//   clearInterval(timer);
// }, 4000);
// setInterval(() => {
//   h2.textContent = new Date().toLocaleTimeString();
// }, 1000);
// h2.setAttribute("style", "font-family: Lucida Sans");
// const h3 = document.querySelector("h3");
// if(h2 >= 06:00) {

// }

// setInterval(() => {
//   h3.textContent = new Date().toLocaleDateString();
// }, 1000);

// const div = document.querySelector("div");
// const words = Array.from(div.children);
// const sorteed = words.sort((a, b) => {
//   return a.textContent.length - b.textContent.length;
// });
// sorteed.at(-1).style.backgroundColor = "red";
// Array.from(div.children).forEach((itm) => {
//   item.setAttribute();
// });

let h1 = document.querySelector("h1");
let par = document.querySelector("p");
let div = document.querySelector("div");
let date = new Date().getHours();

setInterval(() => {
  h1.textContent = new Date().toLocaleTimeString();
  div.setAttribute("class", "img");
  if (date >= 5 && date <= 8) {
    div.style.backgroundImage =
      "url('./images/jakob-owens-uWbRcJSJLV8-unsplash.jpg')";
  } else if (date >= 9 && date <= 11) {
    div.style.backgroundImage =
      "url('./images/oc-gonzalez-xg8z_KhSorQ-unsplash.jpg')";
  } else if (date >= 12 && date <= 15) {
    div.style.backgroundImage =
      "url('./images/mateo-giraud-wtBex4wQw60-unsplash.jpg')";
  } else if (date >= 16 && date <= 19) {
    div.style.backgroundImage =
      "url('./images/jason-blackeye-GPPAjJicemU-unsplash.jpg')";
  } else if (date >= 20 && date <= 23) {
    div.style.backgroundImage =
      "url('./images/nathan-anderson-L95xDkSSuWw-unsplash.jpg')";
    div.style.backgroundPosition = "bottom";
  } else if (date >= 0 && date < 5) {
    div.style.backgroundImage =
      "url('./images/shot-by-cerqueira-NpF9JLGYfeQ-unsplash.jpg')";
  }
}, 1000);

setInterval(() => {
  par.textContent = new Date().toLocaleDateString();
}, 1000);
