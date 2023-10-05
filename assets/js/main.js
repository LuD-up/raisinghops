document.addEventListener("DOMContentLoaded", function() {
  // Get references to the button and navigation menu
  var menuButton = document.querySelector(".menu");
  var navigationMenu = document.querySelector(".navigation");

  // Function to toggle the navigation menu
  function toggleMenu() {
    // Toggle the "hidden" attribute on the navigation menu
    navigationMenu.hidden = !navigationMenu.hidden;

    // Toggle the "aria-expanded" attribute on the button for accessibility
    var isMenuHidden = navigationMenu.hidden;
    menuButton.setAttribute("aria-expanded", isMenuHidden ? "false" : "true");
  }

  // Toggle the navigation menu when the button is clicked
  menuButton.addEventListener("click", toggleMenu);

  // Add event listener to close the menu when a link is clicked
  var navLinks = document.querySelectorAll(".nav-item a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", toggleMenu);
  });
});
