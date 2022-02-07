// let time = +prompt("Enter 0 to 59");
// if (time >= 0 && time <= 14) {
//     console.log('Перша чверть')
// } else if (time >= 15 && time <= 29) {
//     console.log('Друга чверть')
// } else if (time >= 30 && time <= 44) {
//     console.log('Третя чверть')
// }else if (time >= 45 && time <= 59) {
//     console.log('Четверта чверть')
// } else {
//     console.log("Некоректно введені дані")
// }


// let day = +prompt('Enter 1 to 31');
// if (day >= 1 && day <= 10) {
//     console.log('first');
// } else if (day >= 11 && day <= 20) {
//     console.log('second');
// } else if (day >= 21 && day <= 31) {
//     console.log('third');
// }else {
//     console.log('Некоректно введені дані')
// }


// let test = 'true';
// if (test !== true) {
//     console.log('ВІРНО')
// } else {
//     console.log('НЕВІРНО')
// }


// let test = 'true';
// test === true ? console.log('ВІРНО') : console.log('НЕВІРНО')
// test !== true ? console.log('ВІРНО') : console.log('НЕВІРНО')


// let a = +prompt('Введіть число 1, 0 , -3');
// if (a !== 0){
//     console.log('ВІРНО')
// } else {
//     console.log('НЕВІРНО')
// }

// let day = +prompt('Enter a day of week from 1 to 7');
// switch (day) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
// }


// let year = +prompt('Введіть кількість днів в цьому році');
// if(year % 4 === 0){
//     console.log('Рік високосний');
// }else {
//     console.log('Рік звичайний');
// }
// (+prompt('Введіть кількість днів в цьому році')%4===0) ? console.log('Рік високосний') : console.log('Рік звичайний');


let nameJS = prompt('Яка «офіційна» назва JavaScript?');
if (nameJS ==='ECMAScript'){
    alert('Правильно!');
}else {
    alert('Не знаєте? ECMAScript');
}