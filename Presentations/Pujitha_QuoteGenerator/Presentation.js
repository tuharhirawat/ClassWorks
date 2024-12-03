const getQuoteButton = document.getElementById("get-quote");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const genreSelect = document.getElementById("genre-select");

// Quote database
const quotes = {
  inspirational: [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { content: "“I know my beginning and my end. You exist before the beginning and will persist after the end. Why and for what purpose do I struggle? I will adhere to and uphold the ETERNAL.” ",author : "Bhaskar Ram"},
    { content: " We've been bestowed with the incredible power and ability to spread kindness; let's not squander the chance to touch someone's heart", author:"Bhaskar Ram"},
  ],
  life: [
    { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { content: "Get busy living or get busy dying.", author: "Stephen King" },
    { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { content: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { content: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
  ],
  wisdom: [
    { content: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { content: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { content: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { content: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { content: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein" },
  ],
  love: [
    { content: "The greatest thing you'll ever learn is just to love and be loved in return.", author: "Moulin Rouge" },
    { content: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { content: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { content: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
    { content: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
  ],
  humor: [
    { content: "I'm not arguing, I'm just explaining why I'm right.", author: "Unknown" },
    { content: "I used to think I was indecisive, but now I'm not so sure.", author: "Unknown" },
    { content: "I am so clever that sometimes I don’t understand a single word of what I am saying.", author: "Oscar Wilde" },
    { content: "Why don’t scientists trust atoms? Because they make up everything!", author: "Unknown" },
    { content: "Light travels faster than sound. This is why some people appear bright until you hear them speak.", author: "Alan Dundes" },
  ],
};

getQuoteButton.addEventListener("click", () => {
  const selectedGenre = genreSelect.value;
  const genreQuotes = quotes[selectedGenre];

  // Pick a random quote
  const randomIndex = Math.floor(Math.random() * genreQuotes.length);
  const randomQuote = genreQuotes[randomIndex];

  // Display the quote and author
  quoteText.textContent = `"${randomQuote.content}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
});

