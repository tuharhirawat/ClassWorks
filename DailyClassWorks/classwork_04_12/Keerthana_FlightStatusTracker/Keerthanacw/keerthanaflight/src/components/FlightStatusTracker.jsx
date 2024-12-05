
import React, { useState } from "react";

const FlightStatusTracker = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFlightData(null);

    try {
      
      const response = await fetch("https://mocki.io/v1/226509cb-6393-4351-bb35-d0ac7437f187");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

     
      const filteredFlight = data.find(
        (flight) =>
          flight.flightNumber.toLowerCase() === flightNumber.toLowerCase() &&
          flight.origin.toLowerCase() === origin.toLowerCase() &&
          flight.destination.toLowerCase() === destination.toLowerCase() &&
          flight.departureTime.startsWith(date)
      );

      if (filteredFlight) {
        setFlightData(filteredFlight);
      } else {
        setError("No flight found matching your search criteria.");
      }
    } catch (error) {
      setError("Failed to fetch flight data. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Flight Status Tracker</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Flight Number: </label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder="e.g., AA123"
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Origin: </label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="e.g., JFK"
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Destination: </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g., LAX"
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search Flight</button>
      </form>

     
      {loading && <p>Loading flight data...</p>}

    
      {error && <p style={{ color: "red" }}>{error}</p>}

     
      {flightData && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Flight Details</h3>
          <p><strong>Flight Number:</strong> {flightData.flightNumber}</p>
          <p><strong>Airline:</strong> {flightData.airline}</p>
          <p><strong>Status:</strong> {flightData.status}</p>
          <p>
            <strong>Departure:</strong>{" "}
            {new Date(flightData.departureTime).toLocaleString()}
          </p>
          <p>
            <strong>Arrival:</strong>{" "}
            {new Date(flightData.arrivalTime).toLocaleString()}
          </p>
          <p><strong>Origin:</strong> {flightData.origin}</p>
          <p><strong>Destination:</strong> {flightData.destination}</p>
        </div>
      )}
    </div>
  );
};

export default FlightStatusTracker;
