

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleMe');
    var img = document.getElementById('toggle-img');

    // Add event listeners to buttons
    toggleButton.addEventListener('click', function() {
        if (img) {
            if (img.style.display === 'none') {
                img.style.display = 'inline';
                console.log("The image has been shown using display: inline");
            } else {
                img.style.display = 'none';
                console.log("The image has been hidden using display: none");
            }
        } else {
            console.log("No such image element found");
        }
    });
});