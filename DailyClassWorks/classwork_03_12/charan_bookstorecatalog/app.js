// app.js

const apiUrl = "https://openlibrary.org/subjects/"; 
const bookCatalogElement = document.getElementById("bookCatalog");
const categoryFilter = document.getElementById("categoryFilter");
const bookModal = document.getElementById("bookModal");
const closeModal = document.getElementById("closeModal");
const bookTitle = document.getElementById("bookTitle");
const bookDescription = document.getElementById("bookDescription");
const bookAuthor = document.getElementById("bookAuthor");
const bookPublisher = document.getElementById("bookPublisher");


async function fetchBooks(category = "fiction") {
  try {
    const response = await fetch(`${apiUrl}${category}.json?limit=20`);
    const data = await response.json();
    displayBooks(data.works);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

function displayBooks(books) {
  bookCatalogElement.innerHTML = ''; 
  books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
    `;
    bookCard.addEventListener("click", () => {
      openBookModal(book);
    });
    bookCatalogElement.appendChild(bookCard);
  });
}

function openBookModal(book) {
  bookTitle.textContent = book.title;
  bookDescription.textContent = book.description ? book.description : "No description available.";
  bookAuthor.textContent = `Author: ${book.author_name ? book.author_name.join(", ") : "Unknown Author"}`;
  bookPublisher.textContent = `Publisher: ${book.publisher ? book.publisher.join(", ") : "Unknown Publisher"}`;
  bookModal.style.display = "block";
}


closeModal.addEventListener("click", () => {
  bookModal.style.display = "none";
});


categoryFilter.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  fetchBooks(selectedCategory);
});

fetchBooks();

window.addEventListener("click", (event) => {
  if (event.target === bookModal) {
    bookModal.style.display = "none";
  }
});
