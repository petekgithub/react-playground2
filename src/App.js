import { useState } from 'react';
import './App.css';
import data from './data'
import Persons from './components/Persons';
import Refresh from './components/Refresh';


function App() {

  const [persons, setPersons] = useState(data);
  //onst [yenile, setYenile] = useState("");
  //console.log(kisiler)

  return (
    <main>
      <section className='container'>
        <h3>Today's birthday is:{persons.length}</h3>
        <Persons ali={persons}/>
        <button onClick={() => setPersons([])}>Clean</button>
        <Refresh/>  
      </section>
    </main>
  );
}

export default App;
