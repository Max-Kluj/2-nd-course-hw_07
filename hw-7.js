// Находим кнопку по id
const button1 = document.getElementById('exercise-1');

// Добавляем обработчик события
button1.addEventListener('click', function() {
    const textUser = prompt('Введите текст:');

    alert(`Вы ввели текст ${textUser}. \n
        Текст в вверхнем регистре ${textUser.toUpperCase()}`)

}
);

const button2 = document.getElementById('exercise-2');

button2.addEventListener('click', function() {

    function arrayAndString(arr, string) {
        
        const newArr = [];
        const superfluousWords = [];

        for (const word of arr) {
            if (word.toLowerCase().startsWith(string.toLowerCase())){
                newArr.push(word);
            } else {
                superfluousWords.push(word);
            }
        }

        return {newArr, superfluousWords};
        
    }

    const {newArr, superfluousWords} = arrayAndString(["Красивый", "Кружка", "Краска", "Автомобиль"], "кр");
    
    console.log(newArr);
    console.log(superfluousWords);
    
});

const button3 = document.getElementById('exercise-3');

button3.addEventListener('click', function() {
    
    const numb1 = 32.58884;
    console.log(`Число: ${numb1}`);


    let smallerInt = Math.floor(numb1);
    console.log(`Меньшее целое: ${smallerInt}`);
    
    let largerInt = Math.ceil(numb1);
    console.log(`Большее целое: ${largerInt}`);

    let mathRounding = Math.round(numb1);
    console.log(`Математическое целое: ${mathRounding}`);
});


const button4 = document.getElementById('exercise-4');

button4.addEventListener('click', function() {
   
    const numbArr1 = [52, 53, 49, 77, 21, 32];
    console.log(`Массив: ${numbArr1}`);

    let numbMax = Math.max(...numbArr1);
    console.log(`Максимальное значение в массиве: ${numbMax}`);

    let numbMin = Math.min(...numbArr1);
    console.log(`Минимальное значение в массиве: ${numbMin}`);

});    


const button5 = document.getElementById('exercise-5');

button5.addEventListener('click', function() {
    
    function printRandomNumber() {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
}

    printRandomNumber();
});


const button6 = document.getElementById('exercise-6');

button6.addEventListener('click', function() {

    function createArr(num) {
        let lengthArr = Math.floor(num / 2);

        const arr = [];

        for (let i = 0; i < lengthArr; i++) {
            
            const randomNum = Math.floor(Math.random() * (num + 1));
            
            arr.push(randomNum);
            
        }

        return arr;
    }

    console.log(createArr(10));

});
      

const button7 = document.getElementById('exercise-7');

button7.addEventListener('click', function() {

    function numberFromTheRange(a, b) {
        
        const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
            
        return randomNum;

    }

    let a = Number(prompt(`Введите первое число`));
    let b = Number(prompt(`Введите второе число. Второе число должно быть больше первого`));

    console.log(numberFromTheRange(a, b));

});


const button8 = document.getElementById('exercise-8');
button8.addEventListener('click', function() {

    console.log(new Date().toLocaleDateString('ru-RU'));

});


const button9 = document.getElementById('exercise-9');
button9.addEventListener('click', function() {

    const currentDate = new Date();

    const day73 = 73 * 24 * 60 * 60 * 1000;

    const milliseconds = (+currentDate);

    const newDate = new Date(day73 + milliseconds).toLocaleDateString('ru-RU');

    console.log(newDate);

});


const button10 = document.getElementById('exercise-10');
button10.addEventListener('click', function() {

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let myDate = new Date();

    let fullDate = "Дата: " + myDate.getDate() + 
// getDate возвращает число

" " + months[myDate.getMonth()] + 
// getMonth возвращает номер месяца, 
// который мы можем использовать в качестве индекса для массива months

" " + myDate.getFullYear() + 
// getFullYear возвращает год

" - это " + days[myDate.getDay()] + "\n" +  
// getDay возвращает номер дня недели, 
// который мы используем в качестве индекса для массива days

"Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()

console.log(fullDate); // 



});


