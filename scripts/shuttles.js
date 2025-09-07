// Shuttles Page Functionality
// document.addEventListener('DOMContentLoaded', function();
  // // Mobile menu toggle
  // const mobileMenu = document.getElementById('mobile-menu');
  // const navLinks = document.getElementById('nav-links');

  // function toggleMenu() {
  //   navLinks.classList.toggle('active');
  //   document.body.classList.toggle('no-scroll');
    
  //   const spans = mobileMenu.querySelectorAll('span');
  //   if (navLinks.classList.contains('active')) {
  //     spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
  //     spans[1].style.opacity = '0';
  //     spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  //   } else {
  //     spans[0].style.transform = 'none';
  //     spans[1].style.opacity = '1';
  //     spans[2].style.transform = 'none';
  //   }
  // }

  // if (mobileMenu && navLinks) {
  //   mobileMenu.addEventListener('click', function(e) {
  //     e.stopPropagation();
  //     toggleMenu();
  //   });

  //   // Close menu when clicking outside
  //   document.addEventListener('click', (e) => {
  //     if (navLinks.classList.contains('active') && 
  //         !navLinks.contains(e.target) && 
  //         !mobileMenu.contains(e.target)) {
  //       toggleMenu();
  //     }
  //   });

  //   // Close menu when clicking on a link
  //   document.querySelectorAll('.nav-links a').forEach(link => {
  //     link.addEventListener('click', () => {
  //       if (navLinks.classList.contains('active')) {
  //         toggleMenu();
  //       }
  //     });
  //   });

  //   // Close menu on escape key
  //   document.addEventListener('keydown', (e) => {
  //     if (e.key === 'Escape' && navLinks.classList.contains('active')) {
  //       toggleMenu();
  //     }
  //   });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });

  // Shuttle booking form functionality
  const bookingForm = document.getElementById('shuttleBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const pickup = document.getElementById('pickup').value;
      const dropoff = document.getElementById('dropoff').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const passengers = document.getElementById('passengers').value;
      const vehicle = document.getElementById('vehicle').value;
      
      // Validate form
      if (!pickup || !dropoff || !date || !time) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Show loading state
      const submitBtn = this.querySelector('.btn-book');
      const originalText = submitBtn.textContent;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        alert(`Shuttle booking request received!\n\nFrom: ${pickup}\nTo: ${dropoff}\nWhen: ${date} at ${time}\nPassengers: ${passengers}\nVehicle: ${vehicle}\n\nOur team will contact you shortly to confirm details.`);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form
        bookingForm.reset();
      }, 2000);
    });
  }
  
  // Set minimum date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
  
  // Set reasonable time constraints
  const timeInput = document.getElementById('time');
  if (timeInput) {
    timeInput.addEventListener('change', function() {
      const selectedTime = this.value;
      const [hours] = selectedTime.split(':').map(Number);
      
      if (hours < 5 || hours > 23) {
        alert('Our shuttle service operates between 5:00 AM and 11:00 PM. Please select a time within this range.');
        this.value = '';
      }
    });
  }
  
  // CTA button functionality
  const ctaButton = document.querySelector('.cta-btn');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  }
  
  // Vehicle card interaction
  const vehicleCards = document.querySelectorAll('.vehicle-card');
  vehicleCards.forEach(card => {
    card.addEventListener('click', function() {
      const vehicleType = this.querySelector('h3').textContent;
      alert(`You've selected: ${vehicleType}\nThis vehicle will be available for selection in the booking form.`);
    });
  });;