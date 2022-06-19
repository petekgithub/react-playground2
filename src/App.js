import { useState } from 'react';
import './App.css';
import data from './data'
import Persons from './components/Persons';
import Refresh from './components/Refresh';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  const [persons, setPersons] = useState(data);
  //console.log(persons)

  return (
    <main>
      <section className='container'>
        <h3>Today's birthday is:{persons.length}</h3>
        <Persons persons={persons}/>
        <button onClick={() => setPersons([])}>Clean</button>
        <Router>
        <Refresh/>
        </Router>       
          
      </section>
    </main>
  );
}

export default App;
