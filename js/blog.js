function toggleContent(button) {
  const contentP = button.closest(".post").querySelector(".content");
  const postContainerEl = button.closest(".post-container");
  const bottomFadeOverlayEl = postContainerEl.querySelector(
    ".bottom-fade-overlay"
  );
  if (contentP.style.maxHeight == "200px") {
    contentP.style.maxHeight = "none"; // Remove the max-height restriction
    bottomFadeOverlayEl.style.display = "none";
    button.textContent = "less"; // Update the button text to "less"
  } else {
    contentP.style.maxHeight = "200px"; // Apply the max-height restriction
    bottomFadeOverlayEl.style.display = "block";
    button.textContent = "more"; // Update the button text to "more"
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const moreBtnEls = document.querySelectorAll(".more-btn");
  moreBtnEls.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleContent(button);
    });
  });
});
