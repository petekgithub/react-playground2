import { useState } from 'react';
import People from './components/People';

import data from './data'

function Main() {

  const [people, setPeople] = useState(data);


  return (
    <main>
      <section className='container'>
        <h3>Today's birthday is:{people.length}</h3>
        <People people={people}/>
        <button onClick={() => setPeople([])}>Clean</button>
      </section>
    </main>
  );
}

export default Main;
