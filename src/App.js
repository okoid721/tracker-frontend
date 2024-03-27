import { useState } from 'react';
import './App.css';
import Orb from './component/Orb/Orb';
import Navigation from './component/navigation/Navigation';
import Dashboard from './component/dashboard/Dashboard';
import Income from './component/Income/Income';
import Expenses from './component/Expenses/Expenses';
import Saving from './component/Saving/Saving';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Saving />;
      default: {
        <Dashboard />;
      }
    }
  };

  return (
    <div className=" h-full relative ">
      <Orb />
      <main className=" lg:p-8 p-2 h-full flex gap-8">
        <Navigation active={active} setActive={setActive} />
        <main className=" lg:flex-1 w-[100vw] h-[100vh]  bg-[#d7d7d7] border-[3px] border-white rounded-[32px] overflow-auto overflow-x-hidden ">
          {displayData()}
        </main>
      </main>
    </div>
  );
}

// .main {
//   flex: 1;
//   background: rgba(252, 246, 249, 0.76);
//   border: 3px solid #ffff;
//   backdrop-filter: blur(4.5px);
//   border-radius: 32px;
//   overflow: auto;
//   overflow-x: hidden;
// }

export default App;
