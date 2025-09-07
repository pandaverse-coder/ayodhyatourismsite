// // Guides Page Functionality
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
  

  // Guide search form functionality
  const guideSearchForm = document.getElementById('guideSearchForm');
  if (guideSearchForm) {
    guideSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const destination = document.getElementById('guideDestination').value;
      const language = document.getElementById('guideLanguage').value;
      const specialty = document.getElementById('guideSpecialty').value;
      
      // Show loading state
      const submitBtn = this.querySelector('.search-btn');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
      submitBtn.disabled = true;
      
      // Simulate search
      setTimeout(() => {
        let message = 'Searching for guides';
        if (destination) message += ` in ${destination}`;
        if (language) message += ` who speak ${language}`;
        if (specialty) message += ` specializing in ${specialty}`;
        
        alert(message);
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // Favorite button functionality
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      
      const guideName = this.closest('.guide-card').querySelector('h3').textContent;
      if (this.classList.contains('active')) {
        this.innerHTML = '<i class="fas fa-heart"></i>';
        alert(`Added ${guideName} to your favorites!`);
      } else {
        this.innerHTML = '<i class="far fa-heart"></i>';
        alert(`Removed ${guideName} from your favorites.`);
      }
    });
  });

  // View profile button functionality
  const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
  viewProfileButtons.forEach(button => {
    button.addEventListener('click', function() {
      const guideCard = this.closest('.guide-card');
      const guideName = guideCard.querySelector('h3').textContent;
      const guideLocation = guideCard.querySelector('.guide-location').textContent;
      
      alert(`Viewing profile of ${guideName} from ${guideLocation}\n\nThis would open a detailed guide profile page with full information, availability calendar, and booking options.`);
    });
  });

  // Load more guides functionality
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
      this.disabled = true;
      
      setTimeout(() => {
        alert('More guides loaded! In a real application, this would fetch and display additional guide profiles.');
        this.innerHTML = 'Load More Guides';
        this.disabled = false;
      }, 2000);
    });
  }

  // CTA button functionality
  const ctaButton = document.querySelector('.cta-btn');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      // Scroll to search section
      document.querySelector('.guide-filters').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }

  // Testimonial interaction
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach(testimonial => {
    testimonial.addEventListener('click', function() {
      const author = this.querySelector('h4').textContent;
      alert(`This would show the full review from ${author} and option to read more testimonials.`);
    });
  });