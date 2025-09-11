// // Blog Page Functionality
// document.addEventListener('DOMContentLoaded'), function() {
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
//     })};

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
  

  // Blog post filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('.post-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter posts
      postCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          if (card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // Blog search functionality
  const blogSearch = document.getElementById('blogSearch');
  if (blogSearch) {
    blogSearch.addEventListener('input'), function() {
      const searchTerm = this.value.toLowerCase
    }}

    // Store reviews in an array
        let reviews = [];
        
        // Sample initial reviews
        const sampleReviews = [
            {
                author: "Rajesh Kumar",
                initials: "RK",
                date: "June 12, 2023",
                rating: 5,
                title: "An Spiritual Journey to Remember",
                content: "My visit to Ayodhya was nothing short of magical. The serene atmosphere at Ram Mandir filled me with peace. The guides were knowledgeable and made the history come alive. The local cuisine was delicious, especially the street food near Sarayu River.",
                location: "Ram Mandir, Ayodhya",
                likes: 24
            },
            {
                author: "Priya Singh",
                initials: "PS",
                date: "May 28, 2023",
                rating: 4,
                title: "Beautiful Ghats of Sarayu River",
                content: "The evening aarti at Sarayu River was a mesmerizing experience. The devotion and energy were palpable. I also enjoyed the boat ride which offered stunning views of the ghats. The only downside was the crowd, but it was worth it for the experience.",
                location: "Sarayu River, Ayodhya",
                likes: 18
            },
            {
                author: "Amit Mishra",
                initials: "AM",
                date: "July 5, 2023",
                rating: 5,
                title: "Excellent Tour Guides",
                content: "The tour guides provided by Ayodhya Tourism were exceptional. Their knowledge about the history and significance of each site made our visit truly educational. They were patient with all our questions and made sure we had a comfortable experience throughout.",
                location: "Hanuman Garhi, Ayodhya",
                likes: 32
            }
        ];
        
        // Function to generate star rating HTML
        function generateStarRating(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '★';
                } else {
                    stars += '☆';
                }
            }
            return stars;
        }
        
        // Function to render reviews
        function renderReviews() {
            const reviewsList = document.getElementById('reviewsList');
            reviewsList.innerHTML = '';
            
            if (reviews.length === 0) {
                reviewsList.innerHTML = `
                    <div class="no-reviews">
                        <i class="fas fa-comment-slash" style="font-size: 3rem; margin-bottom: 15px;"></i>
                        <h3>No Reviews Yet</h3>
                        <p>Be the first to share your experience!</p>
                    </div>
                `;
                return;
            }
            
            reviews.forEach((review, index) => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review-card';
                reviewElement.innerHTML = `
                    <div class="review-header">
                        <div class="review-author">
                            <div class="author-avatar">${review.initials}</div>
                            <div class="author-info">
                                <h4>${review.author}</h4>
                                <span class="review-date">${review.date}</span>
                            </div>
                        </div>
                        <div class="review-rating">${generateStarRating(review.rating)}</div>
                    </div>
                    
                    <div class="review-content">
                        <h3>${review.title}</h3>
                        <p>${review.content}</p>
                    </div>
                    
                    <div class="review-footer">
                        <div class="review-location">
                            <i class="fas fa-map-marker-alt"></i> ${review.location}
                        </div>
                        <div class="review-actions">
                            <button class="action-btn" onclick="likeReview(${index})">
                                <i class="fas fa-heart"></i> <span>${review.likes}</span>
                            </button>
                            <button class="action-btn" onclick="shareReview(${index})">
                                <i class="fas fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                `;
                reviewsList.appendChild(reviewElement);
            });
        }
        
        // Function to handle form submission
        document.getElementById('experienceForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const authorName = document.getElementById('authorName').value;
            const experienceTitle = document.getElementById('experienceTitle').value;
            const experienceContent = document.getElementById('experienceContent').value;
            const experienceLocation = document.getElementById('experienceLocation').value;
            const rating = document.querySelector('input[name="rating"]:checked') ? 
                          parseInt(document.querySelector('input[name="rating"]:checked').value) : 0;
            
            // Validate form
            if (!authorName || !experienceTitle || !experienceContent || !experienceLocation || rating === 0) {
                alert('Please fill all required fields');
                return;
            }
            
            // Create initials from author name
            const initials = authorName.split(' ').map(n => n[0]).join('').toUpperCase();
            
            // Create new review object
            const newReview = {
                author: authorName,
                initials: initials,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                rating: rating,
                title: experienceTitle,
                content: experienceContent,
                location: experienceLocation,
                likes: 0
            };
            
            // Add to beginning of reviews array
            reviews.unshift(newReview);
            
            // Re-render reviews
            renderReviews();
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            
            // Reset the form after submission
            setTimeout(function() {
                document.getElementById('experienceForm').reset();
                
                // Reset star rating visually
                document.querySelectorAll('.rating-input label').forEach(star => {
                    star.style.color = '#ddd';
                });
                
                successMessage.style.display = 'none';
            }, 3000);
        });
        
        // Function to handle liking a review
        function likeReview(index) {
            reviews[index].likes++;
            renderReviews();
        }
        
        // Function to handle sharing a review
        function shareReview(index) {
            const review = reviews[index];
            alert(`Sharing review: ${review.title}\nBy: ${review.author}`);
            // In a real application, this would open a share dialog
        }
        
        // Initialize with sample reviews
        window.addEventListener('DOMContentLoaded', function() {
            reviews = [...sampleReviews];
            renderReviews();
        });

        // Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Check if URL has a hash and scroll to that section
    if (window.location.hash) {
        setTimeout(function() {
            const target = document.querySelector(window.location.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.includes('#')) {
                const hash = href.split('#')[1];
                const target = document.getElementById(hash);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 20,
                        behavior: 'smooth'
                    });
                    // Update URL without jumping
                    history.pushState(null, null, '#' + hash);
                }
            }
        });
    });
});