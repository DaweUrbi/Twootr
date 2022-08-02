import {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Twoots from "./components/Twoots";

function App() {
  const [parentName, setParentName] = useState('David');
  const [parentSurname, setParentSurname] = useState('Urban');
  const [parentNick, setParentNick] = useState('david-urban');

  return (
    <div className="App">
      <Navbar></Navbar>
      <Header name={parentName}
              updateName={setParentName}
              surname={parentSurname}
              updateSurname={setParentSurname}
              nick={parentNick}
              updateNick={setParentNick}
      ></Header>
      < Twoots />
    </div>
  );
}

export default App;