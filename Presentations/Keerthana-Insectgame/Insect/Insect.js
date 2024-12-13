// Select all elements with the class 'screen' and store them in a NodeList
const screens = document.querySelectorAll('.screen');

// Select all buttons with the class 'choose-insect-btn' and store them in a NodeList
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');

// Select the start button by its ID
const start_btn = document.getElementById('start-btn');

// Select the game container element by its ID
const game_container = document.getElementById('game-container');

// Select the time display element by its ID
const timeEl = document.getElementById('time');

// Select the score display element by its ID
const scoreEl = document.getElementById('score');

// Select the message display element by its ID
const message = document.getElementById('message');

// Initialize a variable to track the elapsed seconds
let seconds = 0;

// Initialize a variable to track the score
let score = 0;

// Initialize an object to store the selected insect's details
let selected_insect = {};

// Add a click event listener to the start button
start_btn.addEventListener('click', () => 
    // Add the 'up' class to the first screen to move to the next screen
    screens[0].classList.add('up')
);

// Iterate through each 'choose-insect-btn' button
choose_insect_btns.forEach(btn => {
    // Add a click event listener to the button
    btn.addEventListener('click', () => {
        // Select the image inside the button
        const img = btn.querySelector('img');
        // Get the 'src' attribute of the image
        const src = img.getAttribute('src');
        // Get the 'alt' attribute of the image
        const alt = img.getAttribute('alt');
        // Store the insect's image details in the 'selected_insect' object
        selected_insect = { src, alt };
        // Add the 'up' class to the second screen to move to the next screen
        screens[1].classList.add('up');
        // Create an insect after 1 second
        setTimeout(createInsect, 1000);
        // Start the game timer
        startGame();
    });
});

// Start the game timer
function startGame() {
    // Call 'increaseTime' every second
    setInterval(increaseTime, 1000);
}

// Increase the elapsed time by 1 second
function increaseTime() {
    // Calculate minutes from the total seconds
    let m = Math.floor(seconds / 60);
    // Calculate remaining seconds
    let s = seconds % 60;
    // Add a leading zero if minutes are less than 10
    m = m < 10 ? `0${m}` : m;
    // Add a leading zero if seconds are less than 10
    s = s < 10 ? `0${s}` : s;
    // Update the time display with the formatted time
    timeEl.innerHTML = `Time: ${m}:${s}`;
    // Increment the seconds counter
    seconds++;
}

// Create a new insect and place it at a random location
function createInsect() {
    // Create a new 'div' element for the insect
    const insect = document.createElement('div');
    // Add the 'insect' class to the element
    insect.classList.add('insect');
    // Get random x and y coordinates for the insect
    const { x, y } = getRandomLocation();
    // Set the insect's top position
    insect.style.top = `${y}px`;
    // Set the insect's left position
    insect.style.left = `${x}px`;
    // Set the insect's HTML with an image that rotates randomly
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;

    // Add a click event listener to the insect
    insect.addEventListener('click', catchInsect);

    // Append the insect to the game container
    game_container.appendChild(insect);
}

// Get random coordinates for placing the insect
function getRandomLocation() {
    // Get the window's width
    const width = window.innerWidth;
    // Get the window's height
    const height = window.innerHeight;
    // Calculate a random x-coordinate, leaving some padding
    const x = Math.random() * (width - 200) + 100;
    // Calculate a random y-coordinate, leaving some padding
    const y = Math.random() * (height - 200) + 100;
    // Return the coordinates as an object
    return { x, y };
}

// Handle the insect click event
function catchInsect() {
    // Increase the score
    increaseScore();
    // Add the 'caught' class to the clicked insect
    this.classList.add('caught');
    // Remove the insect after 2 seconds
    setTimeout(() => this.remove(), 2000);
    // Add more insects to the game
    addInsects();
}

// Add more insects after a delay
function addInsects() {
    // Create one insect after 1 second
    setTimeout(createInsect, 1000);
    // Create another insect after 1.5 seconds
    setTimeout(createInsect, 1500);
}

// Increase the player's score
function increaseScore() {
    // Increment the score by 1
    score++;
    // Display the message if the score exceeds 19
    if (score > 19) {
        message.classList.add('visible');
    }
    // Update the score display with the new score
    scoreEl.innerHTML = `Score: ${score}`;
}
