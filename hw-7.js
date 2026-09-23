// Находим кнопку по id
const button1 = document.getElementById('exercise-1');

// Добавляем обработчик события
button1.addEventListener('click', function() {
    const Numbers = [1, 5, 4, 10, 0, 3];

    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] === 10) break;
        console.log(Numbers[i]);
    }

}
);

const button2 = document.getElementById('exercise-2');

button2.addEventListener('click', function() {

    const Numbers1 = [1, 5, 4, 10, 0, 3];  
  
    if (Numbers1.includes(4)) {
    console.log(`Индекс цифры 4: ${Numbers1.indexOf(4)}`);
    } else {
    console.log("Цифра 4 не найдена");
    }  
});

const button3 = document.getElementById('exercise-3');

button3.addEventListener('click', function() {
    
    const Numbers2 = [1, 3, 5, 10, 20];

    const separateSdpaces = Numbers2.join(' ')

    console.log(separateSdpaces);
});

const button4 = document.getElementById('exercise-4');

button4.addEventListener('click', function() {
   
//    const transportArray = [
//     ['Поезда', 'скоростной', 'грузовой'], 
//     ['Автомобиль', 'легковой', 'грузовой'], 
//     ['Самолет', 'пассажирский', 'транспортный']
//     ];

//     for (let item of transportArray) {
//     for (let i = 0; i < item.length; i++) {
//       if (i === 0) {
//          console.log(`Тип транспорта ${item[i]}`);
//       } else {
//          console.log(`${item[0]}: ${item[i]}`);
//       }
//    }
// }

const arr = [];

for (let i = 0; i < 3; i++) {
    const inArr = [];

    for (let j = 0; j < 3; j++) {
        inArr.push(1);
        
    }
    arr.push(inArr);
}

console.log(arr);

});    

const button5 = document.getElementById('exercise-5');

button5.addEventListener('click', function() {
    
    const addArr1 = [1, 1, 1];

    addArr1.push(2, 2, 2);

    console.log(addArr1);
});


const button6 = document.getElementById('exercise-6');

button6.addEventListener('click', function() {

    const arr2 = [9, 8, 7, 'a', 6, 5];

    console.log(arr2);

    arr2.sort();

    console.log(arr2);

    const indexA = arr2.indexOf('a');

    if (indexA !== -1) {
        arr2.splice(indexA, 1);
}

    console.log(arr2);

});
      

const button7 = document.getElementById('exercise-7');

button7.addEventListener('click', function() {

   const arr3 = [9, 8, 7, 6, 5];

   let searchNumber = Number(prompt('Введите цифру от 0 до 9:'));

   if (arr3.includes(searchNumber)) {
        console.log(`Угадал! Цифра ${searchNumber} есть в массиве.`);
   } else {
        console.log(`Не угадал! Цифры ${searchNumber} нет в массиве.`);
   }

});


const button8 = document.getElementById('exercise-8');
button8.addEventListener('click', function() {

    let text = 'abcdef';

    const textArr = text.split('')

    console.log(textArr);

    console.log(textArr.reverse());

});


const button9 = document.getElementById('exercise-9');
button9.addEventListener('click', function() {

    const arr4 = [
       [1, 2, 3],
       [4, 5, 6] 
    ];

    const arr5 = arr4.flat();

    console.log(arr5);

});


const button10 = document.getElementById('exercise-10');
button10.addEventListener('click', function() {

    const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    console.log(arr6);

    for (let i = 0; i < arr6.length - 1; i++) {
        console.log(arr6[i] + arr6[i+1]);
        
    }



});


const button11 = document.getElementById('exercise-11');
button11.addEventListener('click', function() {

    const input = prompt('Введите числа через запятую:');
    
    const arr = input.split(',').map(arr => arr * arr);

    console.log(arr);

});


const button12 = document.getElementById('exercise-12');
button12.addEventListener('click', function() {

    const inputWord = prompt('Введите слова через запятую:');
    
    const arrWord = inputWord.split(',').map(arrWord => arrWord.trim().length);

    console.log(inputWord);
    console.log(arrWord);

});


const button13 = document.getElementById('exercise-13');
button13.addEventListener('click', function() {

    const input = prompt('Введите числа через запятую:');
    
    // const arr = input.split(',').map(arr => arr * (- 1));

    const arr = input.split(',').map(Number).filter(input => input < 0);

    console.log(arr);

});


const button14 = document.getElementById('exercise-14');
button14.addEventListener('click', function() {

    const rand = [];
    
    for (let i = 0; i < 10; i++) {
        rand.push(Number((Math.random() * 10).toFixed(0)));
        
    }

    console.log(rand);

    const even = rand.filter(rand => rand % 2 === 0);

    console.log(even);

});


const button15 = document.getElementById('exercise-15');
button15.addEventListener('click', function() {

    const rand = [];
    
    for (let i = 0; i < 6; i++) {
        rand.push(Number((Math.random() * 10).toFixed(0)));
        
    }

    console.log(rand);

    const even = rand.reduce((acc, cur) => acc + cur, 0) / rand.length;

    console.log(even.toFixed(2));

});
