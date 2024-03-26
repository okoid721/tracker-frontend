import { useState } from 'react';
import './App.css';
import Orb from './component/Orb/Orb';
import Navigation from './component/navigation/Navigation';
import Dashboard from './component/dashboard/Dashboard';
import Income from './component/Income/Income';
import Expenses from './component/Expenses/Expenses';
import Saving from './component/Saving/Saving';

function App() {
  const [active, setActive] = useState(1);
  const displayData = () => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expenses />;
      case 4:
        return <Saving />;
    }
  };

  return (
    <div className=" h-full relative ">
      <Orb />
      <main className=" lg:p-8 p-2 h-full flex gap-8">
        <Navigation active={active} setActive={setActive} />
        <main className=" main">{displayData()}</main>
      </main>
    </div>
  );
}

export default App;
