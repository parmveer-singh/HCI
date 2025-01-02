//Handle Submit Button
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file-input");
  const submitButton = document.getElementById("submit-button");
  const pdfLink = document.getElementById("pdf-link");
  const editLink = document.getElementById("edit-link");

  submitButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (event) => {
    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {  
      // Hide the submit button
      submitButton.style.display = "none";

      // Display the PDF icon and edit icon
      pdfLink.style.display = "inline-block";
      editLink.style.display = "inline-block";

      // Set the PDF link to the selected file (preview)
      pdfLink.href = URL.createObjectURL(file);
      pdfLink.target = "_blank";

      // Allow re-selection of the file
      editLink.addEventListener("click", (e) => {
        e.preventDefault();
        fileInput.click();
      });
    } else {
      alert("Please select a valid PDF file.");
      fileInput.value = ""; // Reset the input
    }
  });

  // Allow editing of the selected PDF
  editLink.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });
});

// Function to handle the grade input
function handleGradeInput(event, inputElement) {
  if (event.key === "Enter") {
      const grade = inputElement.value.trim(); // Get the entered grade

      // Validate input (ensure it's not empty and is a valid number)
      if (grade === "" || isNaN(grade)) {
          alert("Please enter a valid number.");
          return;
      }

      // Replace the input field with the entered grade
      const tdElement = inputElement.parentElement; // Get the parent <td>
      tdElement.textContent = grade; // Replace the content with the grade
  }
}