import React from 'react';
import './App.css';
import QuizScreen from './QuizScreen';
import StartScreen from './StartScreen';

function App() {
  let [gameStarted, setGameStarted] = React.useState(false);

  return (
    <div className="App">
      {gameStarted ? <QuizScreen /> : <StartScreen handleClick={()=>{setGameStarted(true)}}/>}
    </div>
  );
}

export default App;
