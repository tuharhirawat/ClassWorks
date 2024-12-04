import React, { useState } from "react";
import { v4 as generateID } from "uuid";
import ProfileForm from "./ProfileForm";
import ListCard from "./ListCard";

function Profile({ setProfiles }) {
  const [profiles, setProfilesLocal] = useState([]); // Manage local profiles state

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfilesLocal(updatedProfiles);
    setProfiles(updatedProfiles); // Pass updated profiles to the parent component (SearchBar)
  };

  const addProfile = (profile) => {
    const updatedProfile = { ...profile, id: generateID() };
    const newProfiles = [...profiles, updatedProfile];
    setProfilesLocal(newProfiles);
    setProfiles(newProfiles); // Pass updated profiles to the parent component (SearchBar)
  };

  return (
    <>
      <ProfileForm addProfile={addProfile} />
      
      <div className="profilecard">
        {profiles.map((profile) => (
          <ListCard
            key={profile.id}
            id={profile.id}
            data={profile}
            deleteProfile={deleteProfile}
          />
        ))}
      </div>
    </>
  );
}

export default Profile;
