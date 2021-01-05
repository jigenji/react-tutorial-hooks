import React, {createContext} from 'react';
import './App.css';
import ComponentD from './components/ComponentD';

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vishwas'}>
          <ChannelContext.Provider value={'Vishwas'}>
            <ComponentD />    
          </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
