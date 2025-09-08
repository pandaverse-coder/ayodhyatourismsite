// Tour data - Ayodhya specific tours
const tours = [
  {
    id: 1,
    title: "Ram Mandir Darshan Tour",
    image: "assets/image/ram-mandir-tour.jpg",
    duration: "Half Day",
    fullDuration: "Half Day (4 hours)",
    groupSize: "Max 15 People",
    location: "Ram Mandir",
    fullLocation: "Ram Mandir, Ayodhya",
    description: "Experience the divine aura of the newly constructed Ram Mandir with special darshan arrangements and priest guidance.",
    fullDescription: "Experience the divine aura of the newly constructed Ram Mandir with special darshan arrangements and priest guidance. This tour includes priority access to the main sanctum, explanations of the temple's architecture and significance, and time for personal prayer and meditation.",
    price: "₹1,499",
    destination: "ram-mandir",
    activity: "easy",
    activityLevel: "Easy (minimal walking)",
    badge: "Bestseller",
    features: [
      "Priority darshan access",
      "Expert guide services",
      "Prasad offering",
      "Temple history explanation",
      "Photography opportunities"
    ]
  },
  {
    id: 2,
    title: "Spiritual Ayodhya Circuit",
    image: "assets/image/spiritual-circuit.jpg",
    duration: "Full Day",
    fullDuration: "Full Day (8 hours)",
    groupSize: "Max 12 People",
    location: "Multiple Temples",
    fullLocation: "Multiple Temple Sites",
    description: "A comprehensive tour covering all major spiritual sites including Hanuman Garhi, Kanak Bhawan, and Nageshwarnath Temple.",
    fullDescription: "A comprehensive tour covering all major spiritual sites including Hanuman Garhi, Kanak Bhawan, and Nageshwarnath Temple. This immersive experience includes transportation between sites, traditional lunch, and deep cultural insights from our expert guides.",
    price: "₹2,499",
    destination: "all",
    activity: "moderate",
    activityLevel: "Moderate (some walking)",
    badge: "Cultural",
    features: [
      "All entrance fees included",
      "Traditional lunch",
      "AC transportation",
      "Expert spiritual guide",
      "Souvenir booklet"
    ]
  },
  {
    id: 3,
    title: "Saryu River Heritage Walk",
    image: "assets/image/saryu-river.jpg",
    duration: "Half Day",
    fullDuration: "Half Day (3 hours)",
    groupSize: "Max 8 People",
    location: "Saryu River",
    fullLocation: "Saryu River Ghats",
    description: "A peaceful morning walk along the sacred Saryu River followed by a traditional boat ride and meditation session.",
    fullDescription: "A peaceful morning walk along the sacred Saryu River followed by a traditional boat ride and meditation session. Experience the spiritual energy of the ghats at sunrise and participate in traditional river rituals.",
    price: "₹999",
    destination: "saryu-river",
    activity: "easy",
    activityLevel: "Easy (gentle walking)",
    badge: "Nature",
    features: [
      "Guided river walk",
      "Traditional boat ride",
      "Meditation session",
      "Morning tea & snacks",
      "Ritual participation"
    ]
  },
  {
    id: 4,
    title: "Ayodhya Deepotsav Experience",
    image: "assets/image/deepotsav.jpg",
    duration: "2 Days",
    fullDuration: "2 Days (festival duration)",
    groupSize: "Max 20 People",
    location: "Festival Venues",
    fullLocation: "Festival Venues, Ayodhya",
    description: "Special tour during the famous Deepotsav festival with premium seating for the grand aarti and cultural programs.",
    fullDescription: "Special tour during the famous Deepotsav festival with premium seating for the grand aarti and cultural programs. Experience the magnificent display of lights, cultural performances, and spiritual ceremonies.",
    price: "₹4,999",
    destination: "all",
    activity: "moderate",
    activityLevel: "Moderate (festival walking)",
    badge: "Luxury",
    features: [
      "Premium aarti seating",
      "Cultural performance access",
      "Festival guide",
      "Traditional dinner",
      "Special souvenir"
    ]
  },
  {
    id: 5,
    title: "Temple Architecture Tour",
    image: "assets/image/temple-architecture.jpg",
    duration: "Full Day",
    fullDuration: "Full Day (7 hours)",
    groupSize: "Max 10 People",
    location: "Multiple Temples",
    fullLocation: "Multiple Temple Sites",
    description: "For architecture enthusiasts, this tour explores the design, history, and construction techniques of Ayodhya's temples.",
    fullDescription: "For architecture enthusiasts, this tour explores the design, history, and construction techniques of Ayodhya's temples. Learn about ancient Indian temple architecture, sculpture artistry, and spiritual symbolism.",
    price: "₹2,199",
    destination: "all",
    activity: "moderate",
    activityLevel: "Moderate (extensive walking)",
    badge: "Cultural",
    features: [
      "Architectural guide",
      "Detailed explanations",
      "Photo opportunities",
      "Reference materials",
      "Expert Q&A session"
    ]
  },
  {
    id: 6,
    title: "Pilgrimage Complete Package",
    image: "assets/image/pilgrimage.jpg",
    duration: "3+ Days",
    fullDuration: "3-5 Days (customizable)",
    groupSize: "Max 6 People",
    location: "All Major Sites",
    fullLocation: "All Major Religious Sites",
    description: "A comprehensive spiritual journey covering all important religious sites with accommodation, meals, and expert guides included.",
    fullDescription: "A comprehensive spiritual journey covering all important religious sites with accommodation, meals, and expert guides included. This immersive package offers a complete spiritual retreat with personalized attention.",
    price: "₹8,999",
    destination: "all",
    activity: "challenging",
    activityLevel: "Challenging (extensive touring)",
    badge: "Premium",
    features: [
      "All accommodations",
      "All meals included",
      "Personal guide",
      "Private transportation",
      "Customizable itinerary"
    ]
  }
];

