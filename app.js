const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.btn');
const camel = document.querySelector('.camel');
const snake = document.querySelector('.snake');
const kebab = document.querySelector('.kebab');
const pascel = document.querySelector('.pascel');

btn.addEventListener('click', function () {
  camel.textContent = camelCase(inputField.value);
  snake.textContent = snakeCase(inputField.value);
  kebab.textContent = kebabCase(inputField.value);
  pascel.textContent = pascelCase(inputField.value);
});

//! Camel Case
function camelCase(str) {
  const splitedLower = str.toLowerCase().split(' ');
  const newArr = [];

  for (let i = 0; i < splitedLower.length; i++) {
    if (i === 0) {
      newArr.push(splitedLower[i]);
    } else {
      newArr.push(splitedLower[i][0].toUpperCase() + splitedLower[i].slice(1));
    }
  }

  return newArr.join('');
}

//! Snake Case
function snakeCase(str) {
  const splitedLower = str.toLowerCase().split(' ').join('_');

  return splitedLower;
}

//! Kebab Case
function kebabCase(str) {
  const splitedLower = str.toLowerCase().split(' ').join('-');
  return splitedLower;
}

//! Pascel Case
function pascelCase(str) {
  const splitedLower = str.toLowerCase().split(' ');
  const newArr = [];
  for (let word of splitedLower) {
    newArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return newArr.join('');
}
