import React, { useState, useMemo } from "react";



const App = () => {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //we add the dependency for useMemo, this slow function is triggered only when the number value changes
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  },[number]);
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color:dark?'white':'black'
  }
  
  return ( 
    <div className="App">
      <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
      <button onClick={() => {
        //This will reverse the value to the one it initialy was
        setDark(prevDark => !prevDark)
      }}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
   );
}

function slowFunction(number) {
  console.log('calling slow function')
  for (let i = 0; i < 1000000000000000; i++){
    return number*2
  }
}
 
export default App;