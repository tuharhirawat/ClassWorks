import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EditTimer = () => {
  const { id } = useParams();
  // const [timerObj,setTimerObj] = useState([])
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimer = async () => {
      const response = await axios.get(`http://localhost:3000/timers/${id}`);
      setUser(response.data.user);
      setName(response.data.name);
      setDuration(response.data.duration);
    };

    fetchTimer();
  }, [id]);
  
  // useEffect(() => {
  // const deleteTimer = async (id) => {
  //   await axios.delete(`http://localhost:3000/timers/${id}`)
  //     .then(()=>{
  //       setTimerObj(timerObj.filter(response=>response.id=id))
  //     })
  //     .catch((error)=>console.log(error))
  //   };
  // },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTimer = { user,name, duration: parseInt(duration) };
    await axios.put(`http://localhost:3000/timers/${id}`, updatedTimer);
    navigate('/');
  };

  return (<>
    <Container>
      <h1>Edit Timer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Person Name</label>
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
        <button type="submit">Update Timer</button>
        {/* <button type="submit">Delete Timer</button> */}
      </form>
    </Container>
  </>);
  };

const Container = styled.div`
  padding: 20px;
  display : flex;
  flex-direction: column;
`;

export default EditTimer;
