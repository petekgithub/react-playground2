import { useState } from 'react';
import './App.css';
import data from './data'
import Kisiler from './components/Kisiler';
import Yenile from './components/Yenile';


function App() {

  const [kisiler, setKisiler] = useState(data);
  const [yenile, setYenile] = useState("");
  //console.log(kisiler)

  return (
    <main>
      <section className='container'>
        <h3>Bugün {kisiler.length} doğumgünü var.</h3>
        <Kisiler kisiler={kisiler}/>
        <button onClick={() => setKisiler([])}>Temizle</button>
        <Yenile yenile={yenile}/>
        <button onClick={() => setYenile([])}>Yenile</button>
      </section>
     
    </main>
  );
}

export default App;
