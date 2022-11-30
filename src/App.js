import './App.css';
import { useState } from 'react';

function App() {
  const [Find_color1, setColor1] = useState('');
  const [Find_color2, setColor2] = useState('');
  const [Find_color3, setColor3] = useState('');
  return (

    
    <div>
      <div className="div">
        <header>
          <h1 className='h'>
            Shafiul Alam
          </h1>
        </header>
      </div>
      <div className="main">
      <div className="input1">
        <div className="App">
          <textarea style={{ backgroundColor: Find_color1, height: '30vh' }}></textarea>
        </div>
        <div className="App sp">
          <input  type="text" value={Find_color1} onChange={(s) => setColor1(s.target.value)}/>
        </div>
      </div>
      <div className="input2">
        <div className="App">
          <textarea style={{ backgroundColor: Find_color2, height: '30vh' }}></textarea>
        </div>
        <div className="App sp">
          <input type="text" value={Find_color2} onChange={(s) => setColor2(s.target.value)}/>
        </div>
      </div>
      <div className="input3">
        <div className="App">
          <textarea style={{ backgroundColor: Find_color3, height: '30vh' }}></textarea>
        </div>
        <div className="App sp">
          <input  type="text" value={Find_color3} onChange={(s) => setColor3(s.target.value)}/>
        </div>
      </div>
      </div>
      
    </div>



  );
}

export default App;
