import React, { useState } from "react";
import FlashcardForm from "./FlashcardForm";
import FlashcardList from "./FlashcardList";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (question, answer) => {
    setFlashcards([
      ...flashcards,
      { id: Date.now(), question, answer, isFlipped: false },
    ]);
  };

  const toggleFlip = (id) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  return (
    <div>
      <h1>Flashcard App</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} toggleFlip={toggleFlip} />
    </div>
  );
}

export default App;
