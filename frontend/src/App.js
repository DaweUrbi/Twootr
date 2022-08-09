import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Twoots from "./components/Twoots";
import Twoot from './components/Twoot.js';

function App() {

  const [twoots, setTwoots] = useState([])
  const DATA_URL = "/twoots";

  const getTwoots = () => {
    axios.get(DATA_URL)
      .then(response => {
        setTwoots(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    getTwoots();
  }, [])


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
      <Twoot
        author={parentName + " " + parentSurname}
        authorSlug={parentNick}
        twoots={twoots}
        setTwoots={setTwoots}
      />
      < Twoots
        twoots={twoots}
      />
    </div>
  );
}

export default App;