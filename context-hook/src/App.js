// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
import ComA from './Components/ComA';

// create Context

export const FirstName = createContext();
export const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Faizan"}>
         <LastName.Provider value={"Ahmad"}>
          <ComA/>
         </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
