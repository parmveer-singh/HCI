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