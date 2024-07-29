document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navbarLinks.forEach(elem => {
      elem.addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          smoothScroll(targetElement, 1000); // 1000 milliseconds (1 second) duration
        }
      });
    });
  });
  
  // Custom smooth scroll function
  function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 50; // Adjusted offset
  
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Easing function
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('emailLink');
    
    emailLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        window.location.href = 'mailto:rarulkumaranr@gmail.com'; // Open the email client
    });
});
