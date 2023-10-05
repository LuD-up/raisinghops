document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('.menu');
  const menu = document.querySelector('.navigation');

  if (toggleMenu && menu) {
    // Fonction pour fermer le menu
    function closeMenu() {
      toggleMenu.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }

    // Fonction pour ajouter la classe 'active' à l'élément sélectionné
    function setActiveMenuItem(clickedItem) {
      const menuItems = menu.querySelectorAll('a');
      menuItems.forEach(item => item.classList.remove('active'));
      clickedItem.classList.add('active');
    }

    // Ajoute un gestionnaire d'événements pour le bouton de menu
    toggleMenu.addEventListener('click', function () {
      const isOpen = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
      toggleMenu.setAttribute('aria-expanded', !isOpen);
      menu.hidden = !menu.hidden;
      if (!menu.hidden) {
        menu.querySelector('a').focus();
      }
    });

    // Ajoute un gestionnaire d'événements pour les liens internes du menu
    menu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        setActiveMenuItem(event.target); // Ajoute la classe 'active' à l'élément sélectionné
        closeMenu(); // Ferme le menu
      }
    });

    // Ajoute un gestionnaire d'événements au document pour fermer le menu en dehors du menu
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !toggleMenu.contains(event.target)) {
        closeMenu();
      }
    });
  }
});