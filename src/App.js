import React, {useState} from "react";


function App() {
  //here - 0 is the default state of count
  //with useState when we are updating the state we are rerendering

  //there are two ways to pass value to useState - one is by passing directly and other is by passing a function
  // const [count , setCount] = useState(0), when we use it via function we ensure that the function runs only once
  const [count, setCount] = useState(() => {
    console.log('useState triggered')
    //Default state is defined by declaring it along with return
    return 0
  })

  const increament = () => {
    setCount((prevCount)=>prevCount+1)
  }


  const decrement = () => {
    setCount((prevCount)=>prevCount-1)
  }


  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increament}>+</button>
    </div>
  );
}

export default App;
