import Chai from "./chai"
import { useState } from 'react'
import Practice from "./practice"

function App() {
  let [counter, setCounter] = useState(15)

  //let counter = 7;
  const addValue = () => {
    console.log("value added", counter);
    //setCounter (counter + 1);
    if(counter<=20) {
      setCounter (counter + 1);
    }
    else
    window.alert("value reached");
  }

  const removeValue = () => {
    console.log("value removed", counter);
    if(counter>0) {
      setCounter (counter - 1);
    }
    else
    window.alert("value reached");
  }

  return (
    <>
    <Chai/>
    <Practice name ="suparna"/>
    <h1>applying hook</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}
    >add value </button>
    <br/>
    <button
    onClick={removeValue}
    >remove value</button>
    </>
  )
}

export default App
