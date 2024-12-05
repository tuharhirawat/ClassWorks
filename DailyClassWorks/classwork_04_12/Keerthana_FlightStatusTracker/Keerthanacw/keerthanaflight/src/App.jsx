import React from "react";
import FlightStatusTracker from "./components/FlightStatusTracker"; // Adjust the path as needed
import "./App.css"; 

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Flight Status Tracker</h1>
        <p>Track your flight's real-time status conveniently!</p>
      </header>
      <main>
        
        <FlightStatusTracker />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Flight Status Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
