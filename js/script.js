document.addEventListener('DOMContentLoaded', function() {
  const quadrants = document.querySelectorAll('.quadrant');
  const enlargedImage = document.getElementById('enlarged-image');

  quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
      const imageSrc = `images/${this.id}.jpg`; // Matches the quadrant's ID to an image
      enlargedImage.src = imageSrc;
      enlargedImage.style.display = 'block';
      enlargedImage.setAttribute('data-story-url', this.getAttribute('data-story-url'));
    });
  });

  enlargedImage.addEventListener('click', function() {
    window.location.href = this.getAttribute('data-story-url');
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target === enlargedImage) {
      enlargedImage.style.display = 'none';
    }
  }, true);
});
