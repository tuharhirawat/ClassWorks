import React,{useState} from 'react'


    function AddTopic({ onAddTopic }) {
  const [newTopic, setNewTopic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTopic.trim()) {
      onAddTopic(newTopic);
      setNewTopic("");  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new topic"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)} 
      />
      <button type="submit">Add Topic</button>
    </form>
  );
}
   
export default AddTopic