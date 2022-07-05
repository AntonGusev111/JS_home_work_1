const HiddenNumber = Math.round(Math.random()*100);
console.log('Число= ',HiddenNumber);

let UserResponse = prompt('Отгадайте число от 0 до 100 или введите "q"');


while (true){
if (UserResponse=='q') {
    alert('Вы сдались')
    break
}
if (isNaN(UserResponse) || UserResponse<0 || UserResponse>100) {
    UserResponse = prompt('Вы ввели не число или не верное значение, попробуйте еще раз');
} else if (Number(UserResponse) === HiddenNumber) {
    alert('Вы угадали')
    break;
} else if(Number(UserResponse) > HiddenNumber){
    UserResponse = prompt('Подсказка: вы ввели число больше загаданного, попробуйте еще раз');
} else if(Number(UserResponse) < HiddenNumber){
    UserResponse = prompt('Подсказка: вы ввели число меньше загаданного, попробуйте еще раз');
} 
}