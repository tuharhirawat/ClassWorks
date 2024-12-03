// DOM Elements
const gameGrid = document.getElementById('game-grid');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const resetBtn = document.getElementById('reset-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const wishlistContainer = document.getElementById('wishlist-container');

let allGames = [];
let wishlist = []; // Array to store the games added to the wishlist

// Fetch Data
async function fetchGames() {
  try {
    const response = await axios.get('https://mocki.io/v1/89b21ac1-f348-493c-ae18-48525420e3c2'); // Replace with actual API
    allGames = response.data; 
    renderGames(allGames);
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}

// Render Games
function renderGames(games) {
  gameGrid.innerHTML = '';
  games.map((game) => {
    const card = document.createElement('div');
    card.className = 'card';
   
    console.log('Game Image URL:', game.image);

    // Check if the image URL is valid and set the background image dynamically
    if (game.image) {
      card.style.backgroundImage = `https://i.pinimg.com/originals/1e/6c/6a/1e6c6aa79a41fd801e8ef691db7ef70a.jpg`; // Set the background image dynamically
    } else {
      card.style.backgroundColor = 'gray'; // Fallback color if no image URL
    }

    card.innerHTML = `
      <div class="card-content">
        <h3>${game.title}</h3>
        <p>${game.category}</p>
        <button class="wishlist-btn">Add to Wishlist</button>
      </div>
    `;

    // Attach event listener to "Add to Wishlist" button
    const wishlistButton = card.querySelector('.wishlist-btn');
    wishlistButton.addEventListener('click', () => addToWishlist(game));

    // Card Hover and Click Events
    card.addEventListener('click', () => showModal(game));
    gameGrid.appendChild(card);
  });

  // Update total games count
  const totalGames = games.reduce((acc) => acc + 1, 0);
  document.getElementById('total-games').textContent = `Total Games: ${totalGames}`;
}

// Show Modal
function showModal(game) {
  document.getElementById('modal-title').textContent = game.title;
  document.getElementById('modal-description').textContent = game.description;
  document.getElementById('modal-image').src = game.image;
  modal.classList.remove('hidden');
}

// Add Game to Wishlist
function addToWishlist(game) {
  // Check if game is already in wishlist
  if (!wishlist.some((item) => item.title === game.title)) {
    wishlist.push(game); // Add game to wishlist array

    // Create a new wishlist item
    const wishlistItem = document.createElement('div');
    wishlistItem.className = 'card';
    wishlistItem.style.backgroundImage = `https://i.pinimg.com/736x/4b/c5/9f/4bc59f021d76718baba9ada1ba9b261d.jpg`; // Set background image for wishlist
    wishlistItem.innerHTML = `
      <div class="card-content">
        <h3>${game.title}</h3>
        <p>${game.category}</p>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Attach event listener to "Delete" button to remove game from wishlist
    const deleteButton = wishlistItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => deleteFromWishlist(game, wishlistItem));

    wishlistContainer.appendChild(wishlistItem);

    // Optionally, show a message that the game was added to wishlist
    alert(`${game.title} has been added to your wishlist!`);
  } else {
    alert('This game is already in your wishlist!');
  }
}

// Delete Game from Wishlist
function deleteFromWishlist(game, wishlistItem) {
  // Remove game from wishlist array
  wishlist = wishlist.filter((item) => item.title !== game.title);

  // Remove the game card from the wishlist container
  wishlistContainer.removeChild(wishlistItem);

  // Optionally, show a message that the game was removed from wishlist
  alert(`${game.title} has been removed from your wishlist!`);
}

// Search Functionality
searchBtn.addEventListener('click', () => {
  const query = searchBar.value.toLowerCase();

  // Use filter to find games that match the search query
  const filteredGames = allGames.filter(
    (game) =>
      game.title.toLowerCase().includes(query) || game.category.toLowerCase().includes(query)
  );

  renderGames(filteredGames);
});

// Reset Filters
resetBtn.addEventListener('click', () => fetchGames());

// Close Modal
closeModal.addEventListener('click', () => modal.classList.add('hidden'));

// Initialize
fetchGames();
