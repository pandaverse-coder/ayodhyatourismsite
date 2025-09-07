// // Dining Page Functionality
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
  

  // Discovery buttons functionality
  const discoveryBtns = document.querySelectorAll('.discovery-btn');
  discoveryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const type = this.getAttribute('data-type');
      let message = 'Exploring ';
      
      switch(type) {
        case 'restaurants':
          message += 'restaurant reservations';
          break;
        case 'tours':
          message += 'food tours';
          break;
        case 'classes':
          message += 'cooking classes';
          break;
        case 'events':
          message += 'food events';
          break;
      }
      
      alert(message + '. In a real implementation, this would filter or navigate to the relevant section.');
    });
  });

  // Restaurant filters
  const filterBtn = document.querySelector('.filter-btn');
  if (filterBtn) {
    filterBtn.addEventListener('click', function() {
      const cuisine = document.getElementById('cuisine').value;
      const price = document.getElementById('price').value;
      const rating = document.getElementById('rating').value;
      
      // Show loading state
      this.innerHTML = 'Filtering...';
      this.disabled = true;
      
      // Simulate filtering
      setTimeout(() => {
        let message = 'Applying filters:';
        if (cuisine) message += ` Cuisine: ${cuisine}`;
        if (price) message += ` Price: ${'$'.repeat(price)}`;
        if (rating) message += ` Rating: ${rating}★+`;
        
        alert(message);
        
        // Reset button
        this.innerHTML = 'Apply Filters';
        this.disabled = false;
      }, 1000);
    });
  }

  // Favorite buttons functionality
  const favoriteBtns = document.querySelectorAll('.favorite-btn');
  favoriteBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      
      const restaurantName = this.closest('.restaurant-card').querySelector('h3').textContent;
      if (this.classList.contains('active')) {
        this.innerHTML = '<i class="fas fa-heart"></i>';
        alert(`Added ${restaurantName} to your favorites!`);
      } else {
        this.innerHTML = '<i class="far fa-heart"></i>';
        alert(`Removed ${restaurantName} from your favorites.`);
      }
    });
  });

  // Restaurant action buttons
  const viewMenuBtns = document.querySelectorAll('.view-menu-btn');
  viewMenuBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const restaurantName = this.closest('.restaurant-card').querySelector('h3').textContent;
      alert(`Viewing menu for ${restaurantName}. In a real implementation, this would show a modal or PDF of the menu.`);
    });
  });

  const reserveBtns = document.querySelectorAll('.reserve-btn');
  reserveBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const restaurantName = this.closest('.restaurant-card').querySelector('h3').textContent;
      alert(`Making reservation at ${restaurantName}. This would open a reservation form or calendar.`);
    });
  });

  // View all restaurants button
  const viewAllBtn = document.querySelector('.view-all-btn');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', function() {
      alert('Loading all restaurants. In a real implementation, this would paginate or show more results.');
    });
  }

  // Book tour/class buttons
  const bookTourBtns = document.querySelectorAll('.book-tour-btn');
  bookTourBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tourName = this.closest('.tour-card').querySelector('h3').textContent;
      alert(`Booking ${tourName}. This would open a booking form.`);
    });
  });

  const bookClassBtns = document.querySelectorAll('.book-class-btn');
  bookClassBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const className = this.closest('.class-card').querySelector('h3').textContent;
      alert(`Booking ${className}. This would open a booking form.`);
    });
  });

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input').value;
      
      // Show loading state
      const submitBtn = this.querySelector('button');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Subscribing...';
      submitBtn.disabled = true;
      
      // Simulate subscription
      setTimeout(() => {
        alert(`Thank you for subscribing to our food newsletter with ${email}!`);
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }