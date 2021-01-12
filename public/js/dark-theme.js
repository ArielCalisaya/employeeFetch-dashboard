const darkModeToggle = document.querySelector(".dark-mode-btn");
let theme = localStorage.getItem('theme') 

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  darkModeToggle.classList.add('dark');
  localStorage.setItem("theme", "dark")
}
const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  darkModeToggle.classList.remove('dark');
  localStorage.setItem("theme", "light")
}
if(theme === 'dark') {
    enableDarkMode()
  } else {
    disableDarkMode()
  }

darkModeToggle.addEventListener("click", () => {
  theme = localStorage.getItem("theme");
  if(theme !== 'dark'){
    enableDarkMode()
  } else {
    disableDarkMode()
  }
});