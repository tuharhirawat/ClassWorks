import React, { useState } from "react";
import ProfileForm from "./ProfileForm";

function App() {
    const [profiles, setProfiles] = useState([]);

    const addProfile = (newProfile) => {
        setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
    };

    
    const deleteProfile = (index) => {
        setProfiles((prevProfiles) =>
            prevProfiles.filter((_, i) => i !== index)
        );
    };

    return (
        <div>
            <h1>Profile Management</h1>
            <ProfileForm addProfile={addProfile} />
            <h2>Profiles List</h2>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={index}>
                        <div>
                            <strong>Name:</strong> {profile.name} |{" "}
                            <strong>Age:</strong> {profile.age} |{" "}
                            <strong>Class:</strong> {profile.class} |{" "}
                            <strong>RollNo:</strong> {profile.rollno}
                        </div>
                        <button onClick={() => deleteProfile(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
