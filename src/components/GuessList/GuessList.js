import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function FormatCheck(guess, answer) {
  rows = []
  guessResults = checkGuess(guess, answer);
  guessResults.forEach(function({letter, status}) {
    console.log(status);
    if (status === 'correct') { // correct
      rows.push(<span className="cell correct" key={Math.random()}>{letter}</span>)
    } else if (status === 'misplaced') { // misplaced
      rows.push(<span className="cell misplaced" key={Math.random()}>{letter}</span>)
    } else { // incorrect
      rows.push(<span className="cell incorrect" key={Math.random()}>{letter}</span>)
    }
  });
  return rows;
}

function GuessList({guessList, numGuesses, answer}) {
  let grid = [];
  for(let i = numGuesses; i < NUM_OF_GUESSES_ALLOWED; i++) { // fill in the rest of the rows with cells
    grid[i] = [];
    for(let j = 0; j < 5; j++) {
      grid[i][j] = <span key={Math.random()} className="cell"></span>
    }
  }

  return(
    <div className="guess-results">
      {guessList.map(({ id, guess }) => (
        <p className="guess" key={"x"+id}>{FormatCheck(guess, answer)}
        </p>
      ))}
      {grid.map((item) => (
        <p className="guess" key={Math.random()}>{item}</p>
      ))}
    </div>);
}

export default GuessList;