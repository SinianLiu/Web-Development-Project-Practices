import { useState } from 'react';
import countCommonLetters from './word';

function Game({ setMsg }) {
  const [word, setWord] = useState('');

  function checkWord(word) {
    if (word.length !== 5) {
      const msg = `'${word}' was not a valid word`;
      setMsg(msg);
      setWord('');
      return;
    }

    const commonLetters = countCommonLetters(word);
    if (commonLetters !== 5) {
      const msg = `'${word}' had ${commonLetters} letters in common.`;
      setMsg(msg);
      setWord('');
      return;
    }

    const msg = `'${word}' is the secret word!`;
    setMsg(msg);
    setWord('');
  }

  return (
    <>
      <form>
        <label>
          <span>Input Your Guess: </span>
          <input
            value={word}
            placeholder="Please input 5 letter"
            onInput={(e) => setWord(e.target.value)}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            checkWord(word);
          }}>
          Guess
        </button>
      </form>
    </>
  );
}

export default Game;

