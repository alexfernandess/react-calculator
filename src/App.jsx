import React, { useState } from 'react';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    if (!input) return;
    try {
      const calculatedResult = new Function('return ' + input)();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <Button className="clear" onClick={handleClear}>C</Button>
        <Button className="operator" onClick={() => handleClick(' +/- ')}>+/-</Button>
        <Button className="operator" onClick={() => handleClick('%')}>%</Button>
        <Button className="operator" onClick={() => handleClick('/')}>/</Button>

        <Button onClick={() => handleClick('7')}>7</Button>
        <Button onClick={() => handleClick('8')}>8</Button>
        <Button onClick={() => handleClick('9')}>9</Button>
        <Button className="operator" onClick={() => handleClick('*')}>*</Button>

        <Button onClick={() => handleClick('4')}>4</Button>
        <Button onClick={() => handleClick('5')}>5</Button>
        <Button onClick={() => handleClick('6')}>6</Button>
        <Button className="operator" onClick={() => handleClick('-')}>-</Button>

        <Button onClick={() => handleClick('1')}>1</Button>
        <Button onClick={() => handleClick('2')}>2</Button>
        <Button onClick={() => handleClick('3')}>3</Button>
        <Button className="operator" onClick={() => handleClick('+')}>+</Button>

        <Button className="zero" onClick={() => handleClick('0')}>0</Button>
        <Button onClick={() => handleClick('.')}>.</Button>
        <Button className="equal" onClick={handleCalculate}>=</Button>
      </div>
    </div>
  );
}

{/* CORREÇÃO: Esta linha é essencial e deve estar no final do seu arquivo App.jsx*/}

export default App;