import './App.css';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons'
import { useState,  } from "react";
function App() {

const [screen, setScreen] = useState('');
const [oldCalc, setOldCalc] = useState("");

  const updateText = (e) => {
    setScreen(previous => previous + e.target.innerHTML)
    
  }

  const updateSym = (e) => {
    if(typeof screen != 'string') {
      console.log(typeof screen)
      setScreen(screen.toString())
    }
    if(Number.isInteger(parseInt(screen[screen.length-1])) ||typeof screen == 'number' ) {
      setScreen(previous => previous + e.target.value)
    }
    
    
  }

  const clear = () => {
    setScreen([""])
  }

  const symbol = () => {
    if(screen[0] != "-") {
      setScreen(previous => "-" + previous)
    }else {
      setScreen(previous=> previous.slice(1))
    }
  }

  const result = ()=> {
    let answer = screen
    if(typeof answer == 'string'){
      setOldCalc(previous=> previous + screen)
      answer = eval(answer)
    }else {
      screen = answer.toString()
    }
   
    console.log(screen)
    console.log(typeof answer)
    setScreen(answer)
  }

  return (
    <div className="App">
      <Screen result={23} screenVal={screen} oldCalc={oldCalc}/>
      <Buttons updateText={updateText} updateSym={updateSym}clear={clear} result={result} symbol={symbol}/>
    </div>
  );
}

export default App;
