import React, { useState } from 'react'
import logo from './star.png';
import gas_logo from './natural-gas.png';
import electricity_logo from './energy.png';
import './App.css';

function App() {
  
  const [electricityReading, setElectricityReading] = useState('');
  const [GasCos, setGasCos] = useState(''); 
  const [gasReading, setGasReading] = useState('');
  // const [ElectricityCost, setElectricityCost] = useState('');
  let gasUnit = gasReading - 11000;
  let electUnit = electricityReading - 11000; 

function GasCost(units) {
  console.log("Hello");
  return units > 100 ? 
  setGasCos(parseFloat((((100 * 10) + (units - 100) * 20)/100)).toFixed(2)) : 
  setGasCos(parseFloat((units * 10)/100).toFixed(2));
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Shine Energy</h1>
          <h2>Welcome to our bill calculator</h2>
            <h3>Please fill in the forms:</h3>
            <p>Please enter your gas reading</p>
            <img src={gas_logo} className="Energy-logo" alt="logo" />
        <div>
          <input name="gasReading" placeholder='Gas Reading' onChange={e => setGasReading(e.target.value)} />
          <p>Gas unit used: {gasUnit < 0 ? 0 : gasUnit}</p>
          <button onClick={(gasUnit) => GasCost(gasUnit) }>Calculate Gas Cost</button>
          <p>The gas cost is: {GasCos}</p>
        </div>
        <br></br>
        <div>
          <p>Please enter your electricity reading</p>
          <img src={electricity_logo} className="Energy-logo" alt="logo" />
          <input name="elecReading" placeholder='Electricity Reading' onChange={e => setElectricityReading(e.target.value)} />
          <p>Electricity unit used: {electUnit < 0 ? 0 : electUnit}</p>
          <button onClick={(gasUnit) => GasCost(gasUnit) }>Calculate Electricity Cost</button>
          <p>The electricity cost is: {GasCos}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
