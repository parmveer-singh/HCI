// Timer
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let timeLeft = 6 * 24 * 60 * 60 + 2 * 60 * 60 + 31 * 60 + 12; // Initial time in seconds: 6 days, 2 hours, 31 minutes, 12 seconds

    // Function to update the countdown
    function updateCountdown() {
      const days = Math.floor(timeLeft / (24 * 60 * 60));
      const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
      const seconds = timeLeft % 60;

      countdownElement.innerHTML = `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec`;

      if (timeLeft <= 0) {
        // Reset the countdown once it reaches zero
        timeLeft = 6 * 24 * 60 * 60 + 2 * 60 * 60 + 31 * 60 + 12; // Reset to initial value
      } else {
        timeLeft--;
      }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
  }

// Start the countdown when the page loads
window.onload = startCountdown;

// Handle Submit-Button
document.addEventListener("DOMContentLoaded", () => {
  // Loop through each assignment container
  document.querySelectorAll(".asg-item").forEach((assignmentContainer) => {
    const submissionSection = assignmentContainer.querySelector(".submission");
    const fileInput = submissionSection.querySelector(".file-input");
    const submitButton = submissionSection.querySelector(".submit-button");
    const pdfLink = submissionSection.querySelector(".pdf-link");
    const editLink = submissionSection.querySelector(".edit-link");

    // Add click event to the submit button
    submitButton.addEventListener("click", () => {
      console.log("Submit button clicked!"); // Debug log
      fileInput.click(); // Trigger the file input click
    });

    // Handle file input change
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];

      if (file && file.type === "application/pdf") {
        console.log("Valid PDF file selected"); // Debug log

        // Hide the submit button and show icons
        submitButton.style.display = "none";
        pdfLink.style.display = "inline-block";
        editLink.style.display = "inline-block";

        // Set the PDF link for preview
        pdfLink.href = URL.createObjectURL(file);
        pdfLink.target = "_blank";

        // Enable re-upload functionality
        editLink.addEventListener("click", (e) => {
          e.preventDefault();
          fileInput.click();
        });
      } else {
        alert("Please upload a valid PDF file.");
        fileInput.value = ""; // Reset the input
      }
    });
  });
});


