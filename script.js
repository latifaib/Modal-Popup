// FUNCTION 1: Open the modal
function openModal() {
  console.log("Opening modal..."); // For learning - check browser console

  const backdrop = document.getElementById("modalBackdrop");
  backdrop.classList.add("show");

  // Prevent body scrolling when modal is open
  document.body.style.overflow = "hidden";
}

// FUNCTION 2: Close the modal
function closeModal() {
  console.log("Closing modal..."); // For learning

  const backdrop = document.getElementById("modalBackdrop");
  backdrop.classList.remove("show");

  // Restore body scrolling
  document.body.style.overflow = "auto";
}

// FUNCTION 3: Close modal when clicking outside (backdrop)
function closeModalOnBackdrop(event) {
  // Only close if clicking the backdrop, not the modal itself
  if (event.target.id === "modalBackdrop") {
    closeModal();
  }
}

// FUNCTION 4: Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    console.log("Escape key pressed, closing modal...");
    closeModal();
  }
});

// FUNCTION 5: Log when page loads (for learning)
window.addEventListener("load", function () {
  console.log("Page loaded! Modal ready to use.");
  console.log("Open browser Developer Tools (F12) to see console messages");
});
