document.addEventListener('DOMContentLoaded', function() {
  const quadrants = document.querySelectorAll('.quadrant');
  const enlargedImage = document.getElementById('enlarged-image');

  quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
      const imageSrc = `images/${this.id}.jpg`; // Image corresponds to quadrant ID
      const storyUrl = this.getAttribute('data-story-url'); // URL for redirection
      enlargedImage.src = imageSrc;
      enlargedImage.style.display = 'block';
      // Set the story URL as a direct attribute for easy access on click
      enlargedImage.setAttribute('data-story-url', storyUrl);
    });
  });

  // Handle clicks on the enlarged image to navigate to the story URL
  enlargedImage.addEventListener('click', function() {
    const storyUrl = this.getAttribute('data-story-url');
    window.location.href = storyUrl;
  });
});
