import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Select from 'react-select';



function App() {


  var date = new Date().toString();
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [value, onChange] = useState(new Date());
  const [clients, onChangeC] = useState();
  

  useEffect(() => {    // Update the document title using the browser API
        //document.title = `${value.toString()}`;
        //console.log(axios.isCancel('something'));
        axios.get(`https://xxx.net/api/api.php?request=get_active_clients_ids`)
        .then(res => {
          onChangeC(res.data);
          //this.setState({ persons });
        })
      }, []);

      //console.log(clients);
      //date = value.toString();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
         {/* <pre>{JSON.stringify(clients, null, 2)}</pre>  */}
        <Select options={clients}  />
        <p>
          Edit on {date} <code>src/App.js</code> and save to reload.
        </p>
        <Calendar onChange={onChange} value={value} allowPartialRange={true} selectRange={true}  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
