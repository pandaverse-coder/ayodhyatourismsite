// Shuttles Page Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (if needed)
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

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
      const notes = document.getElementById('notes').value;
      
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
      
      // Create WhatsApp message
      const message = `🚗 *Shuttle Booking Request* 🚗%0A%0A` +
                     `*Pickup Location:* ${pickup}%0A` +
                     `*Dropoff Location:* ${dropoff}%0A` +
                     `*Date:* ${date}%0A` +
                     `*Time:* ${time}%0A` +
                     `*Passengers:* ${passengers}%0A` +
                     `*Vehicle Type:* ${vehicle}%0A` +
                     `*Special Instructions:* ${notes || 'None'}%0A%0A` +
                     `Please confirm availability and pricing.`;
      
      // Your WhatsApp number (replace with your actual number)
      const phoneNumber = '918874142753'; // Your number without + or spaces
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      
      // Show notification before redirecting
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #25D366;
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
      `;
      notification.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span>Opening WhatsApp...</span>
      `;
      document.body.appendChild(notification);
      
      // Open WhatsApp after a brief delay
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        
        // Remove notification and reset form after a delay
        setTimeout(() => {
          document.body.removeChild(notification);
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          bookingForm.reset();
        }, 2000);
      }, 1500);
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
  
  // CTA button functionality - Contact Our Team
  const ctaButton = document.querySelector('.cta-btn');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      // Create WhatsApp message for custom shuttle requests
      const message = `🚗 *Custom Shuttle Request* 🚗%0A%0A` +
                     `*Destination:* ............%0A` +
                     `*Number of Passengers:* ...........%0A` +
                     `*Date:* ............%0A` +
                     `*Time:* ............%0A` +
                     `*Vehicle Preference:* ............%0A` +
                     `*Special Requirements:* ............%0A%0A` +
                     `Please provide the details for your custom shuttle service.`;
      
      // Your WhatsApp number
      const phoneNumber = '918874142753'; // Your number without + or spaces
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      
      // Show notification
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #25D366;
        color: white;
        padding: 12px 20px;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
      `;
      notification.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span>Opening WhatsApp...</span>
      `;
      document.body.appendChild(notification);
      
      // Open WhatsApp after a brief delay
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        
        // Remove notification after a delay
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 2000);
      }, 1500);
    });
  }
  
  // Vehicle card interaction
  const vehicleCards = document.querySelectorAll('.vehicle-card');
  vehicleCards.forEach(card => {
    card.addEventListener('click', function() {
      const vehicleType = this.querySelector('h3').textContent;
      alert(`You've selected: ${vehicleType}\nThis vehicle will be available for selection in the booking form.`);
    });
  });
});