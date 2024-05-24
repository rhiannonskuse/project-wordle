import React from 'react';
import WinBanner from '../WinBanner/WinBanner';

function GuessInput({ addGuess, numGuesses, setNumGuesses, gameOver}) {
  const [guess, setGuess] = React.useState('');
  const [gameIsOver, setGameIsOver] = React.useState(false);

  return <>
    <form className="guess-input-wrapper" 
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        addGuess(guess)
        setGuess('');
        setNumGuesses(numGuesses + 1);
        setGameIsOver(gameOver(guess, numGuesses + 1));
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Za-z]{5}"
        value={guess}
        disabled={gameIsOver}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
    {gameIsOver ? gameOver(guess, numGuesses + 1) : ""}
</>;
}

export default GuessInput;
