let sideBar = document.querySelector(".side-bar");
let sideBar2 = document.querySelector(".side-bar2");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");

//Creating a function to show the side bar.
function showSlide() {
  if ((onclick = "rightArrow")) {
    sideBar2.style.display = "block";
    sideBar.style.display = "none";
  } else {
    sideBar2.style.display = "none";
  }
}
//Creating a function to hide the side bar.
function hideSlide() {
  if ((onclick = "leftArrow")) {
    sideBar.style.display = "block";
    sideBar2.style.display = "none";
  } else {
    sideBar2.style.display = "block";
  }
}
