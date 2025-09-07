// // Contact Page Functionality
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
  

  // Contact form validation and submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const isValid = validateForm();
      
      if (isValid) {
        // Get form data
        const formData = {
          firstName: document.getElementById('firstName').value,
          lastName: document.getElementById('lastName').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
          alert('Thank you for your message! We will get back to you within 24 hours.');
          
          // Reset form
          contactForm.reset();
          
          // Reset button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });
      
      input.addEventListener('input', function() {
        clearError(this);
      });
    });
  }
  
  // Form validation functions
  function validateForm() {
    let isValid = true;
    const fields = [
      'firstName',
      'lastName',
      'email',
      'subject',
      'message'
    ];
    
    fields.forEach(field => {
      const input = document.getElementById(field);
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    // Validate phone if provided
    const phone = document.getElementById('phone');
    if (phone.value && !validatePhone(phone.value)) {
      showError(phone, 'Please enter a valid phone number');
      isValid = false;
    }
    
    return isValid;
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.id;
    
    if (field.required && !value) {
      showError(field, 'This field is required');
      return false;
    }
    
    switch(fieldName) {
      case 'email':
        if (!validateEmail(value)) {
          showError(field, 'Please enter a valid email address');
          return false;
        }
        break;
      case 'phone':
        if (value && !validatePhone(value)) {
          showError(field, 'Please enter a valid phone number');
          return false;
        }
        break;
    }
    
    clearError(field);
    return true;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ''));
  }
  
  function showError(field, message) {
    clearError(field);
    field.style.borderColor = '#e74c3c';
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
      errorElement.textContent = message;
    }
  }
  
  function clearError(field) {
    field.style.borderColor = '#e0e0e0';
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
      errorElement.textContent = '';
    }
  }
  
  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    });
  }
  
  // Map button functionality
  const mapBtn = document.querySelector('.map-btn');
  if (mapBtn) {
    mapBtn.addEventListener('click', function() {
      alert('This would open a larger map in a new window or modal. In a real implementation, this would integrate with Google Maps or similar service.');
    });
  }
  
  // Social media links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert('This would navigate to our social media page. In a real implementation, these would be actual links to social profiles.');
    });
  });
  
  // Emergency contact button
  const emergencyPhone = document.querySelector('.emergency-phone');
  if (emergencyPhone) {
    emergencyPhone.addEventListener('click', function() {
      alert('This would initiate a phone call to our emergency hotline. On a mobile device, this would use tel: protocol.');
    });
  }