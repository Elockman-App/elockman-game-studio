/* Elockman Game Studio — Legacy Fallback Entrypoint */
document.addEventListener('DOMContentLoaded', function() {
  var mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    var links = mobileMenu.querySelectorAll('.mobile-menu__links a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.removeAttribute('open');
      });
    });
  }
  document.addEventListener('click', function(e) {
    if (mobileMenu && mobileMenu.hasAttribute('open') && !mobileMenu.contains(e.target)) {
      mobileMenu.removeAttribute('open');
    }
  });
});
