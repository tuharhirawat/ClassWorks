const searchInput = document.getElementById('crypto-search');
const searchButton = document.getElementById('search-button');
const suggestions = document.getElementById('suggestions');
const cryptoInfo = document.getElementById('crypto-info');

let cryptoList = [];

// Fetch the list of cryptocurrencies
async function fetchCryptoList() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        cryptoList = await response.json();
    } catch (error) {
        console.error('Error fetching cryptocurrency list:', error);
    }
}

// Filter and display suggestions
function displaySuggestions(query) {
    if (!query) {
        suggestions.innerHTML = '';
        suggestions.classList.add('hidden');
        return;
    }

    const filtered = cryptoList.filter(crypto =>
        crypto.name.toLowerCase().includes(query) || crypto.symbol.toLowerCase().includes(query)
    );

    suggestions.innerHTML = '';
    filtered.slice(0, 10).forEach(crypto => {
        const li = document.createElement('li');
        li.textContent = `${crypto.name} (${crypto.symbol.toUpperCase()})`;
        li.addEventListener('click', () => {
            fetchCryptoDetails(crypto.id);
            suggestions.classList.add('hidden');
        });
        suggestions.appendChild(li);
    });

    suggestions.classList.remove('hidden');
}

// Fetch details of a specific cryptocurrency
async function fetchCryptoDetails(cryptoId) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}`);
        const data = await response.json();
        displayCryptoInfo(data);
    } catch (error) {
        console.error('Error fetching cryptocurrency details:', error);
        cryptoInfo.innerHTML = '<p>Error fetching details. Please try again.</p>';
    }
}

// Display the details of the selected cryptocurrency
function displayCryptoInfo(data) {
    const { name, symbol, market_data, image, description } = data;
    const price = market_data.current_price.usd.toFixed(8);

    cryptoInfo.innerHTML = `
        <h2>${name} (${symbol.toUpperCase()})</h2>
        <img src="${image.large}" alt="${name}" />
        <p><strong>Current Price:</strong> $${price}</p>
        <p><strong>Market Cap:</strong> $${market_data.market_cap.usd.toLocaleString()}</p>
        <p><strong>24h High:</strong> $${market_data.high_24h.usd.toFixed(8)}</p>
        <p><strong>24h Low:</strong> $${market_data.low_24h.usd.toFixed(8)}</p>
        <p>${description.en.split('.')[0] || 'No description available.'}</p>
    `;
}

// Handle the search button click
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        const matchedCrypto = cryptoList.find(
            crypto => crypto.name.toLowerCase() === query || crypto.symbol.toLowerCase() === query
        );

        if (matchedCrypto) {
            fetchCryptoDetails(matchedCrypto.id);
        } else {
            cryptoInfo.innerHTML = '<p>No cryptocurrency found. Please try again.</p>';
        }
    }
});

// Listen for input changes to display suggestions
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    displaySuggestions(query);
});

// Initialize the app by fetching the crypto list
fetchCryptoList();
