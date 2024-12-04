const VotingApp = () => {
    const [votes, setVotes] = useState([
      { name: 'React', votes: 0 },
      { name: 'Vue', votes: 0 },
      { name: 'Angular', votes: 0 }
    ]);
    
    const [totalVotes, setTotalVotes] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
  
    // Handle vote
    const handleVote = (option) => {
      if (hasVoted) {
        alert("You have already voted!");
        return;
      }
      
      const updatedVotes = votes.map((v) =>
        v.name === option.name ? { ...v, votes: v.votes + 1 } : v
      );
      
      setVotes(updatedVotes);
      setTotalVotes(totalVotes + 1);
      setHasVoted(true);
    };
  
    return (
      <div>
        <h1>Vote for your favorite framework!</h1>
  
        {/* Voting Options */}
        <div>
          {votes.map((option, index) => (
            <VotingOption key={index} option={option} onVote={handleVote} />
          ))}
        </div>
  
        {/* Show results after voting */}
        {hasVoted && <Results votes={votes} totalVotes={totalVotes} />}
      </div>
    );
  };
  
  export default VotingApp;