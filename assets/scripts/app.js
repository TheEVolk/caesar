const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const inputValue = document.getElementById('input-value');

const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function reverse(s){
  return s.split("").reverse().join("");
}

function shiftAlphabet(alp, shift) {
  if (shift < 0) {
    return reverse(shiftAlphabet(reverse(alp), -shift));
  }

  let shiftedAlphabet = ''; // новый алфавит
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < alp.length; i++) {
    const currentLetter = (alp[i + shift] === undefined)
      ? (alp[i + shift - alp.length])
      : (alp[i + shift]);

    shiftedAlphabet += currentLetter;
  }
  return shiftedAlphabet;
}

function run(str, count) {
  const shiftedAlphabet = shiftAlphabet(alphabet, count);
  const shiftedEnglishAlphabet = shiftAlphabet(englishAlphabet, count);
  return Array.from(str.toUpperCase()).reduce((acc, v) => (
    acc + (shiftedAlphabet[alphabet.indexOf(v)] || shiftedEnglishAlphabet[englishAlphabet.indexOf(v)] || ' ')
  ), '');
}

leftButton.onclick = () => {
  inputValue.value = run(inputValue.value, -1);
};

rightButton.onclick = () => {
  inputValue.value = run(inputValue.value, 1);
};

console.log('Вiйди из консоли, проказник!');