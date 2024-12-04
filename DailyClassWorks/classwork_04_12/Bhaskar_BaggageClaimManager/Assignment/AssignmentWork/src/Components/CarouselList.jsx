import React from 'react';

const CarouselList = ({ carousels }) => {
  return (
    <div>
      <h3>Active Carousels</h3>
      <ul>
        {carousels.map((carousel, index) => (
          <li key={index}>
            <span>Carousel {carousel.number}: </span>
            <span>{carousel.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselList;