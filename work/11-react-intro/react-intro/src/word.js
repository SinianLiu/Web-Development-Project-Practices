export default function countCommonLetters (word) {
  let secretWord = "REACT".split("");
  const inputword = word.toUpperCase().split("");
  let count = 0;

  for (let i = 0; i < 5; i++) {

    const index = secretWord.indexOf(inputword[i]);
    if (index != -1) {
      count++;
      secretWord[index] = "*";
    }
  }

  return count;
}


