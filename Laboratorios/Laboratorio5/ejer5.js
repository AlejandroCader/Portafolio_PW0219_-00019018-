function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      console.log("Esta palabra no es palíndrome");
      return;
    }
  }
  console.log("Esta palabra sí palíndrome");
}
