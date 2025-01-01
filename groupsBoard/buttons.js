// buttons.js
import { disableButtons } from './table.js';

export function replaceButton() {
    // Clear the body and create new buttons
    document.body.innerHTML = "";
 //   createNewButtons();
}

export function createNewButtons() {
    // Get the container element
    const container = document.getElementById("buttonContainer");

    // Create new buttons dynamically
    const button1 = document.createElement("button");
    button1.innerText = "Prog1";
    button1.classList.add("course-button"); // Add class to the button

    funButton(button1);

    const button2 = document.createElement("button");
    button2.innerText = "GDS";
    button2.classList.add("course-button"); // Add class to the button
    funButton(button2);

    const button3 = document.createElement("button");
    button3.innerText = "HCI";
    button3.classList.add("course-button"); // Add class to the button
    funButton(button3);

    const button4 = document.createElement("button");
    button4.innerText = "Prog2";
    button4.classList.add("course-button"); // Add class to the button
    funButton(button4);

    // Append the buttons to the button container (flexbox layout)
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
    container.appendChild(button4);
}

// Function to apply styles to the button
function funButton(button) {
    // Add the onclick event
    button.onclick = function () {
        handleButtonClick(button); // Handle the button click
        disableButtons(); // Call the disableButtons function
    };
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
            // Keep the clicked button pink
            button.style.backgroundColor = "#8d7eff";
        } else {
            // Turn all other buttons grey
            button.style.backgroundColor = "grey";
        }
    });
}
