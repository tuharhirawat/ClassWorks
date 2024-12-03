const artworksData = [
    { id: 1, title: "Sunset Painting", artist: "RAJEE", image: "https://th.bing.com/th/id/OIP.48JDzcKCUVL25-Fgx1fOBwHaFC?w=285&h=194&c=7&r=0&o=5&dpr=2&pid=1.7", category: "Painting" },
    { id: 2, title: "Modern Sculpture", artist: "MAHI", image: "https://th.bing.com/th/id/OIP.bo3s5OT7T8KkbXlpjz8SCgHaHa?w=193&h=193&c=7&r=0&o=5&dpr=2&pid=1.7", category: "Sculpture" },
    { id: 3, title: "Abstract Art", artist: "JUNNU", image: "https://th.bing.com/th/id/OIP.n_q7LX6Ve83itwkaWL_xxgHaFj?w=265&h=199&c=7&r=0&o=5&dpr=2&pid=1.7", category: "Abstract" },
    { id: 4, title: "Street Art", artist: "KOMALI", image: "https://th.bing.com/th/id/OIP.cD60OoXrHnoIxzwwKKeNlAHaE7?w=268&h=180&c=7&r=0&o=5&dpr=2&pid=1.7", category: "Graffiti" },
    { id: 5, title: "Watercolor Flowers", artist: "RAJEE", image: "http://ts1.mm.bing.net/th?id=OIP.AsRemhTo8kLHb5xFCCT81wHaE8&pid=15.1", category: "Painting" },
    { id: 6, title: "Digital Landscape", artist: "MAHI", image: "https://th.bing.com/th/id/OIP.2z-5Z8kAWls2s7GXVSfuSgHaFj?w=149&h=180&c=7&r=0&o=5&dpr=2&pid=1.7", category: "Digital" }
];
const artworksContainer = document.getElementById('artworks-container');
const searchInput = document.getElementById('searchInput');
const artistFilter = document.getElementById('artistFilter');
const loadingSpinner = document.getElementById('loadingSpinner');
let artworks = [...artworksData];
const renderArtworks = (artworks) => {
    artworksContainer.innerHTML = ''; 
    artworks.map((artwork) => {
        const card = document.createElement('div');
        card.classList.add('artwork-card');
        card.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}">
            <div class="artwork-details">
                <h2>${artwork.title}</h2>
                <p>Artist: ${artwork.artist}</p>
            </div>
        `;
        card.addEventListener('click', () => expandCard(artwork)); 
        artworksContainer.appendChild(card);
    });
};
const expandCard = (artwork) => {
    const expandedCard = document.createElement('div');
    expandedCard.classList.add('expanded-card');
    expandedCard.innerHTML = `
        <button class="close-button">X</button>
        <img src="${artwork.image}" alt="${artwork.title}">
        <h2>${artwork.title}</h2>
        <p>Artist: ${artwork.artist}</p>
        <p>Category: ${artwork.category}</p>`;
    document.body.appendChild(expandedCard);
    expandedCard.querySelector('.close-button').addEventListener('click', () => {
        expandedCard.remove();
    });
};
const filterByArtist = (artistName) => {
    const filteredArtworks = artworks.filter((artwork) => artwork.artist.toLowerCase().includes(artistName.toLowerCase()));
    renderArtworks(filteredArtworks);
};
const handleSearch = (query) => {
    const filteredArtworks = artworks.filter((artwork) => artwork.title.toLowerCase().includes(query.toLowerCase()));
    renderArtworks(filteredArtworks);
};
const generateArtistFilter = () => {
    const artists = [...new Set(artworks.map((artwork) => artwork.artist))]; 
    artists.forEach((artist) => {
        const option = document.createElement('option');
        option.value = artist;
        option.textContent = artist;
        artistFilter.appendChild(option);
    });
};
searchInput.addEventListener('input', (e) => handleSearch(e.target.value)); 
artistFilter.addEventListener('change', (e) => filterByArtist(e.target.value)); 
generateArtistFilter();
renderArtworks(artworks);
