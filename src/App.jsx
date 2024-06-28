import { useState } from 'react';
import { Board } from './components/board';
import { Header } from './components/header';
import './App.css'

function App() {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [hasWinner, setHasWinner] = useState(false);


  return (
    <>
      <Header nextPlayer={nextPlayer} hasWinner={hasWinner} />
      <Board nextPlayer={nextPlayer} setNextPlayer={setNextPlayer} />


    </>
  )
}

export default App
