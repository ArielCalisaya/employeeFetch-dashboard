const navbarButton = document.querySelector("#nav-mobile");
const navLinks = document.querySelector(".nav-links");

const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");
const darkModeToggle = document.querySelector(".dark-mode-btn");
const overlay = document.getElementById("overlay");
let darkMode = localStorage.getItem('darkMode') 

const enableDarkMode = () => {
  document.documentElement.classList.add('dark-mode');
  document.querySelectorAll(".inverted").forEach((res) => {
    res.classList.add("invert");
  });
  localStorage.setItem("darkMode", "enabled")
}
const disableDarkMode = () => {
  document.documentElement.classList.remove('dark-mode');
  document.querySelectorAll(".inverted").forEach((res) => {
    res.classList.remove("invert");
  });
  localStorage.setItem("darkMode", null)
}

navbarButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navbarButton.classList.toggle("opened");
});

if(darkMode === 'enabled') {
  enableDarkMode()
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if(darkMode !== 'enabled'){
    enableDarkMode()
  } else {
    disableDarkMode()
  }
});

openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
closeModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

const openModal = (modal) => {
  if (modal === null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};
const closeModal = (modal) => {
  if (modal === null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};
