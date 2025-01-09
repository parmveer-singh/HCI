// Timer
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let timeLeft = 6 * 24 * 60 * 60 + 2 * 60 * 60 + 31 * 60 + 12; // Initial time in seconds: 6 days, 2 hours, 31 minutes, 12 seconds

    // Function to update the countdown
    function updateCountdown() {
      const days = Math.floor(timeLeft / (24 * 60 * 60));
      const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
      const seconds = timeLeft % 60;

      countdownElement.innerHTML = `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec`;

      if (timeLeft <= 0) {
        // Reset the countdown once it reaches zero
        timeLeft = 6 * 24 * 60 * 60 + 2 * 60 * 60 + 31 * 60 + 12; // Reset to initial value
      } else {
        timeLeft--;
      }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
  }

  // Start the countdown when the page loads
  window.onload = startCountdown;