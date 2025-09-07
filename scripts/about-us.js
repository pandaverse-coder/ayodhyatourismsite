// // About Us Page Functionality
// document.addEventListener('DOMContentLoaded', function() {
//   // Mobile menu toggle
//   const mobileMenu = document.getElementById('mobile-menu');
//   const navLinks = document.getElementById('nav-links');

//   function toggleMenu() {
//     navLinks.classList.toggle('active');
//     document.body.classList.toggle('no-scroll');
    
//     const spans = mobileMenu.querySelectorAll('span');
//     if (navLinks.classList.contains('active')) {
//       spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
//       spans[1].style.opacity = '0';
//       spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
//     } else {
//       spans[0].style.transform = 'none';
//       spans[1].style.opacity = '1';
//       spans[2].style.transform = 'none';
//     }
//   }

//   if (mobileMenu && navLinks) {
//     mobileMenu.addEventListener('click', function(e) {
//       e.stopPropagation();
//       toggleMenu();
//     });

//     // Close menu when clicking outside
//     document.addEventListener('click', (e) => {
//       if (navLinks.classList.contains('active') && 
//           !navLinks.contains(e.target) && 
//           !mobileMenu.contains(e.target)) {
//         toggleMenu();
//       }
//     });

//     // Close menu when clicking on a link
//     document.querySelectorAll('.nav-links a').forEach(link => {
//       link.addEventListener('click', () => {
//         if (navLinks.classList.contains('active')) {
//           toggleMenu();
//         }
//       });
//     });

//     // Close menu on escape key
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape' && navLinks.classList.contains('active')) {
//         toggleMenu();
//       }
//     });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  

  // Animated counter for statistics
  const statNumbers = document.querySelector