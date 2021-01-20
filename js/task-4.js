// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let valueRef = document.querySelector('#value');
let plusRef = document.querySelector('[data-action="increment"]');
let minusRef = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

plusRef.addEventListener('click', increment);
minusRef.addEventListener('click', decrement);
