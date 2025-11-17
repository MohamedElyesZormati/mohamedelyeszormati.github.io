function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_a4tsjzl", "template_ul4g5ai", params)
    .then(() => {
      // Hide the form
      document.getElementById("contact-form").style.display = "none";

      // Show the success message
      document.getElementById("message-sent").style.display = "block";
    })
    .catch((error) => {
      console.error("❌ Email sending failed:", error);
      alert("Oops! Something went wrong. Please try again.");
    });
}

// Prevent form reload and trigger sendMail
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  sendMail();
});
