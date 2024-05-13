import { createContext } from "react"

const CounterContext = createContext({
    counter: 0,
    setCounter: () => {}
  });
  
export default CounterContext;