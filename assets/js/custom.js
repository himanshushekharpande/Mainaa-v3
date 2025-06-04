document.addEventListener('DOMContentLoaded', function() {
  // Handle Examinations menu
  const examsItem = document.querySelector('.examinations-item');
  if (examsItem) {
    const examsLink = examsItem.querySelector('.nav-link');
    const examsToggle = examsItem.querySelector('.dropdown-toggle');
    const examsMenu = examsItem.querySelector('.dropdown-menu');
    
    // Make sure the link works on mobile
    examsLink.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        window.location.href = this.href;
      }
    });
    
    // Toggle menu on mobile
    examsToggle.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        examsMenu.style.display = examsMenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
});