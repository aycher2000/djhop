// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Initialize lightGallery for featured gallery
  const featuredGallery = document.getElementById('featured-gallery');
  if (featuredGallery) {
    lightGallery(featuredGallery, {
      speed: 500,
      download: false
    });
  }
  
  // Initialize lightGallery for portfolio gallery
  const portfolioGallery = document.getElementById('portfolio-gallery');
  if (portfolioGallery) {
    lightGallery(portfolioGallery, {
      speed: 500,
      download: false
    });
  }
  
  // Portfolio filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Simple animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.gallery-item, .news-item');
    
    elements.forEach(item => {
      const position = item.getBoundingClientRect();
      
      // Check if element is in viewport
      if (position.top < window.innerHeight && position.bottom >= 0) {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Add initial styles for animation
  const prepareAnimation = function() {
    const elements = document.querySelectorAll('.gallery-item, .news-item');
    
    elements.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  };
  
  // Initialize animations
  prepareAnimation();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navUl = document.querySelector('nav ul');
  const body = document.body;
  
  mobileMenuBtn.addEventListener('click', () => {
    navUl.classList.toggle('active');
    
    // Optional: Prevent scrolling when menu is open
    if (navUl.classList.contains('active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navUl.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      navUl.classList.remove('active');
      body.style.overflow = 'auto';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navUl = document.querySelector('nav ul');
  const body = document.body;
  
  // Check if elements exist to prevent errors
  if (mobileMenuBtn && navUl) {
    mobileMenuBtn.addEventListener('click', (event) => {
      // Stop event from propagating
      event.stopPropagation();
      
      // Toggle active class on navigation
      navUl.classList.toggle('active');
      
      // Prevent scrolling when menu is open
      if (navUl.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!navUl.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        navUl.classList.remove('active');
        body.style.overflow = 'auto';
      }
    });
  }
});