import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [resourceType , setResourceType]=useState('posts')



  //the array at the end ensures that when we make the data in that particular data only then the useEffect change takes place and not on every single render
  useEffect(() => {
    console.log('render')
    //This ensures that useEffect only runs when there is change in resoureceType
  }, [resourceType])


  return (
    <div className="App">
      <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
        <button onClick={()=>setResourceType('users')}>Users</button>
        <button onClick={()=> setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
