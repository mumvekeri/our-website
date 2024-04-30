document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Set up email parameters
    var emailParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send email using SMTP.js
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mumvekerichidochashe@gmail.com",
        Password: "07B2E5D2935A51DDAC94CB5CEAC8EC5BFDE7",
        To: "mumvekerichidochashe@gmail.com",
        From: email,
        Subject: subject,
        Body: "Name: " + name + "<br>Email: " + email + "<br>Message: " + message
    }).then(function(message) {
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully.'
        });

        // Clear form fields
        document.getElementById('contact-form').reset();
    }).catch(function(error) {
        // Show error message
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.'
        });
    });
});
