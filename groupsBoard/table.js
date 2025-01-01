// table.js

function disableJoinButtons(exceptButton) {
  // Select all "Join" buttons
  const buttons = document.querySelectorAll(".join-button");

  // Loop through each button
  buttons.forEach(button => {
    if (button !== exceptButton) {
      // Disable the other buttons and turn them grey
      button.disabled = true; // Disable the other buttons
      button.style.backgroundColor = "grey"; // Change the color of disabled buttons to grey
    }
  });
}

function enableJoinButtons() {
  // Select all "Join" buttons
  const buttons = document.querySelectorAll(".join-button");

  // Loop through each button
  buttons.forEach(button => {
    button.disabled = false; // Enable the button
    button.style.backgroundColor = "#8d7eff"; // Reset the button's background color to green
    button.style.cursor = "pointer"; // Ensure the cursor is set to pointer
  });
}

export function createTable() {
  // Create a table element
  const table = document.createElement("table");
  table.border = "1"; // Set the border of the table

  // Create the table header (thead)
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Create header cells (th)
  const th1 = document.createElement("th");
  th1.innerText = "Group Name";
  headerRow.appendChild(th1);

  const th2 = document.createElement("th");
  th2.innerText = "Members";
  headerRow.appendChild(th2);

  const th3 = document.createElement("th");
  th3.innerText = "Action";
  headerRow.appendChild(th3);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body (tbody)
  const tbody = document.createElement("tbody");

  // Row 1: Group A
  const row1 = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = "Group A";
  row1.appendChild(td1);

  const td2 = document.createElement("td");
  td2.innerText = "3 out of 4"; // Initial number of members
  row1.appendChild(td2);

  const td3 = document.createElement("td");
  const joinButton1 = document.createElement("button");
  joinButton1.classList.add("join-button"); // Add class to the button
  joinButton1.innerText = "Join";
  joinButton1.onclick = function () {
    joinButton1.style.backgroundColor = "#8d7eff"; // Change the color to green
    disableJoinButtons(joinButton1);
    td2.innerText = "4 out of 4"; // Update members count
    exit(row1, "Group A", joinButton1);
  };
  td3.appendChild(joinButton1);
  row1.appendChild(td3);

  tbody.appendChild(row1);

  // Row 2: Group B
  const row2 = document.createElement("tr");
  const td4 = document.createElement("td");
  td4.innerText = "Group B";
  row2.appendChild(td4);

  const td5 = document.createElement("td");
  td5.innerText = "3 out of 4"; // Initial number of members
  row2.appendChild(td5);

  const td6 = document.createElement("td");
  const joinButton2 = document.createElement("button");
  joinButton2.classList.add("join-button"); // Add class to the button
  joinButton2.innerText = "Join";
  joinButton2.onclick = function () {
    joinButton2.style.backgroundColor = "#8d7eff"; // Change the color to green
    disableJoinButtons(joinButton2);
    td5.innerText = "4 out of 4"; // Update members count
    exit(row2, "Group B", joinButton2);
  };
  td6.appendChild(joinButton2);
  row2.appendChild(td6);

  tbody.appendChild(row2);

  table.appendChild(tbody);

  // Append the table to the body of the page
  document.body.appendChild(table);
}

function exit(row, groupName, button) {
  // Create an exit icon (can be a button or an image)
  const exitButton = document.createElement("button");
  exitButton.innerText = "Exit"; // Or use an icon here (e.g., "X" or an image)
  exitButton.classList.add("exit-button"); // Add the CSS class

  // When clicked, it will remove the exit button, re-enable the join button, and turn the color back to normal
  exitButton.onclick = function () {
    button.disabled = false; // Re-enable the Join button
    button.style.backgroundColor = "#8d7eff"; // Change back to green
    const membersCell = row.querySelector("td:nth-child(2)");
    membersCell.innerText = "3 out of 4"; // Reset the member count
    exitButton.remove(); // Remove the exit button
    // alert(`You have exited ${groupName}.`);
    enableJoinButtons();
  };

  // Append the exit button next to the group name in the row
  const groupCell = row.querySelector("td");
  groupCell.appendChild(exitButton);
}

export function removeTable() {
  const table = document.querySelector("table"); // Select the table element
  if (table) {
    table.remove(); // Removes the table from the DOM
  }
}
