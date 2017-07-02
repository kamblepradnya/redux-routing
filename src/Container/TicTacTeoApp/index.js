import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import s from './styles';
import Board from './components/Board';
import Result from './components/Result';
//import { resetGame } from '../actions/ResetBoard';
import { makeYourMove } from './actions';


const TicTacTeo = props =>
  <div>
    <h1>Tic Tac Teo App</h1>
    <Result
      turn={props.tictacteo.turn}
      won={props.tictacteo.won}
      draw={props.tictacteo.draw}
    />
    <Board board={props.tictacteo.board} onSquareClick={props.markSquare} />
  </div>;




const selector = state => ({ tictacteo: state.tictacteo });

export default connect(selector, { makeYourMove })(TicTacTeo);