// Create a map for easy tour lookup by ID
const toursMap = {};
tours.forEach(tour => {
  toursMap[tour.id] = tour;
});

// DOM elements
const toursContainer = document.getElementById('tours-container');
const resultsInfo = document.getElementById('results-info');
const searchButton = document.getElementById('search-tours');
const destinationFilter = document.getElementById('destination');
const durationFilter = document.getElementById('duration');
const activityFilter = document.getElementById('activity');

// Store current tour ID for WhatsApp booking
let currentTourId = null;

// Function to display tours
function displayTours(toursToShow) {
  toursContainer.innerHTML = '';
  
  if (toursToShow.length === 0) {
    toursContainer.innerHTML = '<div class="no-results"><h3>No tours match your filters</h3><p>Try adjusting your search criteria</p></div>';
    resultsInfo.textContent = 'Showing 0 of 6 tours';
    return;
  }
  
  resultsInfo.textContent = `Showing ${toursToShow.length} of 6 tours`;
  
  toursToShow.forEach(tour => {
    const tourCard = document.createElement('div');
    tourCard.className = 'tour-card';
    tourCard.innerHTML = `
      <div class="tour-image" style="background-image: url('${tour.image}');">
        <span class="tour-badge ${tour.badge.toLowerCase()}">${tour.badge}</span>
      </div>
      <div class="tour-content">
        <h3>${tour.title}</h3>
        <div class="tour-details">
          <span><i class="fas fa-clock"></i> ${tour.duration}</span>
          <span><i class="fas fa-user-friends"></i> ${tour.groupSize}</span>
          <span><i class="fas fa-map-marker-alt"></i> ${tour.location}</span>
        </div>
        <p>${tour.description}</p>
        <div class="tour-price">
          <span class="price">From ${tour.price}</span>
          <button class="book-btn" data-tour-id="${tour.id}">View Details</button>
        </div>
      </div>
    `;
    toursContainer.appendChild(tourCard);
  });
  
  // Add event listeners to the "View Details" buttons
  addViewDetailsListeners();
}

// Add event listeners to all "View Details" buttons
function addViewDetailsListeners() {
  const viewDetailsButtons = document.querySelectorAll('.book-btn');
  
  viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tourId = this.getAttribute('data-tour-id');
      openTourModal(tourId);
    });
  });
}

