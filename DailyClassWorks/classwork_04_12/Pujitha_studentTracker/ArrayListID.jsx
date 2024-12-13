import React from 'react'
import ListCard from './ListCard';

function ArrayListID() {
    const names =[
        {name : "Kavya", age : 14, class : 9, rollno :1},
        {name : "Ramya", age : 14, class : 9, rollno :2},
        {name : "Sravya", age : 14, class : 9, rollno :3},
        {name : "Ravi", age : 13, class : 9, rollno :4},
        {name : "Ramesh", age : 15, class : 9, rollno :5},
        {name : "Suresh", age : 14, class : 9, rollno :6},
        {name : "Kumar", age : 15, class : 9, rollno :7},
        {name : "Ram", age : 14, class : 9, rollno :8},
        {name : "vamsi", age : 14, class : 9, rollno :9},
     ];
     return (
        <>
          <div>
            <h2>Array with list of students</h2>
            <section className="ListRendering">
              {names.map((person) => (
                <ListCard key={person.id} id={person.id} data={person} />
              ))}
            </section>
          </div>
        </>
      );
     
};

export default ArrayListID;