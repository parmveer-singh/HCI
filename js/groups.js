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
    const memberCountCell = row.querySelector('.member-count .number');  // Get the member count div
    const groupIcon = row.querySelector('.group-icon');  // Get the group-icon div
    const memberCountText = memberCountCell.textContent.split('/');
    let currentMembers = parseInt(memberCountText[0]);  // Get the current members count
    const maxMembers = parseInt(memberCountText[1]);  // Get the max members count

    if (currentMembers < maxMembers) {
      // Increase the member count
      currentMembers++;
      memberCountCell.textContent = `${currentMembers}/${maxMembers}`;

      // Add "me" to the data-members attribute
      const members = groupIcon.getAttribute('data-members').split(', ');
      members.push('Me'); // Add "me" to the list of members
      groupIcon.setAttribute('data-members', members.join(', ')); // Update the data-members attribute

      // Disable all "Join" buttons globally
      document.querySelectorAll('.join-button').forEach(joinBtn => {
        joinBtn.disabled = true;
        joinBtn.style.pointerEvents = 'none';  // Prevent hovering and clicking
        joinBtn.style.opacity = 0.5;  // Make them visually appear disabled
      });

      // Hide the "Join" button and show the "Exit" button for the clicked group
      this.style.display = 'none';  // Hide only the clicked "Join" button
      const exitButton = document.createElement('button');
      exitButton.textContent = 'Exit';
      exitButton.classList.add('exit-button');
      this.parentNode.appendChild(exitButton); // Append the "Exit" button in the same cell

      // Handle "Exit" button click
      exitButton.addEventListener('click', function () {
        // Decrease the member count
        currentMembers--;
        memberCountCell.textContent = `${currentMembers}/${maxMembers}`;

        // Remove "me" from the data-members attribute
        const updatedMembers = groupIcon
          .getAttribute('data-members')
          .split(', ')
          .filter(member => member !== 'Me'); // Remove "me" from the list
        groupIcon.setAttribute('data-members', updatedMembers.join(', ')); // Update the data-members attribute

        // Show the "Join" button again and remove the "Exit" button
        button.style.display = 'inline-block'; // Show the original "Join" button
        this.remove(); // Remove the "Exit" button

        // Re-enable all "Join" buttons globally
        document.querySelectorAll('.join-button').forEach(joinBtn => {
          joinBtn.disabled = false;
          joinBtn.style.pointerEvents = 'auto';  // Re-enable hover and click
          joinBtn.style.opacity = 1;  // Reset the opacity
        });
      });
    }
  });
});



// Members names
document.querySelectorAll('.group-icon').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const members = icon.getAttribute('data-members');
    console.log(`Members: ${members}`); // Debugging or any dynamic logic
  });
});
