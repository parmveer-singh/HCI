// Listen for form submission to handle redirection based on LUH-ID
document.getElementById("loginForm").onsubmit = function (event) {
  event.preventDefault();
  const luhId = document.getElementById("luhId").value;

  // Redirect based on LUH-ID
  if (luhId.toLowerCase() === "tutor") {
    window.location = "../tutor/home.html";
  } else {
    window.location = "../student/home.html";
  }
};

function scrollToLogin() {
  setTimeout(() => {
    document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}