const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[90%]");
}

//parallax Background
const parallaxBackground = document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const translateY = scrollPosition * -0.3; // Adjustable

  parallaxBackground.style.transform = `translateY(${translateY}px)`;
});

function redirectToGhazPage() {
  window.location.href = "/public/pages/ghaz.html";
}

document
  .getElementById("ghaz-btn")
  .addEventListener("click", redirectToGhazPage);

function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-red";
}
document.getElementById("myLink").click();

function onLoadPage() {
  // Open the "Starter" menu by default
  openMenu(event, "Starter");

  // Adjust the styling for the categories to be in a line
  const menuLinks = document.getElementById("menu").getElementsByTagName("a");
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].style.width = "25%"; // Set width to 25% for each category
    menuLinks[i].style.float = "left"; // Float left to create a line
  }
}
