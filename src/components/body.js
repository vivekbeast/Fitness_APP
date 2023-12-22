import React from 'react'
import { useState, useEffect } from "react";



const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21fef058c8msh960c7f19a50d087p177e42jsn69332945775b',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



function Body() {
      const [exerciseData, setExerciseData] = useState(null);
      
    
      useEffect(() => {
        const fetchData = async () => {
          
            const response = await fetch(url, options);
            const result = await response.json();
            setExerciseData(result);
        };
    
        fetchData();
      }, []);

      



    
      return (
        <div className="App">
          <header className="App-header">
            
            {exerciseData && (
              <div>
                <h1 className=' text-center'>Exercise Data</h1>
                <ul>
                  {exerciseData.map((exercise, index) => (
                    <li key={index} className=' flex flex-col p-9'>
                      <strong>Name:</strong> {exercise.name}<br />
                      <strong>BodyPart:</strong> {exercise.bodyPart}<br />
                      <img className='' src={exercise.gifUrl} alt='imag' />
                      <p>
                    <strong>Instructions: {exercise.instructions}</strong>
                  </p>
                      <h1>{exercise.secondaryMuscles}</h1>
                      <h1>Target: {exercise.target}</h1>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </header>
        </div>
      );
    }
    
    export default Body;


