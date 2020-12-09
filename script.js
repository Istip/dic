// NAVIGATION BAR TOGGLING SCRIPT
const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navbarLinks = document.getElementsByClassName("menu")[0]
const navBar = document.getElementsByClassName("navbar")[0]

const navItems = document.getElementsByClassName("nav-items")[0]

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active")
  navBar.classList.toggle("active")
  toggleBtn.classList.toggle("change")
})

navItems.addEventListener("click", () => {
  navbarLinks.classList.remove("active")
  navBar.classList.remove("active")
  toggleBtn.classList.remove("change")
})

// NAVIGATION BAR TOGGLING SCRIPT

// NAVIGATION BAR BACKGROUND CHANGING ON SCROLL SCRIPT
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementsByTagName("nav")[0].style.background = "#35383a"
    document.getElementsByTagName("img")[0].style.height = "35px"
  } else {
    document.getElementsByTagName("nav")[0].style.background = ""
    document.getElementsByTagName("img")[0].style.height = ""
  }
}
// NAVIGATION BAR BACKGROUND CHANGING ON SCROLL SCRIPT
