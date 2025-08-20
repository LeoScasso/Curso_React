import React from 'react'
import { useState } from 'react'
import {Square} from './components/Square.jsx'
import {TURNS} from './constants.js'
import { checkWinnerFrom, checkDraw } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  

  //null: partida en curso, false: empate, X, O
  const [winner,setWinner] = useState(null)

  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // si ya se jugo anteriormente la casilla clickada o ya se detecto un ganador no hace nada
    if (board[index] || winner) return
    // sino se setea la X u O (dependiendo el turno) en la casilla
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // se pasa el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // se checkea si la jugada generó un ganador, si es asi se setea
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkDraw(newBoard)){
      setWinner(false)
    }
  }

  return (
  <main className='board'>
    <h1>Tic tac toe</h1>
    <button onClick={resetGame}>Reset Game</button>
    <section className='game'>
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })
      }
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
  </main>
  )
}

export default App  
