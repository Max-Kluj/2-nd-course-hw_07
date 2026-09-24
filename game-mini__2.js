function simpleArithmetic() {

let numberOfAttempts = 0;

let numberOfCorrectAnswers = 0;

let a, b, correctAnswer;

const operator = ['+', '-', '*', '/'];     


while (true){

        const oper = operator[Math.floor(Math.random() * operator.length)];    
        
        if (oper === '/') {
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;   
            a = b * correctAnswer; 
        } else {
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
        }
        
        
        const expression = a + ' ' + oper + ' ' + b; 
        
        if (oper === '+') {
            correctAnswer = a + b;
        
        } else if (oper === '-') {
            correctAnswer = a - b;
        
        } else if (oper === '*') {
            correctAnswer = a * b;
        }
        
        const answerUser = prompt(`Введите ответ на выражение ${expression}`);

        if (answerUser === null) {
            alert('Вы нажали Отмена');
            return;
        }

        if (answerUser.trim() === '') {
            alert('Вы ничего не ввели, введите число');
            continue;
        }

        let numUser = Number(answerUser);

        if (isNaN(numUser)) {
            alert('Вы ввели не цифру, введите число');
            continue;
        }

        let again;

        numberOfAttempts++;

        if (correctAnswer === numUser) {
            numberOfCorrectAnswers++;
            again = confirm('Вы ввели ответ верно. Попробуем еще?');
        } else {
            again = confirm('Вы ввели ответ не верно. Попробуем еще?');
            
        } 

        if (!again) break;
    }

    alert(`Вчего задач: ${numberOfAttempts}, из них правильных ответов ${numberOfCorrectAnswers}`);
}

