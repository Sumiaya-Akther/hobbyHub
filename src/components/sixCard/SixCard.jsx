import React, { useEffect, useState } from 'react';

const SixCard = () => {
    const [group, setGroup] = useState([]);
     const [error, setError] = useState(true);
   
    useEffect(()=>{
      fetch('http://localhost:3000/new-groups')
      .then(res=> res.json())
      .then (data => {
        setGroup(data);
      })

      .catch(error=>{
        setError(error.message)
      })

    },[])

    


    return (
        <div>
            <h1>{group.name}</h1>
        </div>
    );
};

export default SixCard;