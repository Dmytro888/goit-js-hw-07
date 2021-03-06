// В HTML есть пустой список ul#ingredients.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const listRef = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  listRef.appendChild(itemRef);
});
