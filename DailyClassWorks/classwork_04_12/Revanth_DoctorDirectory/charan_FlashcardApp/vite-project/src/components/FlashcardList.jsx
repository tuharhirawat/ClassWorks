import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashcards = [], toggleFlip }) {
  return (
    <div>
      {flashcards.length === 0 ? (
        <p>No flashcards added yet.</p>
      ) : (
        flashcards.map((card) => (
          <Flashcard key={card.id} card={card} toggleFlip={toggleFlip} />
        ))
      )}
    </div>
  );
}

export default FlashcardList;
