/**
 * Kanha Pure Veg Restaurant - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Update icon
      if (navLinks.classList.contains('active')) {
        mobileToggle.innerHTML = '<i class="ph ph-x"></i>';
      } else {
        mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
      }
    });
  }
  
  // Close menu on link click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
      }
    });
  });
  
  // Sticky Navigation Header on Scroll
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return; // Skip empty hash
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Offset for sticky header
        const headerOffset = navbar.offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add active class to trigger animation
        entry.target.classList.add('active');
        // Unobserve after animating once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Select all elements to animate
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  
  revealElements.forEach(element => {
    observer.observe(element);
  });
});
