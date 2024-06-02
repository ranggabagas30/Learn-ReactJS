import './App.css';
import ComponentClick from './components/ComponentClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import GreetArrowFunction from './components/GreetArrowFunction';
import GreetClassComponent from './components/GreetClassComponent';
import GreetWithProps from './components/GreetWithProps';
import GreetWithProps2 from './components/GreetWithProps2';
import JsxHello from './components/JsxHello';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <MyButton />
      <EscapeBackToJs />
      <ReturnMultipleJSXTags />
      <Greet></Greet>
      <GreetArrowFunction></GreetArrowFunction>
      <GreetClassComponent />
      <JsxHello />
      <GreetWithProps name="Bruce" heroName="Batman">
        {/* put uncertain props between enclosing tags */}
        <p>This is children props</p> 
      </GreetWithProps>
      <GreetWithProps name="Clark" heroName="Superman">
        <button>Action</button>
      </GreetWithProps>
      <GreetWithProps name="Diana" heroName="Wonder Woman"/>
      <GreetWithProps2 name="Tegar" heroName="Kerasakti" />
      <Message />
      <Counter addValue={2}/>
      <FunctionClick />
      <ComponentClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

function EscapeBackToJs() {
  let user = "Rangga"
  return (
    <h1>
      {user}
    </h1>
  )
}

function ReturnMultipleJSXTags() {
  return (
    <>
      <h1>Ini adalah Judul</h1>
      <p>Hello.<br />How are you?</p>
    </>
  )
}

export default App;
