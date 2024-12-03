const songGrid = document.getElementById('song-grid');
const playlistContainer = document.getElementById('playlist-container');
const loading = document.getElementById('loading');
const searchBar = document.getElementById('search-bar');
const addPlaylistBtn = document.getElementById('add-playlist-btn');

let songs = []; 
let filteredSongs = []; 
let playlists = []; 

// Fetch song data
function fetchSongs() {
    loading.style.display = 'block';

    axios.get('https://jsonplaceholder.typicode.com/posts') // Mock API (Replace with real music API)
        .then(response => {
            songs = response.data.map(item => ({
                id: item.id,
                title: item.title,
                description: item.body,
                imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww', // Placeholder image
            }));

            filteredSongs = [...songs]; // Copy the songs data for filtering
            renderSongCards(filteredSongs);
        })
        .catch(error => {
            console.error('Error fetching songs:', error);
        })
        .finally(() => {
            loading.style.display = 'none';
        });
}

// Render song cards dynamically
function renderSongCards(songList) {
    songGrid.innerHTML = '';
    songList.forEach(song => {
        const card = document.createElement('div');
        card.classList.add('song-card');
        card.draggable = true;
        card.setAttribute('data-id', song.id);

        card.innerHTML = `
            <img src="${song.imageUrl}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.description}</p>
        `;

        // Add event listeners for card actions
        card.addEventListener('click', () => addToPlaylist(song));
        card.addEventListener('dragstart', (e) => onDragStart(e, song.id));
        card.addEventListener('dragover', (e) => onDragOver(e));
        card.addEventListener('drop', (e) => onDrop(e, song.id));

        songGrid.appendChild(card);
    });
}

// Add song to playlist
function addToPlaylist(song) {
    const playlistName = prompt("Enter Playlist Name:");
    if (playlistName) {
        let playlist = playlists.find(p => p.name === playlistName);
        if (!playlist) {
            playlist = { name: playlistName, songs: [] };
            playlists.push(playlist);
        }
        playlist.songs.push(song);
        renderPlaylists();
    }
}

// Render all playlists
function renderPlaylists() {
    playlistContainer.innerHTML = '';
    playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('playlist');
        playlistDiv.innerHTML = `
            <h3>${playlist.name}</h3>
            <ul>
                ${playlist.songs.map(song => `<li>${song.title}</li>`).join('')}
            </ul>
        `;
        playlistContainer.appendChild(playlistDiv);
    });
}

// Handle search bar input for filtering songs
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    filteredSongs = songs.filter(song => song.title.toLowerCase().includes(searchTerm));
    renderSongCards(filteredSongs);
});

// Drag-and-drop functionality
let draggedSongId = null;

function onDragStart(event, id) {
    draggedSongId = id;
}

function onDragOver(event) {
    event.preventDefault(); // Allow the drop action
}

function onDrop(event, id) {
    event.preventDefault();
    const droppedSong = document.querySelector(`.song-card[data-id="${id}"]`);
    const draggedSong = document.querySelector(`.song-card[data-id="${draggedSongId}"]`);

    // Swap the positions of the two song cards in the grid
    songGrid.insertBefore(draggedSong, droppedSong);
}

// Add a new playlist (button event)
addPlaylistBtn.addEventListener('click', () => {
    const playlistName = prompt("Enter Playlist Name:");
    if (playlistName) {
        const playlist = { name: playlistName, songs: [] };
        playlists.push(playlist);
        renderPlaylists();
    }
});

// Initialize the app
fetchSongs(); // Fetch song data when the app loads
