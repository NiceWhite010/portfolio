document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('formFeedback');

    // Simple validation logic
    if (name.trim().length < 3) {
        feedback.textContent = "Please enter your full name.";
        feedback.style.color = "#ff4d4d";
    } else if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "#ff4d4d";
    } else {
        feedback.textContent = "Success! Thank you " + name + ", I will contact you soon.";
        feedback.style.color = "#00ff00";
        this.reset();
    }
});