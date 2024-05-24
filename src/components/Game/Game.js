import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import FailBanner from '../FailBanner/FailBanner';
import WinBanner from '../WinBanner/WinBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [numGuesses, setNumGuesses] = React.useState(0);

  function addGuess(guess) {
    const guessObject = {
      guess,
      id: Math.random(),
    };
    setGuessList([...guessList, guessObject]);
  }

  function gameOver(guess, numGuess) {
    if (guess === answer) {
      return (<WinBanner numGuesses={numGuess}></WinBanner>);
    } else if (numGuess >= NUM_OF_GUESSES_ALLOWED) {
      return (<FailBanner answer={answer}></FailBanner>);
    }
    return false;
  }

  return (
  <>
    <GuessList guessList={guessList} numGuesses={numGuesses} answer={answer}></GuessList>
    <GuessInput addGuess={addGuess} numGuesses={numGuesses} setNumGuesses={setNumGuesses} gameOver={gameOver}></GuessInput>
  </>);
}

export default Game;
