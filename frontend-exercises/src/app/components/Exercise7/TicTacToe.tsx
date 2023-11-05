import React, { useState } from 'react'
import ExerciseCard from '../ExerciseCard'
import styles from './TicTacToe.module.css'

interface SquareProps {
  value?:string
}

const Square :React.FC<SquareProps> = ({value}) => {
  return (
  <button type= 'button' className={styles.square}>{value}</button>
  )
}

const GameBoard = () => {
  const [board, setBoard] = useState<Array<string>>(Array(9).fill('')); 
  const [playerXSquares, setPlayerXSquares] = useState<string>('');
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");

  const handleClick = (clickedSquare:number) => {
    //const newBoard = board.slice();
    const playerX = currentPlayer === "X";
    if (playerX)  {
      setPlayerXSquares(currentSquares => currentSquares += clickedSquare + "");
    }
    //newBoard[clickedSquare] = currentPlayer;

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  } 

  return (
    <>
      <div className= {styles.row}>
        <Square value = {board[0]}/>
        <Square value = {board[1]}/>
        <Square value = {board[2]}/>
      </div>
      <div className= {styles.row}>
        <Square value = {board[3]}/>
        <Square value = {board[4]}/>
        <Square value = {board[5]}/>
      </div>
      <div className= {styles.row}>
        <Square value = {board[6]}/>
        <Square value = {board[7]}/>
        <Square value = {board[8]}/>
      </div>
    </>
  )
}



type Props = {}
const TicTacToe = (props: Props) => {
  return (
    <ExerciseCard title = 'Exercise 7: Tic Tac Toe'>
      <GameBoard />
    </ExerciseCard>
  )
}

export default TicTacToe