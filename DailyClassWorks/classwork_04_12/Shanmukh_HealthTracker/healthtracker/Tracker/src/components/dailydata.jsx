import Form from "./form";
import { useState } from "react";

function Dailydata() {
    // const [count, setCount] = useState(0)
    const [dailydata,setDailydata]=useState([])
    const addRecord=(data)=>{
            setDailydata((prevData)=>{const existingRecord = prevData.find((record) => record.name === data.name);
                if (existingRecord) {
                  // Update the existing record with the new data
                  return prevData.map((record) =>
                    record.name === data.name
                      ? { ...record, records: [...record.records, data] }
                      : record
                  );} else {
                    // Add a new record if the name doesn't exist
                    return [...prevData, { name: data.name, records: [data] }];
                  }})
            
    }
    const deleteRecord = (name, index) => {
        setDailydata((prevData) =>
          prevData.map((record) =>
            record.name === name
              ? {
                  ...record,
                  records: record.records.filter((_, i) => i !== index),
                }
              : record
          ).filter((record) => record.records.length > 0) // Remove empty name boxes
        );
      };
    // const AverageSugar=()=>{
    //     const avgsugar=dailydata.reduce((sum,element)=>{sum+element.sugar},0)

    // }
    return (
      <>
        <Form addRecord={addRecord}/>
        <div className="records">
        {dailydata.map((record) => (
          <div key={record.name} className="record-box">
            <h3>{record.name}</h3>
            {record.records.map((entry, index) => (
              <div key={index} className="record-entry">
                <p><strong>Sugar:</strong> {entry.sugar}</p>
                <p><strong>BP Up:</strong> {entry.bpup}</p>
                <p><strong>BP Down:</strong> {entry.bpdown}</p>
                <button onClick={() => deleteRecord(record.name, index)}>Delete</button>
              </div>
            ))}
          </div>
        ))}
      </div>
        {/* <div>
            <p>AverageSugar:{avgsugar}</p>
            <button onClick={AverageSugar}>Average</button>
        </div>
         */}
        
        
      </>
    )
  }
  
  export default Dailydata