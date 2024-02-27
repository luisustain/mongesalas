document.addEventListener('DOMContentLoaded', function() {
  const quadrants = document.querySelectorAll('.quadrant');
  const enlargedImage = document.getElementById('enlarged-image');

  // Ensure the enlarged image is initially hidden and not interfering.
  enlargedImage.style.display = 'none';

  quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
      const imageSrc = `images/${this.id}.jpg`;
      enlargedImage.src = imageSrc;
      enlargedImage.style.display = 'block'; // Show the image.
    });

    quadrant.addEventListener('mouseout', function() {
      enlargedImage.style.display = 'none'; // Optionally hide on mouse out.
    });

    // Assuming the click event is attached to the enlarged image.
    enlargedImage.addEventListener('click', function() {
      const storyUrl = this.getAttribute('data-story-url');
      if (storyUrl) window.location.href = storyUrl;
    });
  });
});
