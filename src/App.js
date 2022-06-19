import { useState } from 'react';
import './App.css';
import data from './data'
import People from './components/People';
import Refresh from './components/Refresh';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>Today's birthday is:{people.length}</h3>
        <People people={people}/>
        <button onClick={() => setPeople([])}>Clean</button>
        <button onClick={() => setPeople([])}>Refresh</button>
       
        {/** // <Router>
        // <Refresh/>
        // </Router>       
          */}
        
      </section>
    </main>
  );
}

export default App;
