// Get the display value element
const displayValueElement = document.getElementById("displayValue");

// Add click event listener to each key
document.querySelectorAll(".number, .operator").forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.textContent;
    let displayValue = displayValueElement.textContent;

    // Handle number keys
    if (key.classList.contains("number")) {
      if (displayValue === "0") {
        displayValue = keyValue;
      } else {
        displayValue += keyValue;
      }
    }

    // Handle operator keys
    if (key.classList.contains("operator")) {
      if (keyValue === "C") {
        displayValue = "0";
      } else if (keyValue === "=") {
        try {
          displayValue = eval(displayValue);
        } catch (err) {
          displayValue = "Invalid Expression";
        }
      } else {
        displayValue += keyValue;
      }
    }

    displayValueElement.textContent = displayValue;
  });
});