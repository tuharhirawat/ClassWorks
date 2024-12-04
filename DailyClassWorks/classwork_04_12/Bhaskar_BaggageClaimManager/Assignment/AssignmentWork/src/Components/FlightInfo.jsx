import React, { useState } from 'react';
import FlightInput from './FlightInput';
import BaggageDetails from './BaggageDetails';
import CarouselList from './CarouselList';
import ErrorMessage from './ErrorMessage';

const FlightInfo = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [baggageDetails, setBaggageDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFlightSubmit = async (flightNumber) => {
    setLoading(true);
    setError('');
    console.log('Fetching data for flight:', flightNumber);

    try {
      const mockResponse = {
        flightNumber: flightNumber,
        carouselNumber: 'B747',
        expectedArrivalTime: '2024-12-04 14:30',
        carousels: [
          { number: 'B3', status: 'Active' },
          { number: 'B4', status: 'Inactive' }
        ]
      };

      setTimeout(() => {
        setBaggageDetails(mockResponse);
        setLoading(false);
      }, 1000);

    } catch (error) {
      setError('Error retrieving baggage details');
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Baggage Claim Manager</h1>
      <FlightInput onSubmit={handleFlightSubmit} />
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {baggageDetails && !loading && !error && (
        <BaggageDetails
          flightNumber={flightNumber}
          carouselNumber={baggageDetails.carouselNumber}
          expectedArrivalTime={baggageDetails.expectedArrivalTime}
        />
      )}
      {baggageDetails && baggageDetails.carousels && (
        <CarouselList carousels={baggageDetails.carousels} />
      )}
    </div>
  );
};

export default FlightInfo;
