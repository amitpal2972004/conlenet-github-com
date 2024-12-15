const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

// Set the item width dynamically
const itemWidth = document.querySelector('.carousel-item').offsetWidth + 15;

// Track the current position
let currentPosition = 0;

rightButton.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (currentPosition < maxScroll) {
        currentPosition += itemWidth;
        if (currentPosition > maxScroll) currentPosition = maxScroll;
        track.style.transform = `translateX(-${currentPosition}px)`;
    }
});

leftButton.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition -= itemWidth;
        if (currentPosition < 0) currentPosition = 0;
        track.style.transform = `translateX(-${currentPosition}px)`;
    }
});
// FAQ Accordion Logic
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle visibility of answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            question.querySelector('span').textContent = '+';
        } else {
            answer.style.display = 'block';
            question.querySelector('span').textContent = '-';
        }
    });
});


// Get all posters
const posters = document.querySelectorAll('.poster');
const popups = document.querySelectorAll('.popup-overlay');
const closeButtons = document.querySelectorAll('.close-btn');

// Show popup when poster is clicked
posters.forEach((poster, index) => {
    poster.addEventListener('click', () => {
        popups[index].style.display = 'flex';
    });
});

// Close popup when close button is clicked
closeButtons.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        popups[index].style.display = 'none';
    });
});

// Optional: Close popup on clicking outside popup content
popups.forEach((popup, index) => {
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popups[index].style.display = 'none';
        }
    });
});


const signInButton = document.querySelector('.sign-in-btn');
const signInPopup = document.getElementById('signin-popup');
const closeSignInButton = document.getElementById('close-signin');

// Open the Sign In popup when the button is clicked
signInButton.addEventListener('click', () => {
    signInPopup.style.display = 'flex'; // Show the popup
});

// Close the Sign In popup when the close button is clicked
closeSignInButton.addEventListener('click', () => {
    signInPopup.style.display = 'none'; // Hide the popup
});

// Optional: Close popup when clicking outside the content
signInPopup.addEventListener('click', (event) => {
    if (event.target === signInPopup) {
        signInPopup.style.display = 'none';
    }
});