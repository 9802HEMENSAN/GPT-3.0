import { useState } from 'react';
import './App.css';
import DashBoard from './Pages/Dashboard';
import EChartComponent from './components/Chart';
import MultipleSelectChip from './components/MultiSelect';

function App() {
  const [BitCoins, setBitCoins] = useState([])

  console.log(BitCoins);

  return (
    <div className="App">
       <MultipleSelectChip BitCoins={BitCoins} setBitCoins={setBitCoins}/>
       <DashBoard  apiEndpoints={BitCoins}/>
    </div>
  );
}

export default App;
