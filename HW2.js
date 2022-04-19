//------------->   @santropro  <-----------мой телеграм

let item_1;   // 1. Создать переменную “item_1”

item_1 = 5;   // 2. Присвоить переменной item_1 цифру 5.

console.log(item_1);  // 3. Вывести в консоль item_1.

let item_2;        // 4. Создать переменную “item_2”

item_2 = 3;       // 5. Присвоить переменной item_2 цифру 3.

console.log(item_2);   // 6. Вывести в консоль item_2.

let item_3;            // 7. Создать переменную “item_3”

item_3 = item_1 + item_2;    // 8. Присвоить переменной item_3 сложение item_1 и item_2.

console.log(item_3);     // 9. Вывести в консоль item_3.

let item_4;       // 10. Создать переменную “item_4”

item_4 = "Yolochka";     // 11. Присвоить переменной item_4 строку “Yolochka”

console.log(item_4);      // 12. Вывести в консоль item_4.

console.log(item_3 + item_4);     // 13. Вывести в консоль сложение item_3 и item_4.

console.log(item_3 * item_4);     // 14. Вывести в консоль умножение item_3 и item_4.

let item_5;                  // 15. Создать переменную “item_5”

item_5 = item_3;            // 16. Присвоить переменной item_5 переменную item_3

let item_6;                // 17. Создать переменную item_6.

let item_6_type;           // 18. Создать переменную item_6_type

item_6 = 15;             // 19. Присвоить переменной item_6 значение 15

item_6_type = typeof(item_6);           // 20. Присвоить переменной item_6_type тип переменной item_6

console.log('item_6 == ' + typeof(item_6),  'item_6_type == '  + typeof(item_6_type));     // 21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  

let item_7 =String(item_6);      // 22. Создать переменную item_7 и в ней преобразовать item_6 в String.

let item_7_type;                                           // 23. Создать переменную item_7_type

item_7_type = typeof(item_7);                               // 24. Присвоить переменной item_7_type тип переменной item_7

console.log('item_7 == ' + typeof(item_6),  'item_7_type == '  + typeof(item_7_type));        // 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  

let age_1 = 19;             // 26. Создать переменную “age_1” и присвоить ей значение 10
let age_2 = 18;            // 27. Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60;             // 28. Создать переменную “age_3” и присвоить ей значение 60

if (age_1 < age_2){                       // 29. Создать if в котором будите проверять значение переменной age_1
console.log('You don\’t have access cause your age is ' + age_1 + ' It\’s less then')         // 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
} else if (age_1 >=  age_2 && age_1 <  age_3){                                               // 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
    console.log('Welcome !')
}     else if (age_1 >  age_3){                            // 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
    console.log('Keep calm and look Culture channel')  
}
else{                                                     // 33. Иначе выводите “Technical work”.
    console.log('Technical work')
}                                             

console.log('1 задание ***********************************************************')

//1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: 

const checkAge = function(age_1) {

    if (age_1 < age_2){   
        message = 'You don\’t have access cause your age is ' + age_1 + ' It\’s less then'  
    } 
    else if (age_1 >=  age_2 && age_1 <  age_3){
        message = 'Welcome !'
    }
    else if (age_1 >  age_3){
        message = 'Keep calm and look Culture channel'  
    }
    else{
        message = 'Technical work'
    }
    return message;      
}

console.log(checkAge(17)); // Вывести в консоль результат работы функции с возрастами 17, 18, 61
console.log(checkAge(18))
console.log(checkAge(61))
console.log('2 задание ***********************************************************')

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge2 = function(age_1) {
    if (typeof(age_1) == "number"){
        if (age_1 < age_2){   
            message = 'You don\’t have access cause your age is ' + age_1 + ' It\’s less then'  
        }    
        else if (age_1 >=  age_2 && age_1 <  age_3){
            message = 'Welcome !'
        }
        else if (age_1 >  age_3){
            message = 'Keep calm and look Culture channel'  
        }
        else{
            message = 'Technical work'
        }
        return message      
    } else {
    message = 'Ошибка! В аргументах функии указан не NUMBER!'
    }
return message;
}

console.log(checkAge2('17'));
console.log(checkAge2('18'));
console.log(checkAge2('61'));
console.log(checkAge2(17));
console.log(checkAge2(18));
console.log(checkAge2(61));


console.log(' 3 задание ***********************************************************')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge3 = function(age_1) {
    let age_2 = 18
    let age_3 = 60
        if (Number(age_1) == age_1){
            if (age_1 < age_2){   
                message = 'You don\’t have access cause your age is ' + age_1 + ' It\’s less then'  
            }    
            else if (age_1 >=  age_2 && age_1 <  age_3){
                message = 'Welcome !'
            }
            else if (age_1 >  age_3){
                message = 'Keep calm and look Culture channel'  
            }
            else{
                message = 'Technical work'
            }
            return message      
        } else {
        message = 'Ошибка! В аргументах функии указано не числовое значение!'
        }
    return message;
    }
    
    console.log(checkAge3(17));
    console.log(checkAge3(18));
    console.log(checkAge3(61));
    console.log(checkAge3('17'));
    console.log(checkAge3('18'));
    console.log(checkAge3('61'));    
    console.log(checkAge3('1ewr'));
    console.log(checkAge3('wer'));
    console.log(checkAge3('wer'));


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
//ВОТ ЭТА ШТУКА РАБОТАЕТ В БРАУЗЕРЕ, закоментировал чтобы не мешало запускать(чтобы снять комент достаточно выделить и нажать прямой слеш(/ + ctrl)):
//в отдельном файле
{/* <script>
    const checkAge4 = function(age_1) {
    let age_2 = 18
    let age_3 = 60
        if (Number(age_1) == age_1){
            if (age_1 < age_2){   
                message = 'You don\’t have access cause your age is ' + age_1 + ' It\’s less then'  
            }    
            else if (age_1 >=  age_2 && age_1 <  age_3){
                message = 'Welcome !'
            }
            else if (age_1 >  age_3){
                message = 'Keep calm and look Culture channel'  
            }
            else{
                message = 'Technical work'
            }
            return message      
        } else {
        message = 'Ошибка! В аргументах функии указан не числовое значение!'
        }
    return message;
    }
    
    const age_1 = prompt('Введите age_1');
	
    alert(checkAge4(age_1));
</script> */}