import { useState } from 'react';
import './App.css';
import StudentCard from './Components/StudentCard';

function App() {
  const studentData = [
    { id: 1, name: "Sami", rollNo: 1, batch: 16, favLanguage: "Python" },
    { id: 2, name: "Faisal", rollNo: 2, batch: "WMA 14", favLanguage: "C#" },
    { id: 3, name: "Wahab", rollNo: 3, batch: "WMA 13", favLanguage: "JavaScript" },
    { id:  4, name: "Ahmed", rollNo: 4, batch: "WMA 12", favLanguage: "Java" },
    { id: 5 , name: "Meraj", rollNo: 5, batch: "WMA 10", favLanguage: "Urdu" },
  ];
  let setState = useState(0);
 let count = setState[0];
 let setCount = setState[1]; 

function decrease () {
  setCount (count - 1)
}

function increase () {
  setCount(count + 1)
}
function reSet () {
  setCount(0)
}

  return (
   <>
   <div>
      {studentData.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          rollNo={student.rollNo}
          batch={student.batch}
          favLanguage={student.favLanguage}
        />
      ))}
    </div>
    <div> <p>You Clicked: {count}</p>
    <button onClick={increase} className='bg-green-700 text-white rounded' >Increase!</button>
    <button onClick={decrease} className='bg-green-700 text-white rounded' >Decrease!</button>
    <br />
        <button onClick={reSet} className='bg-green-700 text-white rounded' >Reset!</button>
        </div>
 </>    
  );
}

export default App;