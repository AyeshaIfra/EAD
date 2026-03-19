import {useState} from 'react' 
function Counter () {
    const [count,setCount]=useState(0)
    function Increment() {
        setCount(count+1)
    }
    return (
        <div>
        <h1>Counter Component</h1>
        <p>Count:{count}</p>
        <button onClick={Increment}>value inc by 1</button>
        <button onClick={()=>{setCount(count-1)}}>value decrement by 1</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
        </div>
    )
}
export default Counter