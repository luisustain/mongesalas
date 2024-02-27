document.addEventListener('DOMContentLoaded', function() {
  const quadrants = document.querySelectorAll('.quadrant');
  const enlargedImage = document.getElementById('enlarged-image');

  quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
      const imageSrc = `images/${this.id}.jpg`; // Match the ID to the image name
      const storyUrl = this.getAttribute('data-story-url'); // Get the story URL
      enlargedImage.src = imageSrc;
      enlargedImage.setAttribute('data-story-url', storyUrl); // Set the story URL on the enlarged image
      enlargedImage.style.display = 'block';
    });
  });

  enlargedImage.addEventListener('click', function() {
    const storyUrl = this.getAttribute('data-story-url');
    window.location.href = storyUrl; // Redirect when the enlarged image is clicked
  });

  // Hide the enlarged image on mouseout - optional, depending on desired behavior
  enlargedImage.addEventListener('mouseout', function() {
    this.style.display = 'none';
  });
});
