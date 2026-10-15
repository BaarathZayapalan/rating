const ratingButtons = document.querySelectorAll(".rating");

const submitButton = document.getElementById("submit-button");
const ratingScreen = document.getElementById("rating-screen");
const thankYouScreen = document.getElementById("thank-you-screen");

const selectedNumber = document.getElementById("selected-number");
const errorMessage = document.getElementById("error-message");

let selectedRating = 0;

// Select a rating from 1 to 5
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = Number(button.dataset.rating);

    ratingButtons.forEach((item) => {
      const isSelected = item === button;

      item.classList.toggle("selected", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    errorMessage.textContent = "";
  });
});

// Submit the rating and show the thank-you screen
submitButton.addEventListener("click", () => {
  if (selectedRating === 0) {
    errorMessage.textContent = "Please select a rating first.";
    return;
  }

  // Display the rating selected by the user
  selectedNumber.textContent = selectedRating;

  // Hide the rating screen
  ratingScreen.hidden = true;

  // Show the thank-you screen
  thankYouScreen.hidden = false;
});