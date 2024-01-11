
import './App.css'
import Display from './components/display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react';

function App() {
  const [calval,setcalval] = useState("45")

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };
  return (
    <div className="calculator">
      <Display displayValue={calval} />
      <ButtonContainer onButtonClick={onButtonClick}/>
      
      
    </div>
  )
}

export default App
