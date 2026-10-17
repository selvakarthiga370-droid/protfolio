import React, {useState} from 'react';
const StudentCard =({
    name,
    age, 
    skills=[],
    address={}})=>{
const [Details, setDetails] = useState(false);

  return (
    <div>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <button onClick={() => setDetails(!Details)} className="toggle-btn">
        {Details ? 'Hide Details' : 'Show Details'}
      </button>
      {Details && (
        <div >
          <p>Skills:{skills.length>0?skills.join(','):'None specified'}</p>
          <p>Address:{address.street || 'N/A'}, {address.city || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
