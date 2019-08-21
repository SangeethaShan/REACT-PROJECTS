import React from 'react';
import './App.css';
/* import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import {Hello} from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/classClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InLine from './components/InLine';
import './appStyles.css';
import styles from'./appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp'; */
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HourCounter from './components/HourCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterOne from './components/CounterOne';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/UserContext'


function App() {
  return (
    <div className="App">
     {/*  <Greet name="Sangeetha" heroName="Wonder women">
       <p>This is a childern prop</p>
      </Greet>
      <Greet name="Shanmugam" heroName="Batman">
        <button> click Here </button>
      </Greet>
      <Greet name="Pradeepa" heroName="Super Women" />


      <Welcome name="Sangeetha" heroName="Wonder women" />
      <Welcome name="Shanmugam" heroName="Batman" />
      <Welcome name="Pradeepa" heroName="Super Women" />
       <Hello /> 

     <Message />
     <Counter />

     <FunctionClick />

     <ClassClick />

     <EventBind />
     <ParentComponent />

     <UserGreeting /> 

     <NameList />
     <Stylesheet primary={true} />
     <InLine />

     <h1 className="error">Error</h1>
     <h1 className={styles.success}>Success</h1>

     <Form />
     <LifeCycleA />
     <FragmentDemo />
     <Table />
     <ParentComp />
     <RefsDemo />
     <FocusInput />
     <FRParentInput />
     <PortalDemo />
     <ErrorBoundary>
     <Hero heroName="Batman" />
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName="Superman" />
     </ErrorBoundary>
     <ErrorBoundary>
       <Hero heroName="joker" />
     </ErrorBoundary>
     <ClickCounter name="Sangeetha" />
     <HourCounter />
     <ClickCounterTwo />
     <HoverCounterTwo />
     <User  render={(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'} />
     <CounterOne>
       {(count, incrementCount) => (
           <HoverCounterTwo count={count} incrementCount={incrementCount} />
         )}
     </CounterOne>
       <CounterOne>
         {(count, incrementCount) => (
           <ClickCounterTwo count={count} incrementCount={incrementCount} />
         )}
       </CounterOne> */}
       <UserProvider value="Vishwas"> 
        <ComponentC />
       </UserProvider>
    </div>
  );
}

export default App;
