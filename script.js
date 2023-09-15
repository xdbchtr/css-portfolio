// script.js
window.addEventListener('DOMContentLoaded', () => {
  typeText();
});

function typeText() {
  const text = "Back-End Developer, Full-Time Learner.";
  let index = 0;
  const typingInterval = 100; // Delay between typing each character in milliseconds
  const typingElement = document.querySelector('.title');

  function typeCharacter() {
      if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeCharacter, typingInterval);
      }
  }

  typeCharacter();
}
