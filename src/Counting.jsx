import { useState } from "react"
function Counting(){
      const [count,setCount] =useState(0);
      function increase(){
            setCount(count+1)
      }
      function decrease(){
            setCount(count-1)
      }
      function reset(){
            setCount(0)
      }
      return(
            <div>
                  <h1>Welcome to Counting Application</h1>
                  <button onClick={increase}>Inc</button>
                  <button onClick={decrease}>Dec</button>
                  <button onClick={reset}>Reset</button>
                  <p>Value:{count}</p>
            </div>
      )
}
export default Counting