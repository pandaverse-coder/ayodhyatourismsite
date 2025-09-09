// Hotels data (would typically come from a database)
const hotelsData = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Downtown District",
    price: 189,
    oldPrice: 225,
    rating: 4.8,
    stars: 5,
    image: "/assets/image/hotel-1.jpg",
    badge: "Best Value",
    amenities: ["wifi", "pool", "gym"],
    description: "A luxurious hotel in the heart of the city, offering premium amenities and exceptional service for both business and leisure travelers.",
    reviews: [
      {
        source: "Booking.com",
        rating: 4.7,
        text: "Excellent location and very comfortable rooms."
      },
      {
        source: "TripAdvisor",
        rating: 4.9,
        text: "The staff went above and beyond to make our stay memorable."
      }
    ],
    roomCategories: [
      {
        name: "Standard Room",
        price: 189,
        images: ["/assets/image/room1-1.jpg", "/assets/image/room1-2.jpg"],
        description: "Comfortable room with a queen bed and basic amenities",
        maxGuests: 2
      },
      {
        name: "Deluxe Suite",
        price: 259,
        images: ["/assets/image/room2-1.jpg", "/assets/image/room2-2.jpg"],
        description: "Spacious suite with separate living area and premium amenities",
        maxGuests: 3
      }
    ],
    category: "luxury"
  },
  // Additional hotel data would go here
];

// Date validation
document.addEventListener('DOMContentLoaded', function() {
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');

  if (checkinInput && checkoutInput) {
    const today = new Date().toISOString().split('T')[0];
    checkinInput.min = today;

    checkinInput.addEventListener('change', function() {
      checkoutInput.min = this.value;
      if (checkoutInput.value && checkoutInput.value < this.value) {
        checkoutInput.value = '';
      }
    });
  }

  // Guests selector functionality
  const guestsInput = document.getElementById('guests');
  const guestsDropdown = document.querySelector('.guests-dropdown');
  
  let adults = 2;
  let children = 0;
  let rooms = 1;
  
  function updateGuestsDisplay() {
    let displayText = `${adults} Adult${adults !== 1 ? 's' : ''}`;
    if (children > 0) {
      displayText += `, ${children} Child${children !== 1 ? 'ren' : ''}`;
    }
    displayText += `, ${rooms} Room${rooms !== 1 ? 's' : ''}`;
    guestsInput.value = displayText;
  }
  
  // Initialize display
  updateGuestsDisplay();
  
  // Counter button functionality
  document.querySelectorAll('.counter-btn').forEach(button => {
    button.addEventListener('click', function() {
      const type = this.dataset.type;
      const action = this.dataset.action;
      
      if (type === 'adults') {
        if (action === 'increase') {
          adults++;
        } else if (action === 'decrease' && adults > 1) {
          adults--;
        }
        document.getElementById('adults-count').textContent = adults;
      } else if (type === 'children') {
        if (action === 'increase') {
          children++;
        } else if (action === 'decrease' && children > 0) {
          children--;
        }
        document.getElementById('children-count').textContent = children;
      } else if (type === 'rooms') {
        if (action === 'increase') {
          rooms++;
        } else if (action === 'decrease' && rooms > 1) {
          rooms--;
        }
        document.getElementById('rooms-count').textContent = rooms;
      }
      
      updateGuestsDisplay();
    });
  });
  
  // Done button functionality
  document.querySelector('.done-btn').addEventListener('click', function() {
    guestsDropdown.classList.remove('show');
  });
  
  // Toggle guests dropdown
  if (guestsInput && guestsDropdown) {
    guestsInput.addEventListener('click', function(e) {
      e.stopPropagation();
      guestsDropdown.classList.toggle('show');
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (guestsDropdown && !guestsDropdown.contains(e.target) && e.target !== guestsInput) {
      guestsDropdown.classList.remove('show');
    }
  });
  
  // Price slider functionality
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  
  if (priceRange && priceValue) {
    priceRange.addEventListener('input', function() {
      priceValue.textContent = this.value;
    });
  }
  
  // Search and filter functionality
  document.getElementById('hotelSearchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    applyFilters();
  });
  
  document.querySelector('.apply-filters').addEventListener('click', function() {
    applyFilters();
  });
  
  // Wishlist functionality
  document.addEventListener('click', function(e) {
    if (e.target.closest('.wishlist-btn')) {
      const btn = e.target.closest('.wishlist-btn');
      btn.classList.toggle('active');
      btn.querySelector('i').classList.toggle('far');
      btn.querySelector('i').classList.toggle('fas');
    }
  });
  
  // Load more hotels functionality
  document.querySelector('.load-more-btn').addEventListener('click', function() {
    // In a real app, this would load more hotels from an API
    alert('Loading more hotels...');
  });
  
  // Initialize with all hotels
  renderHotels(hotelsData);
});

