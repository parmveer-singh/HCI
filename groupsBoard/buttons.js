// buttons.js
import { disableButtons } from './table.js';

export function replaceButton() {
    // Clear the body and create new buttons
    document.body.innerHTML = "";
    createNewButtons();
}

function createNewButtons() {
    // Create new buttons dynamically
    const button1 = document.createElement("button");
    button1.innerText = "Prog1";
    styleButton(button1);

    const button2 = document.createElement("button");
    button2.innerText = "GDS";
    styleButton(button2);

    const button3 = document.createElement("button");
    button3.innerText = "HCI";
    styleButton(button3);

    const button4 = document.createElement("button");
    button4.innerText = "Prog2";
    styleButton(button4);

    // Append the buttons to the body
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
}

// Function to apply styles to the button
function styleButton(button) {
    // Add the onclick event
    button.onclick = function () {
        handleButtonClick(button); // Handle the button click
        disableButtons(); // Call the disableButtons function
    };

    // Apply styles to the button
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.margin = "10px";
    button.style.transition = "background-color 0.3s, transform 0.3s";

    // Add hover effects
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)";
    });
}

// Function to handle button click
function handleButtonClick(clickedButton) {
    // Get all buttons on the page
    const allButtons = document.querySelectorAll("button");

    // Loop through all buttons
    allButtons.forEach(button => {
        if (button === clickedButton) {
            // Keep the clicked button green
            button.style.backgroundColor = "#4CAF50";
        } else {
            // Turn all other buttons grey
            button.style.backgroundColor = "grey";
        }
    });
}
