import { useDispatch, useSelector } from "react-redux"
import {decreaseCounter, increaseCounter} from "../Slices/Counter"; // Importing action creators from Counter slice
import { useContext } from "react";
import CounterContext from "../Context/Counter"


export default function Counter()
{
const counterValue= useSelector((state)=>state.Counter.counter_val);
const dispatch= useDispatch();
const {counter, setCounter}= useContext(CounterContext);
    return (
        <>
<div>
    <h2>Redux counter</h2>
    <hr/>
    <div className="d-flex align-items-center">
        <button className="btn btn-danger" onClick={()=>dispatch(decreaseCounter(counter-1))}>-1</button>
        <p className="mb-0 mx-4">{counterValue}</p>
        <button className="btn btn-success" onClick={()=>dispatch(increaseCounter())}>+1</button>

    </div>
</div>
<hr/>
<div>
    <h2>Context counter</h2>
    <hr/>
    <div className="d-flex align-items-center">
        <button className="btn btn-danger" onClick={()=>setCounter(counter-1)}>-1</button>
        <p className="mb-0 mx-4">{counter}</p>
        <button className="btn btn-success" onClick={()=>setCounter(counter+1)}>+1</button>

    </div>
</div>
</>
    )
}