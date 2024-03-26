import './App.css';
import Orb from './component/Orb/Orb';
import Navigation from './component/navigation/Navigation';

function App() {
  return (
    <div className=" h-full relative ">
      <Orb />
      <main className=" lg:p-8 p-2 h-full flex gap-8">
        <Navigation />
      </main>
    </div>
  );
}

export default App;
