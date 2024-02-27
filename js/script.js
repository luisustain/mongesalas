document.addEventListener('DOMContentLoaded', function() {
    // Assuming `enlarged-image` is an overlay or a modal for displaying the enlarged images
    const enlargedImage = document.createElement('img');
    enlargedImage.id = 'enlarged-image';
    enlargedImage.style.display = 'none';
    enlargedImage.style.position = 'fixed';
    enlargedImage.style.top = '50%';
    enlargedImage.style.left = '50%';
    enlargedImage.style.transform = 'translate(-50%, -50%)';
    enlargedImage.style.maxWidth = '80%';
    enlargedImage.style.maxHeight = '80%';
    enlargedImage.style.zIndex = '1000';
    document.body.appendChild(enlargedImage);

    document.querySelectorAll('.quadrant').forEach(quadrant => {
        quadrant.addEventListener('mouseover', function() {
            const imageUrl = this.getAttribute('data-image-url');
            if (imageUrl) {
                enlargedImage.src = imageUrl;
                enlargedImage.style.display = 'block';
            }
        });

        quadrant.addEventListener('mouseout', function() {
            enlargedImage.style.display = 'none';
        });

        quadrant.addEventListener('click', function() {
            const storyUrl = this.getAttribute('data-story-url');
            if (storyUrl) {
                window.location.href = storyUrl;
            }
        });
    });
});
