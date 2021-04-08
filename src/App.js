import logo from './logo.svg';
import './App.css';
import Hello from "./mycomponent/Hello";
import Welcome from "./mycomponent/Welcome";
import Boot from "./mycomponent/Boot";
import Changestate from "./mycomponent/Changestate";
import Condition1 from "./mycomponent/Condition1";
import Refresh from "./mycomponent/Refresh";
import Render from "./mycomponent/Render";
import Validation from "./mycomponent/Validation";
import Jsonlist from "./mycomponent/Jsonlist";

function App() {
  return (
    <div className="App">
      <Hello name="akib"></Hello>
        <Boot></Boot>
        <Changestate></Changestate>
      <Welcome name="Asif"></Welcome>
    <Condition1></Condition1>
    <Refresh></Refresh>
    <Render></Render>
        <Validation></Validation>
        <Jsonlist></Jsonlist>
    </div>
  );
}

export default App;