function applyFilters() {
  const destination = document.getElementById('destination').value.toLowerCase();
  const priceFilter = parseInt(document.getElementById('priceRange').value);
  const selectedRatings = Array.from(document.querySelectorAll('input[name="rating"]:checked')).map(cb => parseInt(cb.value));
  const selectedAmenities = Array.from(document.querySelectorAll('input[name="amenities"]:checked')).map(cb => cb.value);
  const sortOption = document.getElementById('sortHotels').value;
  
  // Filter hotels based on criteria
  let filteredHotels = hotelsData.filter(hotel => {
    // Destination filter
    if (destination && !hotel.name.toLowerCase().includes(destination) && 
        !hotel.location.toLowerCase().includes(destination)) {
      return false;
    }
    
    // Price filter
    if (hotel.price > priceFilter) {
      return false;
    }
    
    // Rating filter
    if (selectedRatings.length > 0 && !selectedRatings.includes(hotel.stars)) {
      return false;
    }
    
    // Amenities filter
    if (selectedAmenities.length > 0) {
      const hasAllAmenities = selectedAmenities.every(amenity => 
        hotel.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }
    
    return true;
  });
  
  // Sort hotels
  switch(sortOption) {
    case 'price-low':
      filteredHotels.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredHotels.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredHotels.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Recommended (no sorting)
      break;
  }
  
  // Render filtered hotels
  renderHotels(filteredHotels);
}

function renderHotels(hotels) {
  const hotelsContainer = document.querySelector('.hotels-container');
  hotelsContainer.innerHTML = '';
  
  if (hotels.length === 0) {
    hotelsContainer.innerHTML = '<p class="no-results">No hotels match your search criteria. Please try different filters.</p>';
    return;
  }
  
  hotels.forEach(hotel => {
    const hotelCard = document.createElement('div');
    hotelCard.className = 'hotel-card';
    hotelCard.innerHTML = `
      <div class="hotel-image" style="background-image: url('${hotel.image}');">
        ${hotel.badge ? `<span class="hotel-badge ${hotel.badge.toLowerCase().replace(' ', '-')}">${hotel.badge}</span>` : ''}
        <button class="wishlist-btn"><i class="far fa-heart"></i></button>
      </div>
      <div class="hotel-content">
        <div class="hotel-header">
          <h3>${hotel.name}</h3>
          <div class="rating">
            <span class="stars">${'★'.repeat(hotel.stars)}${'☆'.repeat(5-hotel.stars)}</span>
            <span class="rating-score">${hotel.rating}</span>
          </div>
        </div>
        <p class="location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
        <div class="amenities-list">
          ${hotel.amenities.map(amenity => {
            let icon = '';
            switch(amenity) {
              case 'wifi': icon = '<i class="fas fa-wifi"></i> Free WiFi'; break;
              case 'pool': icon = '<i class="fas fa-swimming-pool"></i> Pool'; break;
              case 'gym': icon = '<i class="fas fa-dumbbell"></i> Gym'; break;
              case 'spa': icon = '<i class="fas fa-spa"></i> Spa'; break;
              default: icon = amenity;
            }
            return `<span>${icon}</span>`;
          }).join('')}
        </div>
        <div class="price-section">
          <div class="price">
            <span class="current-price">$${hotel.price}</span>
            <span class="old-price">$${hotel.oldPrice}</span>
            <span class="per-night">/night</span>
          </div>
          <button class="book-btn" data-hotel-id="${hotel.id}">View Deal</button>
        </div>
      </div>
    `;
    hotelsContainer.appendChild(hotelCard);
  });
  
  // Add event listeners to the new "View Deal" buttons
  document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
      const hotelId = this.dataset.hotelId;
      const hotel = hotelsData.find(h => h.id == hotelId);
      if (hotel) {
        openHotelModal(hotel);
      }
    });
  });
}

