
import { useState } from "react"
export default function Board(){  //The export function makes your function available outside the file
  const [squares,setSquares]=useState(Array(9).fill(null)); //Creates an array with nine elements and sets each of them to null
  const [xIsNext,setXIsNext]=useState(true);
  function handleClick(i){
    if (squares[i]){
      return; //checks if the squares have the default null value
    }
    const nextSquares=squares.slice();
    if (xIsNext){
      nextSquares[i]="X"
    }
    else{
      nextSquares[i]="0";
    }
    setXIsNext(!xIsNext)
    setSquares(nextSquares);
    //JS supports closures, that is stuff inside a function can still access variables defined outside the function
    //()=> is the syntax of an arrow function, code after the > runs
  }
  return <>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
    <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
  </div>
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
  </div>
   </>
}

function Square({value,onSquareClick}){  //Components must always start with a capital letter
  return <>
    <button className="square" onClick={onSquareClick}>{value}</button>
  </>
}