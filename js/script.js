document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quadrant').forEach(quadrant => {
        quadrant.addEventListener('mouseover', function() {
            // Assuming an 'enlarged-image' element exists for demonstration
            // This part should dynamically update or create an image element to show the enlarged image
            console.log(`Hovered over ${this.id}`);
        });

        quadrant.addEventListener('click', function() {
            const storyUrl = this.getAttribute('data-story-url');
            window.location.href = storyUrl; // Ensure this URL is valid and accessible
        });
    });
});
