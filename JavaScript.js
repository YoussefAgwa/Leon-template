// Make Links Visible and Hidden :-
let myMenu = document.getElementsByClassName("links")[0];

let myUl = document.getElementsByTagName("ul");

// First Try ^_^

// window.onload = myUl[0].classList.add("hidden")

// myMenu.onclick = function () {
//   if (myUl[0].className ==="visible"){
//     myUl[0].classList.remove("visible")
//     myUl[0].classList.add("hidden")
//   } else {

//     myUl[0].classList.remove("hidden")

//     myUl[0].classList.add("visible")

//   }
// }

// Second Try XD Added !important to display block in CSS BTW
myMenu.onclick = function () {
  myUl[0].classList.toggle(`visible`);
};
// // Stop Right Click
// document.body.oncontextmenu = function (e) {
//   e.preventDefault();
// };

// Go Up BTN

let btn = document.querySelector(`button.up`);

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = `block`;
  } else {
    btn.style.display = `none`;
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: `smooth` });
};
