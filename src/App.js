import React, {createContext, useReducer} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decerement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}} >
      <div className="App">
        <div>Count - {count}</div>
        <ComponentA />
      </div>
    </CountContext.Provider>
  );
}

export default App;
