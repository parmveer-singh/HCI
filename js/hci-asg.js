document.addEventListener("DOMContentLoaded", () => {
    // Loop through each row with the "active-asg" class
    document.querySelectorAll("tr.active-asg").forEach((assignmentRow) => {
        const submissionCell = assignmentRow.querySelector(".submission");
        const fileInput = submissionCell.querySelector(".file-input");
        const submitButton = submissionCell.querySelector(".submit-button");
        const pdfLink = submissionCell.querySelector(".pdf-link");
        const editLink = submissionCell.querySelector(".edit-link");

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

                // Update status to "Done"
                const statusCell = assignmentRow.querySelector(".status");
                statusCell.innerHTML = `
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
