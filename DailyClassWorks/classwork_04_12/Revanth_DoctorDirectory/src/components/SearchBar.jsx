import React, { useState } from 'react';
import ListCard from "./ListCard";
import Profile from "./Profile";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [filteredProfiles, setFilteredProfiles] = useState([]); // Filtered profiles state

  // Function to filter profiles based on speciality
  const searchSpeciality = (speciality, profiles) => {
    const filtered = profiles.filter((profile) => 
      profile.speciality.toLowerCase().includes(speciality.toLowerCase()) // Case insensitive search
    );
    setFilteredProfiles(filtered); // Update filtered profiles state
  };

  // Handle the input change to update search term
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state on input change
  };

  // Handle the search form submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Search from the profiles array passed down from Profile component
    searchSpeciality(searchTerm, profiles);
  };

  // To receive profiles from Profile component
  const [profiles, setProfiles] = useState([]);

  return (
    <>
      <Profile setProfiles={setProfiles} /> {/* Pass setProfiles down to Profile to manage profiles */}
      
      <div className="search-container">
        <input
          type="search"
          name="name"
          value={searchTerm} // Bind input value to searchTerm state
          onChange={handleSearchChange} // Update search term on input change
          placeholder="Search by speciality"
        />
        <button type="submit" onClick={handleSearchSubmit}>Search</button>
      </div>

      {/* Display the search term */}
      {searchTerm && <p><strong>Search term:</strong> {searchTerm}</p>}

      {/* Display filtered profiles */}
      <div className="profile-card">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ListCard
              key={profile.id}
              pspeciality={profile.speciality}
              data={profile}
            />
          ))
        ) : (
          <p>No profiles found for "{searchTerm}"</p> // Display message if no profiles match
        )}
      </div>
    </>
  );
}

export default SearchBar;
