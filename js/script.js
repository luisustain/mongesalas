document.addEventListener('DOMContentLoaded', function() {
  const quadrants = document.querySelectorAll('.quadrant');
  const enlargedImage = document.getElementById('enlarged-image');

  quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
      const imageSrc = `images/${this.id}.jpg`; // Assuming the naming convention matches the ID
      enlargedImage.src = imageSrc;
      enlargedImage.style.display = 'block';
    });

    quadrant.addEventListener('mouseout', function() {
      enlargedImage.style.display = 'none';
    });

    quadrant.addEventListener('click', function() {
      const storyUrl = this.getAttribute('data-story-url');
      window.location.href = storyUrl;
    });
  });
});