function openHotelModal(hotel) {
  // Create modal HTML
  const modalHTML = `
    <div class="modal-overlay" id="hotelModal">
      <div class="modal-content">
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="modal-header">
          <div class="hotel-badges">
            ${hotel.badge ? `<span class="hotel-badge ${hotel.badge.toLowerCase().replace(' ', '-')}">${hotel.badge}</span>` : ''}
            <span class="hotel-category">${hotel.category}</span>
          </div>
          <h2>${hotel.name}</h2>
          <div class="modal-rating">
            <span class="stars">${'★'.repeat(hotel.stars)}${'☆'.repeat(5-hotel.stars)}</span>
            <span class="rating-score">${hotel.rating}</span>
          </div>
          <p class="location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
        </div>
        
        <div class="modal-body">
          <div class="hotel-gallery">
            <div class="main-image" style="background-image: url('${hotel.image}');"></div>
            <div class="thumbnail-images">
              ${hotel.roomCategories[0].images.map(img => 
                `<div class="thumb" style="background-image: url('${img}');"></div>`
              ).join('')}
            </div>
          </div>
          
          <div class="hotel-description">
            <h3>Description</h3>
            <p>${hotel.description}</p>
          </div>
          
          <div class="hotel-reviews">
            <h3>Reviews</h3>
            ${hotel.reviews.map(review => `
              <div class="review">
                <div class="review-source">${review.source} <span class="review-rating">${review.rating}</span></div>
                <p>${review.text}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="hotel-amenities">
            <h3>Amenities</h3>
            <div class="amenities-grid">
              ${hotel.amenities.map(amenity => {
                let icon = '';
                switch(amenity) {
                  case 'wifi': icon = '<i class="fas fa-wifi"></i><span>Free WiFi</span>'; break;
                  case 'pool': icon = '<i class="fas fa-swimming-pool"></i><span>Swimming Pool</span>'; break;
                  case 'gym': icon = '<i class="fas fa-dumbbell"></i><span>Fitness Center</span>'; break;
                  case 'spa': icon = '<i class="fas fa-spa"></i><span>Spa</span>'; break;
                  default: icon = `<span>${amenity}</span>`;
                }
                return `<div class="amenity-item">${icon}</div>`;
              }).join('')}
            </div>
          </div>
          
          <div class="room-categories">
            <h3>Room Categories</h3>
            ${hotel.roomCategories.map(room => `
              <div class="room-card">
                <div class="room-images">
                  ${room.images.map(img => 
                    `<div class="room-img" style="background-image: url('${img}');"></div>`
                  ).join('')}
                </div>
                <div class="room-details">
                  <h4>${room.name}</h4>
                  <p>${room.description}</p>
                  <div class="room-price">$${room.price} <span>/night</span></div>
                  <button class="select-room-btn" data-hotel-id="${hotel.id}" data-room-name="${room.name}" data-room-price="${room.price}">
                    Select Room
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Add event listeners
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('hotelModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  
  // Add event listeners to room selection buttons
  document.querySelectorAll('.select-room-btn').forEach(button => {
    button.addEventListener('click', function() {
      const hotelId = this.dataset.hotelId;
      const roomName = this.dataset.roomName;
      const roomPrice = this.dataset.roomPrice;
      const hotel = hotelsData.find(h => h.id == hotelId);
      
      if (hotel) {
        const room = hotel.roomCategories.find(r => r.name === roomName);
        if (room) {
          closeModal();
          openBookingModal(hotel, room);
        }
      }
    });
  });
}

function openBookingModal(hotel, room) {
  // Create booking modal HTML
  const modalHTML = `
    <div class="modal-overlay" id="bookingModal">
      <div class="modal-content booking-modal">
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <h2>Book Your Stay</h2>
        <div class="booking-hotel-info">
          <h3>${hotel.name}</h3>
          <p>${room.name} - $${room.price}/night</p>
        </div>
        
        <form id="bookingForm">
          <div class="form-row">
            <div class="input-group">
              <label for="bookingCheckin"><i class="fas fa-calendar-alt"></i> Check-in</label>
              <input type="date" id="bookingCheckin" required>
            </div>
            <div class="input-group">
              <label for="bookingCheckout"><i class="fas fa-calendar-alt"></i> Check-out</label>
              <input type="date" id="bookingCheckout" required>
            </div>
          </div>
          
          <div class="guests-selection">
            <h4>Guests</h4>
            <div class="guest-type">
              <span>Adults</span>
              <div class="counter">
                <button type="button" class="counter-btn" data-type="bookingAdults" data-action="decrease">-</button>
                <span id="bookingAdults-count">1</span>
                <button type="button" class="counter-btn" data-type="bookingAdults" data-action="increase">+</button>
              </div>
            </div>
            <div class="guest-type">
              <span>Children</span>
              <div class="counter">
                <button type="button" class="counter-btn" data-type="bookingChildren" data-action="decrease">-</button>
                <span id="bookingChildren-count">0</span>
                <button type="button" class="counter-btn" data-type="bookingChildren" data-action="increase">+</button>
              </div>
            </div>
            <div id="childrenAges" class="children-ages"></div>
          </div>
          
          <div class="price-summary">
            <h4>Price Summary</h4>
            <div class="price-details">
              <div class="price-line">
                <span>$${room.price} x <span id="nightsCount">0</span> nights</span>
                <span>$<span id="roomTotal">0</span></span>
              </div>
              <div class="price-line">
                <span>Taxes and fees</span>
                <span>$<span id="taxes">0</span></span>
              </div>
              <div class="price-line total">
                <span>Total</span>
                <span>$<span id="bookingTotal">0</span></span>
              </div>
            </div>
          </div>
          
          <button type="submit" class="book-now-btn">Book Now</button>
        </form>
      </div>
    </div>
  `;
  
  // Add modal to page
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Initialize date validation
  const checkinInput = document.getElementById('bookingCheckin');
  const checkoutInput = document.getElementById('bookingCheckout');
  
  if (checkinInput && checkoutInput) {
    const today = new Date().toISOString().split('T')[0];
    checkinInput.min = today;
    
    checkinInput.addEventListener('change', function() {
      checkoutInput.min = this.value;
      calculateBookingPrice(room.price);
    });
    
    checkoutInput.addEventListener('change', function() {
      calculateBookingPrice(room.price);
    });
  }
  
  // Initialize guest counters
  let bookingAdults = 1;
  let bookingChildren = 0;
  
  document.querySelectorAll('.counter-btn').forEach(button => {
    button.addEventListener('click', function() {
      const type = this.dataset.type;
      const action = this.dataset.action;
      
      if (type === 'bookingAdults') {
        if (action === 'increase') {
          bookingAdults++;
        } else if (action === 'decrease' && bookingAdults > 1) {
          bookingAdults--;
        }
        document.getElementById('bookingAdults-count').textContent = bookingAdults;
      } else if (type === 'bookingChildren') {
        if (action === 'increase') {
          bookingChildren++;
        } else if (action === 'decrease' && bookingChildren > 0) {
          bookingChildren--;
        }
        document.getElementById('bookingChildren-count').textContent = bookingChildren;
        
        // Update children age fields
        updateChildrenAgeFields(bookingChildren);
      }
      
      calculateBookingPrice(room.price);
    });
  });
  
  // Add event listeners
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('bookingModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real app, you would process the booking here
    alert('Booking successful! Thank you for your reservation.');
    closeModal();
  });
  
  // Initial price calculation
  calculateBookingPrice(room.price);
}

function updateChildrenAgeFields(childrenCount) {
  const container = document.getElementById('childrenAges');
  container.innerHTML = '';
  
  for (let i = 1; i <= childrenCount; i++) {
    const ageField = document.createElement('div');
    ageField.className = 'age-field';
    ageField.innerHTML = `
      <label for="childAge${i}">Child ${i} Age</label>
      <select id="childAge${i}" class="child-age">
        <option value="0">Under 1</option>
        ${Array.from({length: 17}, (_, i) => 
          `<option value="${i+1}">${i+1}</option>`
        ).join('')}
      </select>
    `;
    container.appendChild(ageField);
  }
}

function calculateBookingPrice(roomPrice) {
  const checkin = new Date(document.getElementById('bookingCheckin').value);
  const checkout = new Date(document.getElementById('bookingCheckout').value);
  
  if (!checkin || !checkout || checkin >= checkout) {
    document.getElementById('nightsCount').textContent = '0';
    document.getElementById('roomTotal').textContent = '0';
    document.getElementById('taxes').textContent = '0';
    document.getElementById('bookingTotal').textContent = '0';
    return;
  }
  
  // Calculate nights
  const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
  document.getElementById('nightsCount').textContent = nights;
  
  // Calculate room total
  const roomTotal = roomPrice * nights;
  document.getElementById('roomTotal').textContent = roomTotal.toFixed(2);
  
  // Calculate taxes (assuming 12%)
  const taxes = roomTotal * 0.12;
  document.getElementById('taxes').textContent = taxes.toFixed(2);
  
  // Calculate total
  const total = roomTotal + taxes;
  document.getElementById('bookingTotal').textContent = total.toFixed(2);
}

function closeModal() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => modal.remove());
}
