import React from 'react'

function Child({topic, onVote,onDelete}) {
  return (
    <>
    <div className='topic'>
      <h3>{topic.name}</h3>
      <p>Votes: {topic.votes}</p>
        <button onClick={()=>onVote(topic.id)}>Vote</button>
        <button onClick={()=>onDelete(topic.id)}>Delete</button>
    </div>
    </>
  )
}   

export default Child