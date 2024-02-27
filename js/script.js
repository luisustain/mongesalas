document.addEventListener('DOMContentLoaded', function() {
  const quadrants = document.querySelectorAll('.quadrant');
  const enlargedImage = document.getElementById('enlarged-image');

  quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
      const imageUrl = this.getAttribute('data-image-url');
      enlargedImage.src = imageUrl;
      enlargedImage.style.display = 'block';
      // Set the story URL for the click event
      enlargedImage.setAttribute('data-story-url', this.getAttribute('data-story-url'));
    });

    quadrant.addEventListener('mouseout', function() {
      enlargedImage.style.display = 'none';
    });
  });

  enlargedImage.addEventListener('click', function() {
    const storyUrl = this.getAttribute('data-story-url');
    window.location.href = storyUrl;
  });
});
