import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
// import { decNumber, incNumber } from './action';
import { Todos } from './components/Todos';

const App = () => {
  // const counterState = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <div className="parent">Counter</div>
      <div className="todo">
        <button onClick={() => {dispatch(decNumber())}}>-</button>
        <div>{counterState}</div>
        <button onClick={() => {dispatch(incNumber(2))}}>+</button>
      </div>
      <br></br> */}
      <div className="parent">TODO LIST</div>
      <div className="todo">
        <Todos />
      </div>
    </>
  )
}

export default App