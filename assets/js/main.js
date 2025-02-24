$(document).ready(function() {
    // Initialize Owl Carousel
    $('.owl-features').owlCarousel({
      items: 3, // Number of items visible at once
      margin: 30, // Space between items
      autoplay: true, // Enable auto-scrolling
      autoplayTimeout: 3000, // Set interval for auto-scroll
      autoplayHoverPause: true, // Pause scrolling when hover
      loop: true, // Loop the carousel
      center: true, // Center the active item
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }
    });
  
    // Hover effect to stop scrolling and highlight the item
    $(".owl-features .item").hover(function() {
      // Pause the carousel when hovering
      $('.owl-features').trigger('stop.owl.autoplay');
      $(this).css('transform', 'scale(1.2)');
      $(this).css('filter', 'brightness(1.2)');
    }, function() {
      // Resume the carousel when the hover is over
      $('.owl-features').trigger('play.owl.autoplay');
      $(this).css('transform', 'scale(1)');
      $(this).css('filter', 'brightness(1)');
    });
  });
  