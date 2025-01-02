// Show courses container and remove entry button
document.querySelector('.entry-button').addEventListener('click', function () {
document.querySelector('.entry-button-section').style.display = 'none';
document.querySelector('.courses-container').style.display = 'flex';
});

// Show table when a course is clicked
document.querySelectorAll('.course').forEach(function (courseButton) {
  courseButton.addEventListener('click', function () {
  document.querySelector('.courses-container').style.display = 'none';
  document.querySelector('.groups-table').style.display = 'table';
  });
});


// Handle "Join" button clicks
document.querySelectorAll('.join-button').forEach(button => {
  button.addEventListener('click', function () {
    const row = this.closest('tr');  // Get the row of the clicked button
    const memberCountCell = row.querySelector('.member-count');  // Get the member count cell
    const memberCountText = memberCountCell.textContent.split('/');
    const currentMembers = parseInt(memberCountText[0]);  // Get the current members count
    const maxMembers = parseInt(memberCountText[1]);  // Get the max members count

    if (currentMembers < maxMembers) {
      // Increase the member count
      memberCountCell.textContent = `${currentMembers + 1}/${maxMembers}`;

      // Disable all "Join" buttons and make them unclickable
      document.querySelectorAll('.join-button').forEach(joinBtn => {
        joinBtn.disabled = true;
        joinBtn.style.pointerEvents = 'none';  // Prevent hovering and clicking
        joinBtn.style.opacity = 0.5;  // Make them visually appear disabled
      });

      // Hide the "Join" button and show the "Exit" button for the clicked group
      this.style.display = 'none';
      const exitButton = document.createElement('button');
      exitButton.textContent = 'Exit';
      exitButton.classList.add('exit-button');
      row.querySelector('td:last-child').appendChild(exitButton);

      // Handle "Exit" button click
      exitButton.addEventListener('click', function () {
        // Decrease the member count
        memberCountCell.textContent = `${currentMembers}/${maxMembers}`;

        // Show the "Join" button again and remove the "Exit" button
        row.querySelector('.join-button').style.display = 'inline-block';
        this.remove();

        // Re-enable all "Join" buttons and make them clickable again
        document.querySelectorAll('.join-button').forEach(joinBtn => {
          joinBtn.disabled = false;
          joinBtn.style.pointerEvents = 'auto';  // Re-enable hover and click
          joinBtn.style.opacity = 1;  // Reset the opacity
        });
      });
    }
  });
});