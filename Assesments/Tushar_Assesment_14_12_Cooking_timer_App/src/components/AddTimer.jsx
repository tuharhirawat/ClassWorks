import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddTimer = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTimer = { user,name, duration: parseInt(duration) };
    console.log(newTimer)
    await axios.post('http://localhost:3000/timers', newTimer);
    navigate('/');
  };

  return (
    <Container>
      <h1>Add Timer</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Recipe Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Duration (in minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button type="submit">Add Timer</button>

      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display : flex
`;

const Form = styled.form`
display: flex;
flex-direction : column;
`;

export default AddTimer;
