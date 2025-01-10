// Handle Student Submit Button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".submission").forEach((submissionCell) => {
    const fileInput = submissionCell.querySelector(".file-input");
    const submitButton = submissionCell.querySelector("#submit-button");
    const pdfLink = submissionCell.querySelector(".pdf-link");
    const editLink = submissionCell.querySelector(".edit-link");

    submitButton.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
      const file = fileInput.files[0];

      if (file && file.type === "application/pdf") {
        const assignmentRow = submissionCell.closest("tr");

        // Update status to "Done"
        const statusCell = assignmentRow.querySelector(".status");
        statusCell.innerHTML =  `
          <div class="status-indicator status-done">
            <i class="bx bxs-check-circle"></i>
            <span class="status-label">Done</span>
          </div>
        `;

        // Update Feedback and Grading Cells
        const feedbackCell = assignmentRow.querySelector(".feedback");
        feedbackCell.innerHTML = `
            <div class="review-container">
                <i class="bx bx-dots-horizontal-rounded bx-flashing"></i>
                <span class="review-label">Pending</span>
            </div>
        `;

        const gradingCell = assignmentRow.querySelector(".grading");
        gradingCell.innerHTML = `
            <div class="review-container">
                <i class="bx bx-dots-horizontal-rounded bx-flashing"></i>
                <span class="review-label">Pending</span>
            </div>
        `;

        // Hide submit button and show icons
        submitButton.style.display = "none";
        pdfLink.style.display = "inline-block";
        editLink.style.display = "inline-block";

        // Set PDF link
        pdfLink.href = URL.createObjectURL(file);
        pdfLink.target = "_blank";

        // Enable re-upload
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

// Handle Tutor Submit Button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feedback").forEach((submissionCell) => {
    const fileInput = submissionCell.querySelector(".file-input");
    const submitButton = submissionCell.querySelector("#submit-button");
    const pdfLink = submissionCell.querySelector(".pdf-link");
    const editLink = submissionCell.querySelector(".edit-link");

    submitButton.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
      const file = fileInput.files[0];

      if (file && file.type === "application/pdf") {
        const assignmentRow = submissionCell.closest("tr");

        // Update status to "Done"
        const statusCell = assignmentRow.querySelector(".status");
        statusCell.innerHTML =  `
          <div class="status-indicator status-done">
            <i class="bx bxs-check-circle"></i>
            <span class="status-label">Done</span>
          </div>
        `;

        // Hide submit button and show icons
        submitButton.style.display = "none";
        pdfLink.style.display = "inline-block";
        editLink.style.display = "inline-block";

        // Set PDF link
        pdfLink.href = URL.createObjectURL(file);
        pdfLink.target = "_blank";

        // Enable re-upload
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

// Handle Grade Input
function handleGradeInput(event, inputElement) {
  // Allow only numbers
  const key = event.key;

  // Check if the key is not a number or Enter, and prevent the default behavior
  if (!/^\d$/.test(key) && key !== "Enter") {
      event.preventDefault();
      return;
  }

  // Handle "Enter" key
  if (key === "Enter") {
      const value = inputElement.value.trim(); // Get the trimmed input value

      if (value) {
          // Replace the input field with the entered value
          const parentCell = inputElement.parentNode;
          parentCell.innerHTML = `<span class="grading-display">${value}%</span>`;
      }
  }
}