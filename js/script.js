document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('first-name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    
    var fullMessage = 'Name: ' + firstName + '\nEmail: ' + email + '\nSubject: ' + subject + '\n\n' + message;
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mumvekerichidochashe@gmail.com",
        Password: "BBEFF01DD4325A765FEC0AB6E16E43E3D40F",
        To: 'mumvekerichidochashe@gmail.com',
        From: email,
        Subject: subject,
        Body: fullMessage
    }).then(
        function() {
            alert('Your message has been sent!');
        },
        function(error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    );
});
