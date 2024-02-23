document.addEventListener('DOMContentLoaded', function() {
  // Function to set enlarged background image for a quadrant
  function setEnlargedBackground(quadrantId, imageUrl) {
    document.getElementById(quadrantId).style.backgroundImage = `url('${imageUrl}')`;
  }

  // List of quadrants and their enlarged images
  const quadrants = [
    { id: 'A1', imageUrl: 'path_to_enlarged_image_A1' },
    { id: 'A2', imageUrl: 'path_to_enlarged_image_A2' },
    { id: 'B1', imageUrl: 'path_to_enlarged_image_B1' },
    { id: 'B2', imageUrl: 'path_to_enlarged_image_B2' },
  ];

  // Set event listeners for each quadrant
  quadrants.forEach(quadrant => {
    const element = document.getElementById(quadrant.id);
    element.addEventListener('mouseover', () => setEnlargedBackground(quadrant.id, quadrant.imageUrl));
    element.addEventListener('mouseout', () => setEnlargedBackground(quadrant.id, 'path_to_your_large_image')); // Reset to the initial large image
  });
});
