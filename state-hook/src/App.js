import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervelClassCounter from './components/IntervelClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
     {/*  <HookCounterThree /> */}
    {/*  <HookCounterFour /> */}
{/* <ClassCounterOne /> */}
    {/* <HookCounterOne /> */}
   {/*  <ClassMouse /> */}
   {/* <HookMouse /> */}
 {/*   <MouseContainer /> */}
 <IntervelClassCounter />
 <IntervalHookCounter />
    </div>
  );
}

export default App;
