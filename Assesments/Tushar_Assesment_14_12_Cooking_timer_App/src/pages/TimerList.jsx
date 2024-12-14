import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const TimerList = () => {
  const [timers, setTimers] = useState([]);
  
  useEffect(() => {
    const fetchTimers = async () => {
      const response = await axios.get('http://localhost:3000/timers');
      setTimers(response.data);
    };
    
    fetchTimers();
  }, []);

  return (<>
    
    <Container>
      <h1>Timer List</h1>
      {timers.length === 0 ? (
        <p>No timers set</p>
      ) : (
        <TimerContainer>
          {timers.map(timer => (
            <TimerItem key={timer.id}>
              <h3>{timer.user}</h3>
              <h3>{timer.name}</h3>
              <p>{timer.duration} minutes</p>
              <Link to={`/edit/${timer.id}`}>Edit</Link>
            </TimerItem>
          ))}
        </TimerContainer>
      )}
      <Link to="/add">Add Timer</Link>
    </Container>
    
    </>);
};

const Container = styled.div`
  padding: 10px;
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimerItem = styled.div`
  background: #f4f4f4;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;

export default TimerList;
