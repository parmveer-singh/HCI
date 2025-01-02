/*filter the courses based on their category*/
document.addEventListener("DOMContentLoaded", function () {
  const filterLinks = document.querySelectorAll(".filter-link");
  const courses = document.querySelectorAll(".courses-item");

  filterLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const filter = this.getAttribute("data-filter");

          courses.forEach(course => {
              course.classList.remove("fade-in", "fade-out");

              if (filter === "all" || course.getAttribute("data-status") === filter) {
                  course.classList.add("fade-in");
                  course.style.display = "block";
              } else {
                  course.classList.add("fade-out");
                  setTimeout(() => {
                      course.style.display = "none";
                  }, 500);
              }
          });

          filterLinks.forEach(link => link.classList.remove("active-filter"));
          this.classList.add("active-filter");
      });
  });
});

document.querySelectorAll('.filter-link').forEach(link => { 
    link.addEventListener('click', function() { 
    document.querySelectorAll('.filter-link').forEach(link => link.classList.remove('active')); 
    this.classList.add('active'); 
    }); 
});

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
      // Get the parent assignment row dynamically
      const assignmentRow = submitButton.closest("tr");
      const statusIndicator = assignmentRow.querySelector(".status-indicator");
      const statusLabel = statusIndicator.querySelector(".status-label");
      const statusCircle = statusIndicator.querySelector(".status-circle");

      // Update status to "Completed"
      statusLabel.textContent = "Done";
      statusCircle.style.backgroundColor = "#66b046"; // Green circle
      statusIndicator.classList.remove("status-todo");
      statusIndicator.classList.add("status-completed");

            // Update Feedback to "In Review"
            const feedbackCell = assignmentRow.querySelector(".feedback");
            feedbackCell.innerHTML = `
              <div class="feedback-indicator status-in-progress">
                <span class="status-icon">
                  <i class="bx bx-dots-horizontal-rounded bx-flashing"></i>
                </span>
                <span class="status-label">In Review</span>
              </div>
            `;
      
            // Update Grading to "In Review"
            const gradingCell = assignmentRow.querySelector(".grading");
            gradingCell.innerHTML = `
              <div class="grading-indicator status-in-progress">
                <span class="status-icon">
                  <i class="bx bx-dots-horizontal-rounded bx-flashing"></i>
                </span>
                <span class="status-label">In Review</span>
              </div>
            `;
            
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
