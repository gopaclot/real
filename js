document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display form values in console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // You can add code here to send the form data to a server or perform other actions
});
