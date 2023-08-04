import React, {useState} from "react";


function App() {
  //we have set the current state of the variable of count as 0
  // setCount is the function that is use to update the current state
  const [count, setCount]= useState(0)


  //function to update the state
  const decreamentCount = () => {
    setCount(count-1)
  }

  const increamentCount = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
      <button onClick={decreamentCount}>-</button>
      <span>{count}</span>
      <button onClick={increamentCount}>+</button>
    </div>
  );
}

export default App;
