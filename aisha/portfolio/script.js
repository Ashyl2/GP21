document.getElementById('contactForm').addEventListener('submit', function( event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message){
        alert('Thank you for reaching out, ${name}!');
    } else{
        alert('Please fill out the fields.');
    }
});