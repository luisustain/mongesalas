document.addEventListener('DOMContentLoaded', function() {
  // Function to set enlarged background image for a quadrant
  function setEnlargedBackground(quadrantId, imageUrl) {
    document.getElementById(quadrantId).style.backgroundImage = `url('${imageUrl}')`;
  }

  // List of quadrants and their enlarged images
  const quadrants = [
    { id: 'A1', imageUrl: 'images/A1.jpg' },
    { id: 'A2', imageUrl: 'images/A2.jpg' },
    { id: 'B1', imageUrl: 'images/B1.jpg' },
    { id: 'B2', imageUrl: 'images/B2.jpg' },
  ];

  // Set event listeners for each quadrant
  quadrants.forEach(quadrant => {
    const element = document.getElementById(quadrant.id);
    element.addEventListener('mouseover', () => setEnlargedBackground(quadrant.id, quadrant.imageUrl));
    element.addEventListener('mouseout', () => setEnlargedBackground(quadrant.id, 'images/background.jpg')); // Reset to the initial large image
  });
});
