import React, { useState } from 'react';

function Counter() {
   // Використовуємо хук useState для збереження масиву елементів
   const [count, setCount] = useState(0);
   const [elements, setElements] = useState([]); // Масив для зберігання нових елементів

   // Функція для збільшення лічильника
   const increment = () => {
      setCount(count + 1); // Оновлюємо стан лічильника

      // Додаємо новий тег <p> до масиву елементів
      setElements([...elements, <p key={count}>Новий елемент {count + 1}</p>]);
   };

   return (
      <div>
         <h3>Лічильник: {count}</h3> {/* Виводимо значення лічильника */}
         <button onClick={increment}>Додати елемент</button>{' '}
         {/* Виводимо список елементів */}
         <div>{elements}</div>
      </div>
   );
}

export default Counter;
