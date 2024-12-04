import React from "react";

function Flashcard({ card, toggleFlip }) {
  if (!card) {
    return <p>Error: No card data available.</p>;
  }

  return (
    <div onClick={() => toggleFlip(card.id)}>
      <h2>{card.isFlipped ? card.answer : card.question}</h2>
    </div>
  );
}

export default Flashcard;
