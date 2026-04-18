<p id="successMessage" style="display:none; color: green;">
    WhatsApp opened. Please press SEND to confirm your booking.
</p>

document.querySelector(".whatsapp-btn").addEventListener("click", function() {
    document.getElementById("successMessage").style.display = "block";
});


document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_iky29yg", "template_txfn1uu", this)
        .then(() => {
            alert("Booking sent successfully!");
            this.reset();
        }, (error) => {
            alert("Error sending booking");
            console.log(error);
        });
});

