import React from 'react';

const BaggageDetails = ({ flightNumber, carouselNumber, expectedArrivalTime }) => {
  return (
    <div>
      <h2>Baggage Information for Flight {flightNumber}</h2>
      <p>Carousel Number: {carouselNumber}</p>
      <p>Expected Arrival Time: {expectedArrivalTime}</p>
    </div>
  );
};

export default BaggageDetails;
