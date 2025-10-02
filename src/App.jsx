import { useState } from 'react';
import './App.css';

function App() {
  // Estado para a entrada e o resultado
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className="calculator">
      <div className="display">
        {/* Conecte os estados à UI */}
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {/* Nossos botões virão aqui */}
      </div>
    </div>
  );
}

export default App;

{/* TODO: <a name="passo-6"></a>Passo 6: Dando Vida aos Botões (Event Handlers)*/}
