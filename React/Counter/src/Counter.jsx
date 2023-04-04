import { useState } from "react";

// using useState hook 

function Counter() {

  // count is a state variable that will hold the counter value
  // Initialize the state with a starting value of 0
  
  const [count, setCount] = useState(0)  
  


  return (
    <div align="center">

      <h1>C O U N T E R</h1>

      <br />

      <h1>{count}</h1>

      <br /><br />

      {/* updating state variable onClick */}

      <button onClick={() => setCount(count - 1)}>decrease</button>

      &nbsp; &nbsp; &nbsp;

      <button onClick={() => setCount(count + 1)}>increase</button>
    
    </div>
  )

  // by calling setCount updating the state of the count variable.
  // setCount take the value of updated state variable  (count + 1)

}

export default Counter;
