/*Домашнее задание 8. (после 19 урока)

Решить следующие задачи:

1. Написать цикл, который создает множество параграфов с каждым 
   десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
   Добавить созданные параграфы в div с классом numbers. */

 /*   

const numbersDiv = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {

  const paragraph = document.createElement("p");
  

  paragraph.textContent = i;
  
  
  numbersDiv.appendChild(paragraph);
}
*/

/*
2. Написать цикл, который проходится по массиву строк, для каждой строки 
   создает параграф и добавляет его в div с классом strings_container. 
   Строки взять произвольные. 
const stringsArray = ["Liuba", "Roman", "Christina", "Igor", "Gabi"];
const stringsContainer = document.querySelector(".strings_container");

for (let i = 0; i < stringsArray.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = stringsArray[i];
  stringsContainer.appendChild(paragraph);
} */
/*
3. Написать цикл, который проходится по массиву с объектами - у объектов 
   свойства first_name, last_name и  age (данные взять произвольные) - 
   и создает карточки только для совершеннолетних пользователей. Карточка 
   должна содержать информацию об имени, фамилии и возрасте пользователя. 
   Добавить все карточки в div с классом users_container. 

   const usersData = [
    { first_name: "Roman", last_name: "Igor", age: 35 },
    { first_name: "Roman", last_name: "Liuba", age: 37 },
    { first_name: "Roman", last_name: "Roman", age: 19 },
    { first_name: "Roman", last_name: "Сhristina", age: 20 }
  ];
  
  const usersContainer = document.querySelector(".users_container");
  
  for (const user of usersData) {
    if (user.age >= 18) {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      
      const name = document.createElement("p");
      name.textContent = `Имя: ${user.first_name} ${user.last_name}`;
      
      const age = document.createElement("p");
      age.textContent = `Возраст: ${user.age}`;
      
      userCard.appendChild(name);
      userCard.appendChild(age);
      usersContainer.appendChild(userCard);
    }
  }
  */