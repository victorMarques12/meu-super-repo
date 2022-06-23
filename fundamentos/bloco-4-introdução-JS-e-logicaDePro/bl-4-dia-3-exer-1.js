let word = 'trybe';
let invertP = "";

for (let index = 0; index < word.length; index += 1) {
  invertP += word[word.length - 1 - index];
}

console.log(invertP);