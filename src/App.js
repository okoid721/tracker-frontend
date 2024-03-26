import { useState } from 'react';
import './App.css';
import Orb from './component/Orb/Orb';
import Navigation from './component/navigation/Navigation';

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className=" h-full relative ">
      <Orb />
      <main className=" lg:p-8 p-2 h-full flex gap-8">
        <Navigation active={active} setActive={setActive} />
      </main>
    </div>
  );
}

export default App;
