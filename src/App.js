import React, {useState} from "react";


function App() {
  //here - 0 is the default state of count
  //with useState when we are updating the state we are rerendering

  //there are two ways to pass value to useState - one is by passing directly and other is by passing a function
  // const [count , setCount] = useState(0), when we use it via function we ensure that the function runs only once , this increases the efficiency as useState function is not triggered everytime

 
  // const [count, setCount] = useState(() => {
  //   console.log('useState triggered')
  //   //Default state is defined by declaring it along with return
  //   return 0
  // })


   //useState behaves very differently when we are dealing with objects
  const [state, setState] = useState({count:0, color:"red"})
  const count = state.count;
  const color = state.color



  const increament = () => {
    setState((prevState) => {
      return { ...prevState, count : prevState.count + 1 }
    })
  }


  const decrement = () => {
    setState((prevState) => {
      return {...prevState ,count : prevState.count-1}
    })
  }

  const changeColor = () => {
    setState((prevState) => {
      return {...prevState ,color:"blue" }
    })
  }


  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{count}::{color}</span>
      
      <button onClick={increament}>+</button>
      <div>
        <button onClick={changeColor}>ChangeColor</button>
      </div>
    </div>
  );
}

export default App;
