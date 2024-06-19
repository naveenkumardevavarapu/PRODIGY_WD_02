document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // For demonstration, let's log the form data
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can also send the form data to a server using fetch or other methods
        // For example:
        // fetch("url_to_your_backend", {
        //     method: "POST",
        //     body: JSON.stringify({ name, email, message }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log("Server response:", data);
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        // });
        
        // For demonstration, let's clear the form fields after submission
        contactForm.reset();
    });

    const contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    const footerLink = document.querySelector('a[href="#footer"]');
    footerLink.addEventListener("click", function (event) {
        event.preventDefault();
        const footerSection = document.getElementById("footer");
        footerSection.scrollIntoView({ behavior: "smooth" });
    });
});
