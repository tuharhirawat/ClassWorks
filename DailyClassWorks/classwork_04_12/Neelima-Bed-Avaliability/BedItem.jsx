const BedItem = ({ bed, onStatusChange }) => {
    const bedStyles = {
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '200px',
    };
  
    const statusStyles = {
      Available: { backgroundColor: '#d4f1c2' },
      Occupied: { backgroundColor: '#f8d7da' },
      Reserved: { backgroundColor: '#fff3cd' },
      Cleaning: { backgroundColor: '#cce5ff' },
      Maintenance: { backgroundColor: '#f1f1f1' },
    };
  
    return (
      <div
        style={{
          ...bedStyles,
          ...statusStyles[bed.status], // Apply the appropriate background color based on status
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{bed.bedNumber}</span>
        <span>Status: {bed.status}</span>
        <button
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
          onClick={() => onStatusChange(bed.id)}
        >
          Change Status
        </button>
      </div>
    );
  };
  
  export default BedItem;
  