/* Elockman Game Studio — Official Dynamic Scripts */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu close on click or tap
  var mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    var links = mobileMenu.querySelectorAll('.mobile-menu__links a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.removeAttribute('open');
      });
    });
  }

  // Close details menu when clicked outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && mobileMenu.hasAttribute('open') && !mobileMenu.contains(e.target)) {
      mobileMenu.removeAttribute('open');
    }
  });
});
