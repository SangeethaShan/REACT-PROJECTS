import React from 'react';
import './App.css';
import Contacts from './components/CreateClass'
import ReactForms from './components/From'
import FormDuplicate from './components/FormDuplicate'
import TestForm from './components/TestForm';

function App() {
  const add = (a, b) => a + b;
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          {/* <Contacts /> */}
          {/*  <ReactForms /> */}
          {/*  <FormDuplicate /> */}
          <TestForm
           /*  myObj={{
              a: 10,
              b: 20
            }}
            myArray={[1, 20, 3]}
            myFun={add} */
          />
        </div>
      </div>

    </div>
  );
}

export default App;