// Function to filter tours
function filterTours() {
  const destinationValue = destinationFilter.value;
  const durationValue = durationFilter.value;
  const activityValue = activityFilter.value;
  
  const filteredTours = tours.filter(tour => {
    // Destination filter
    if (destinationValue !== 'all' && tour.destination !== destinationValue && tour.destination !== 'all') {
      return false;
    }
    
    // Duration filter
    if (durationValue !== 'all') {
      if (durationValue === 'half-day' && !tour.duration.includes('Half')) return false;
      if (durationValue === 'full-day' && !tour.duration.includes('Full')) return false;
      if (durationValue === '2-days' && !tour.duration.includes('2')) return false;
      if (durationValue === '3-plus' && !tour.duration.includes('3+')) return false;
    }
    
    // Activity filter
    if (activityValue !== 'all' && tour.activity !== activityValue) {
      return false;
    }
    
    return true;
  });
  
  displayTours(filteredTours);
}

// Modal functions
function openTourModal(tourId) {
  const tour = toursMap[tourId];
  if (!tour) return;
  
  // Store current tour ID for WhatsApp booking
  currentTourId = tourId;
  
  // Populate modal with tour data
  document.getElementById('modalTitle').textContent = tour.title;
  document.getElementById('modalImage').style.backgroundImage = `url('${tour.image}')`;
  document.getElementById('modalDuration').textContent = tour.fullDuration;
  document.getElementById('modalGroupSize').textContent = tour.groupSize;
  document.getElementById('modalLocation').textContent = tour.fullLocation;
  document.getElementById('modalActivity').textContent = tour.activityLevel;
  document.getElementById('modalDescription').textContent = tour.fullDescription;
  document.getElementById('modalPrice').textContent = tour.price;
  
  // Populate features
  const featuresContainer = document.getElementById('modalFeatures');
  featuresContainer.innerHTML = '';
  tour.features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'feature-item';
    featureItem.innerHTML = `<i class="fas fa-check"></i> <span>${feature}</span>`;
    featuresContainer.appendChild(featureItem);
  });
  
  // Show modal
  document.getElementById('tourModal').classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
  document.getElementById('tourModal').classList.remove('active');
  document.body.style.overflow = ''; // Re-enable scrolling
}

// Show WhatsApp notification
function showWhatsAppNotification() {
  const notification = document.getElementById('whatsapp-notification');
  if (notification) {
    notification.classList.add('active');
  }
}

// Hide WhatsApp notification
function hideWhatsAppNotification() {
  const notification = document.getElementById('whatsapp-notification');
  if (notification) {
    notification.classList.remove('active');
  }
}

// WhatsApp Booking Function
function setupWhatsAppBooking() {
  const bookButtons = document.querySelectorAll('.btn-book');
  
  bookButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (!currentTourId) return;
      
      const tour = toursMap[currentTourId];
      if (!tour) return;
      
      // Show notification
      showWhatsAppNotification();
      
      // Create a detailed WhatsApp message
      const message = `Namaste! 🙏%0A%0A` +
                     `I would like to book the following tour:%0A%0A` +
                     `*${tour.title}*%0A` +
                     `*Price:* ${tour.price}%0A` +
                     `*Duration:* ${tour.fullDuration}%0A` +
                     `*Group Size:* ${tour.groupSize}%0A` +
                     `*Location:* ${tour.fullLocation}%0A` +
                     `*Activity Level:* ${tour.activityLevel}%0A%0A` +
                     `Please provide information about availability and the booking process.`;
      
      // Your WhatsApp number (in international format without +)
      const phoneNumber = '918874142753';
      
      // Create the WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      
      // Open WhatsApp after a brief delay to show the notification
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
        // Hide notification after redirecting
        setTimeout(hideWhatsAppNotification, 1000);
      }, 1500);
    });
  });
}

// Close modal when clicking outside content
document.getElementById('tourModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Event listeners
if (searchButton) searchButton.addEventListener('click', filterTours);
if (destinationFilter) destinationFilter.addEventListener('change', filterTours);
if (durationFilter) durationFilter.addEventListener('change', filterTours);
if (activityFilter) activityFilter.addEventListener('change', filterTours);

// Initialize WhatsApp booking when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupWhatsAppBooking();
});

// Initial display of all tours
displayTours(tours);