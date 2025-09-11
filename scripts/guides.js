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

  // Guide data for modals
  const guidesData = {
    1: {
      name: "Rajesh Kumar",
      location: "Ayodhya, India",
      image: "/assets/image/guide-1.jpg",
      specialties: ["Historical Tours", "Religious Sites"],
      languages: ["Hindi", "English", "Awadhi"],
      rating: 4.9,
      reviewCount: 128,
      price: 1500,
      description: "Passionate historian with 10+ years of experience showing visitors the sacred sites and hidden gems of Ayodhya. Specializes in Ramayana-related historical sites and temple architecture.",
      detailedDescription: "Rajesh is a certified tour guide with extensive knowledge of Ayodhya's rich cultural and religious heritage. He has been guiding visitors for over a decade and specializes in creating personalized experiences that highlight both popular attractions and lesser-known gems. His tours are educational, engaging, and tailored to your interests.",
      destinations: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhavan", "Saryu River", "Nageshwarnath Temple", "Tulsi Smarak Bhawan", "Mani Parbat", "Guptar Ghat"],
      reviews: [
        {
          author: "Vikram Patel",
          date: "2023-11-15",
          rating: 5,
          content: "Rajesh's knowledge of Ayodhya's history is incredible. He made our pilgrimage truly special by explaining the significance of each site with stories from the Ramayana."
        },
        {
          author: "Meera Singh",
          date: "2023-10-28",
          rating: 5,
          content: "We spent two days with Rajesh exploring Ayodhya, and it was the highlight of our trip. His English is excellent, and he customized the tour based on our interests."
        },
        {
          author: "Anil Kumar",
          date: "2023-09-10",
          rating: 4.5,
          content: "Rajesh is very professional and punctual. He showed us places we would never have found on our own. Highly recommend his services."
        }
      ],
      availability: ["2023-12-10", "2023-12-11", "2023-12-12", "2023-12-15", "2023-12-16", "2023-12-18", "2023-12-20", "2023-12-22", "2023-12-25", "2023-12-27", "2023-12-29"]
    },
    2: {
      name: "Priya Singh",
      location: "Varanasi, India",
      image: "/assets/image/guide-2.jpg",
      specialties: ["Spiritual Tours", "Ganga Aarti"],
      languages: ["Hindi", "English", "Bengali"],
      rating: 4.95,
      reviewCount: 204,
      price: 1800,
      description: "Varanasi native with deep knowledge of spiritual practices, rituals, and hidden temple locations along the Ganges.",
      detailedDescription: "Priya was born and raised in Varanasi and has an intimate knowledge of the city's spiritual practices, hidden alleys, and ancient traditions. She specializes in spiritual tours that provide authentic experiences of Varanasi's unique culture. Priya can arrange special access to ceremonies and introduce you to local artisans and priests.",
      destinations: ["Dashashwamedh Ghat", "Assi Ghat", "Manikarnika Ghat", "Kashi Vishwanath Temple", "Sarnath", "Ramnagar Fort", "Tulsi Manas Temple", "Bharat Mata Temple"],
      reviews: [
        {
          author: "Anjali Sharma",
          date: "2023-11-20",
          rating: 5,
          content: "Priya made our Varanasi experience magical. She arranged a private boat for the Ganga Aarti and explained the significance of each ritual. Her knowledge of the city's history is impressive."
        },
        {
          author: "Rahul Verma",
          date: "2023-10-05",
          rating: 5,
          content: "We've traveled with many guides, but Priya is exceptional. She took us to places we would never have found on our own and shared fascinating stories about each location."
        }
      ],
      availability: ["2023-12-12", "2023-12-13", "2023-12-14", "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", "2023-12-26", "2023-12-28", "2023-12-30"]
    },
    3: {
      name: "Amit Sharma",
      location: "Delhi, India",
      image: "/assets/image/guide-3.jpg",
      specialties: ["Cultural Tours", "Food Experiences"],
      languages: ["Hindi", "English", "Punjabi"],
      rating: 4.7,
      reviewCount: 89,
      price: 1200,
      description: "Food enthusiast and culture expert who brings Delhi's diverse heritage to life through its cuisine and historical sites.",
      detailedDescription: "Amit is a Delhi-based guide with a passion for the city's vibrant food scene and rich history. He specializes in food tours that take you through Old Delhi's narrow lanes as well as cultural tours of historical monuments. Amit's tours are a perfect blend of information, entertainment, and delicious food.",
      destinations: ["Red Fort", "Jama Masjid", "Chandni Chowk", "India Gate", "Qutub Minar", "Lotus Temple", "Akshardham Temple", "Hauz Khas Village"],
      reviews: [
        {
          author: "Rahul Kapoor",
          date: "2023-11-05",
          rating: 4.5,
          content: "Amit's food tour was the highlight of our Delhi trip. We tasted so many delicious dishes and learned about their history. His knowledge of Old Delhi is impressive."
        }
      ],
      availability: ["2023-12-10", "2023-12-11", "2023-12-13", "2023-12-14", "2023-12-16", "2023-12-18", "2023-12-20", "2023-12-22", "2023-12-24", "2023-12-27", "2023-12-29"]
    },
    4: {
      name: "Sunita Patel",
      location: "Jaipur, India",
      image: "/assets/image/guide-4.jpg",
      specialties: ["Architecture", "Photography Tours"],
      languages: ["Hindi", "English", "Rajasthani"],
      rating: 4.85,
      reviewCount: 67,
      price: 1600,
      description: "Architectural expert and photographer who knows every intricate detail of Jaipur's palaces and forts.",
      detailedDescription: "Sunita is an architect by training and a photographer by passion. She offers unique tours that focus on Jaipur's stunning architecture and provide excellent photography opportunities. Sunita knows the best times to visit each location for optimal lighting and can help you capture amazing photos of your journey.",
      destinations: ["Hawa Mahal", "City Palace", "Jantar Mantar", "Amber Fort", "Nahargarh Fort", "Jaigarh Fort", "Albert Hall Museum", "Jal Mahal"],
      reviews: [
        {
          author: "Sanjay Mehta",
          date: "2023-10-22",
          rating: 5,
          content: "Sunita's architectural knowledge added so much depth to our visit. She pointed out details we would have completely missed and helped us take incredible photos."
        }
      ],
      availability: ["2023-12-11", "2023-12-12", "2023-12-15", "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", "2023-12-25", "2023-12-27", "2023-12-29"]
    }
  };

  // View profile button functionality - Open modal
  const viewProfileButtons = document.querySelectorAll('.view-profile-btn');
  const guideModal = document.getElementById('guideModal');
  const guideModalContent = document.getElementById('guideModalContent');
  const modalClose = document.querySelector('.modal-close');

  viewProfileButtons.forEach(button => {
    button.addEventListener('click', function() {
      const guideId = this.getAttribute('data-guide-id');
      const guide = guidesData[guideId];
      
      if (guide) {
        openGuideModal(guide);
      }
    });
  });

  // Function to open guide modal
  function openGuideModal(guide) {
    // Generate stars HTML
    const fullStars = '★'.repeat(Math.floor(guide.rating));
    const halfStar = guide.rating % 1 >= 0.5 ? '★' : '';
    const emptyStars = '☆'.repeat(5 - Math.ceil(guide.rating));
    const starsHTML = fullStars + halfStar + emptyStars;
    
    // Generate specialties HTML
    const specialtiesHTML = guide.specialties.map(spec => 
      `<span class="specialty">${spec}</span>`
    ).join('');
    
    // Generate languages HTML
    const languagesHTML = guide.languages.join(', ');
    
    // Generate destinations HTML
    const destinationsHTML = guide.destinations.map(dest => 
      `<span class="destination-tag">${dest}</span>`
    ).join('');
    
    // Generate reviews HTML
    const reviewsHTML = guide.reviews.map(review => `
      <div class="review">
        <div class="review-header">
          <span class="review-author">${review.author}</span>
          <span class="review-date">${review.date}</span>
        </div>
        <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
        <div class="review-content">${review.content}</div>
      </div>
    `).join('');
    
    // Generate calendar HTML
    const today = new Date();
    const calendarHTML = generateCalendar(today.getFullYear(), today.getMonth() + 1, guide.availability);
    
    // Populate modal content
    guideModalContent.innerHTML = `
      <div class="guide-profile-header">
        <div class="guide-profile-image">
          <img src="${guide.image}" alt="${guide.name}">
        </div>
        <div class="guide-profile-info">
          <h2>${guide.name}</h2>
          <p class="guide-profile-location"><i class="fas fa-map-marker-alt"></i> ${guide.location}</p>
          <div class="guide-profile-rating">
            <div class="stars">${starsHTML}</div>
            <span class="rating-score">${guide.rating}</span>
            <span class="review-count">(${guide.reviewCount} reviews)</span>
          </div>
          <div class="guide-profile-specialties">
            ${specialtiesHTML}
          </div>
          <div class="guide-profile-languages">
            <span><i class="fas fa-language"></i> ${languagesHTML}</span>
          </div>
          <div class="guide-profile-price">₹${guide.price} <span class="price-unit">/ hour</span></div>
        </div>
      </div>
      
      <div class="guide-profile-details">
        <div class="guide-profile-section">
          <h3>About Me</h3>
          <p class="guide-profile-description">${guide.detailedDescription}</p>
        </div>
        
        <div class="guide-profile-section">
          <h3>Destinations Covered</h3>
          <div class="destinations-covered">
            ${destinationsHTML}
          </div>
        </div>
        
        <div class="guide-profile-section">
          <h3>Guest Reviews</h3>
          <div class="guide-reviews">
            ${reviewsHTML}
          </div>
        </div>
        
        <div class="guide-profile-section">
          <h3>Availability</h3>
          <p>Select a date to book this guide:</p>
          <div class="availability-calendar">
            ${calendarHTML}
          </div>
        </div>
      </div>
      
      <button class="book-now-btn">Book Now</button>
    `;
    
    // Show modal
    guideModal.classList.add('active');
    
    // Add event listeners to calendar days
    const calendarDays = guideModalContent.querySelectorAll('.calendar-day.available');
    calendarDays.forEach(day => {
      day.addEventListener('click', function() {
        // Remove previous selection
        guideModalContent.querySelectorAll('.calendar-day.selected').forEach(selected => {
          selected.classList.remove('selected');
        });
        
        // Select this day
        this.classList.add('selected');
      });
    });
    
    // Add event listener to book now button
    const bookNowBtn = guideModalContent.querySelector('.book-now-btn');
    bookNowBtn.addEventListener('click', function() {
      const selectedDate = guideModalContent.querySelector('.calendar-day.selected');
      if (selectedDate) {
        alert(`Booking ${guide.name} for ${selectedDate.getAttribute('data-date')}`);
      } else {
        alert('Please select a date first');
      }
    });
  }

  // Function to generate calendar HTML
  function generateCalendar(year, month, availableDates) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayIndex = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    let calendarHTML = `<div class="calendar-header">${monthNames[month - 1]} ${year}</div>`;
    
    // Add day headers
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
      calendarHTML += `<div class="calendar-day" style="font-weight: bold;">${day}</div>`;
    });
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      calendarHTML += `<div class="calendar-day unavailable"></div>`;
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      
      if (availableDates.includes(dateStr)) {
        calendarHTML += `<div class="calendar-day available" data-date="${dateStr}">${day}</div>`;
      } else {
        calendarHTML += `<div class="calendar-day unavailable">${day}</div>`;
      }
    }
    
    return calendarHTML;
  }

  // Close modal functionality
  modalClose.addEventListener('click', function() {
    guideModal.classList.remove('active');
  });

  guideModal.addEventListener('click', function(e) {
    if (e.target === guideModal) {
      guideModal.classList.remove('active');
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && guideModal.classList.contains('active')) {
      guideModal.classList.remove('active');
    }
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
