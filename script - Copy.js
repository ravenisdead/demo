document.addEventListener("DOMContentLoaded", function () {
  const webContainer = document.getElementById("webContainer");
  const navItems = document.getElementById("navItems");
  const goToCakeBtn = document.getElementById("goToCakeBtn");

  // Optional: show the web and nav links after delay
  setTimeout(() => {
    webContainer.classList.add("show");
  }, 600);

  setTimeout(() => {
    webContainer.classList.add("shift-left");
    navItems.classList.add("show");
    goToCakeBtn.classList.add("show");
  }, 1600);

  // Navigation on click
  goToCakeBtn.addEventListener("click", () => {
    window.location.href = "";
  });
});