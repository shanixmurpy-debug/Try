document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to action_page.php

    const username = document.getElementById('myText').value;

    // Clear the form
    document.getElementById('myForm').reset();

    // Hide the form and show the greeting with fade
    document.getElementById('myForm').style.display = 'none';
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Hello, ${username}!`;
    greeting.style.display = 'block';
    // Trigger reflow to ensure display is applied before setting opacity
    greeting.offsetHeight;
    greeting.style.opacity = '1';
});