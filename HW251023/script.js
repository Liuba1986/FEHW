/*Домашнее задание 7. (после 17 урока)

Решить следующие задачи:

1.Напишите функцию, которая принимает два числовых аргумента и 
 возвращает наименьшее из них.
 function getMin(a, b) {
  if(a < b) {
    return a
  }
  if(a > b) {
    return b
  }
  return "Они равны"
}
 console.log(getMin(9, 4))
 console.log(getMin(5, 9))
 console.log(getMin(9, 9)) */
 /*
2. Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
   function logEvenNums(a, b) {
    if (a == b) {
      console.log("числа равны")
      return
    }
    let min = a
    let max = b
    if(a > b) {
      min = b
      max = a
    }
  
    for(let i = max; i >= min; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
   logEvenNums(10, 20)
   logEvenNums(33, 25)
  */
 /*
3. Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
   function power(a, b = 2) {
     return a ** b
   }
  
   console.log(power(3));
   console.log(power(3, 3)); */
  /*
4. Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
  function sumOfN(n) {
    if(n < 1) {
      return null
    }
    let sum = 0
  
    for(let i = 1; i <= n; i++) {
      sum += i
    }
  
    return sum
  }
  
   console.log(sumOfN(10));
   console.log(sumOfN(-3)); */
  /*
5. Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
  function logSumOfEvensAndOdds(n, m) {
    let sumOfOdds = 0
    let sumOfEvens = 0
  
    for(let i = n; i <= m; i++) {
      if(i % 2 === 0) {
        sumOfEvens += i
      } else {
        sumOfOdds += i
      }
    }
  
    console.log(sumOfEvens);
    console.log(sumOfOdds);
  }
  
  logSumOfEvensAndOdds(5, 95) */
  /*
6. Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
   
   Пример: [ 'one', 'two', 'three' ] => 'three'
  
  function getLongerStr(arr) {
    if(arr.length === 0) {
      return null
    }
    let longerStr = arr[0] // three
  
    for(let i = 1; i < arr.length; i++) {
      if(arr[i].length > longerStr.length) { // 5 > 5
        longerStr = arr[i]
      }
    }
  
    return longerStr
  }
  
  const arr = [ 'один', 'два', 'три', 'четыре' ]
  console.log(getLongerStr(arr)); */
