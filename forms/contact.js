document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("G_Z_KSP2fLSbsx5J8"); // Replace with your actual EmailJS public key

  document.querySelector(".js-email-form").addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let subject = document.getElementById("subject").value;
      let message = document.querySelector("textarea[name='message']").value;

      // Show loading message
      document.querySelector(".loading").style.display = "block";

      // Send email using EmailJS
      emailjs.send("service_abacm82", "template_xqltpg6", {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message
      }).then(function (response) {
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".sent-message").style.display = "block";
          document.querySelector(".error-message").style.display = "none";
          document.querySelector(".js-email-form").reset();
      }, function (error) {
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".error-message").style.display = "block";
          document.querySelector(".sent-message").style.display = "none";
          console.error("EmailJS Error:", error);
      });
  });
});
