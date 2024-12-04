import React, { useState } from 'react';
import ListCard from "./ListCard";
import Profile from "./Profile";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredProfiles, setFilteredProfiles] = useState([]); 

  const searchSpeciality = (speciality, profiles) => {
    const filtered = profiles.filter((profile) => 
      profile.speciality.toLowerCase().includes(speciality.toLowerCase()) // Case insensitive search
    );
    setFilteredProfiles(filtered); 
  };

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchSpeciality(searchTerm, profiles);
  };

 
  const [profiles, setProfiles] = useState([]);

  return (
    <>
      <Profile setProfiles={setProfiles} /> 
      
      <div className="search-container">
        <input
          type="search"
          name="name"
          value={searchTerm} 
          onChange={handleSearchChange} 
          placeholder="Search by speciality"
        />
        <button type="submit" onClick={handleSearchSubmit}>Search</button>
      </div>


      {searchTerm && <p><strong>Search term:</strong> {searchTerm}</p>}


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
          <p>No profiles found for "{searchTerm}"</p> 
        )}
      </div>
    </>
  );
}

export default SearchBar;
