document.addEventListener("DOMContentLoaded", () => {
  // Constants for selectors
  const menuButton = document.querySelector(".menu");
  const navigationMenu = document.querySelector(".navigation");
  const navLinks = document.querySelectorAll(".nav-item a");
  const scrollAnimations = document.querySelectorAll(".scroll-animation");

  // Function to toggle the navigation menu
  function toggleMenu() {
    navigationMenu.hidden = !navigationMenu.hidden;
    const isMenuHidden = navigationMenu.hidden;
    menuButton.setAttribute("aria-expanded", isMenuHidden ? "false" : "true");
  }

  // Function to handle scroll animations
  function handleScrollAnimation() {
    scrollAnimations.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (elementPosition < screenHeight * 0.85) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Toggle the navigation menu when the button is clicked
  menuButton.addEventListener("click", toggleMenu);

  // Add event listener to close the menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  // Check for scroll animations when the page loads and on scroll
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();
});