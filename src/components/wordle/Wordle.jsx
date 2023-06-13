import React from "react";
import Box from "./Box";

const Wordle = () => {
  const [word, setWord] = React.useState(["", "", "", "", ""]);
  const [guesses, setGuesses] = React.useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [correct, setCorrect] = React.useState([
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
  ]);

  const [guessesIndex, setGuessesIndex] = React.useState(0);
  const [currentGuessIndex, setCurrentGuessIndex] = React.useState(0);

  const getWord = () => {
    const words = ["hello", "patty", "party", "flame", "blame", "frame"];
    const temp = words[Math.floor(Math.random() * words.length)];
    var chs = [];
    for (var i = 0; i < 5; i++) {
      chs[i] = temp.charAt(i);
    }
    console.log(chs);
    setWord(chs);
  };

  document.onkeydown = (e) => {
    console.log(e.key);
    var tempGuesses = guesses;
    var guess = guesses[guessesIndex];
    var tempCorrect = correct[guessesIndex];

    if (e.key === "Backspace") {
      if (currentGuessIndex <= 0) {
        return;
      }
      setCurrentGuessIndex(currentGuessIndex - 1);
      guess[currentGuessIndex - 1] = "";
      tempGuesses[guessesIndex] = guess;
      setGuesses(tempGuesses);
      return;
    }

    if (e.key === "Enter") {
      if (currentGuessIndex < 5) {
        return;
      }
      tempCorrect[guessesIndex] = compare(word, guesses[guessesIndex]);
      setGuessesIndex(guessesIndex + 1);
      setCurrentGuessIndex(0);
      setCorrect(tempCorrect);
      return;
    }

    if (
      (e.key >= "A" && e.key <= "Z" && e.key.length <= 1) ||
      (e.key >= "a" && e.key <= "z" && e.key.length <= 1)
    ) {
      if (currentGuessIndex >= 5) {
        return;
      }
      guess[currentGuessIndex] = e.key;
      setCurrentGuessIndex(currentGuessIndex + 1);
      tempGuesses[guessesIndex] = guess;
      setGuesses(tempGuesses);
      return;
    }
  };

  function compare(str1, str2) {
    var values = [-1, -1, -1, -1, -1];

    for (var i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) {
        values[i] = 1;
      }
    }
    return values;
  }

  React.useEffect(getWord, []);

  return (
    <div style={{ padding: "100px" }}>
      {guesses.map((guess, idx) => {
        return (
          <div key={idx} style={{ display: "flex" }}>
            {guess.map((ch, i) => {
              console.log(correct[idx][i]);
              return (
                <Box
                  className={
                    correct[idx][i] == 0
                      ? "wrong"
                      : correct[idx][i] == 1
                      ? "close"
                      : ""
                  }
                  character={ch}
                  key={i}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Wordle;
