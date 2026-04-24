const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function toggleMenu() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}

function togglePanels() {
  tabs.forEach((tab) =>
    tab.children[0].classList.remove("border-b-4", "border-softRed"),
  );
  this.children[0].classList.add("border-b-4", "border-softRed");

  panels.forEach((panel) => panel.classList.add("hidden"));

  const selectedEl = document.getElementsByClassName(
    this.getAttribute("data-target"),
  );
  selectedEl[0].classList.remove("hidden");
}

menuBtn.addEventListener("click", toggleMenu);
tabs.forEach((tab) => tab.addEventListener("click", togglePanels));
