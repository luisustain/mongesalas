document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('image-container');

    // Example functionality: change background on hover
    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('quadrant')) {
            // This is where you'd dynamically change the background or display enlarged images
            // For demonstration, let's log the quadrant id
            console.log(`${event.target.id} hovered`);
            // Implement the logic to display the enlarged image here
        }
    });

    // Click functionality to navigate - replace with your actual URLs and logic
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('quadrant')) {
            // Placeholder logic for navigation
            console.log(`${event.target.id} clicked`);
            // window.location.href = 'your-url-here.html'; // Uncomment and set your URL
        }
    });
});
