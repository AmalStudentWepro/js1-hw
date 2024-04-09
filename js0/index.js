let popitki = 0; 
let kod
const max_popitki = 3 // Макс количество попыток

do {
  kod = +prompt('Ваш пароль:'); 
  popitki++;

  if (kod === 7777) {
    alert('УРАААА ПОЛУЧИЛОСЬ!!!');
    console.log(true);
    break;
  }

  if (popitki >= max_popitki) {
    alert('ТЫ ХОЧЕШЬ ВЗЛОМАТЬ? Я ТЕБЯ ЗАБЛАКИРОВАЛ'); // блокировка
    break;
  }

} while (true);

