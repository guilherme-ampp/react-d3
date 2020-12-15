import React, {useState} from 'react';
import Test from './test'

function App() {
  const [state, setState] = useState(0);

  const countClick = function(e) {
    console.log('clicked')
    setState(state + 1);
  }

  return (
    <div className="App">
        <Test person="Tony" onClick={countClick}/>
        <Test person="Mary" onClick={countClick}/>

        Person clicks: {state}
    </div>
  );
}

export default App;
