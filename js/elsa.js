var lucy = document.querySelector('.lucy2');
var happy = document.querySelector('.happy');
var natsu = document.querySelector('.natsu');
var grey = document.querySelector('.grey');
var elsa = document.querySelector('.elsa');
var end = document.getElementById('end');
var textblock = document.querySelector('.textblock');
var chibilucy = document.querySelector('.chibilucy');
var chibihappy = document.querySelector('.chibihappy');
var yes = document.querySelector('.yes');
var no = document.querySelector('.no');
var next = document.querySelector('.next');
var next2 = document.querySelector('.next2');

function startPlay() {
  
  var st =document.getElementById('start');
  var op = document.getElementById('opening');
  var back = document.getElementById('back');
  op.style.transition= "1s";
  op.style.display="block";
  setTimeout(function() { 
    op.style.opacity="1";
    st.style.opacity="0";
    st.style.cursor="default";
  $ (textblock).css('visibility','hidden'); 
  $ (back).css('backgroundImage','url(../img/fon.jpg)');
  }, 
    500); 
}



chibielsa.onclick = function chibiels() {
      $ (next).css('visibility','visible');
   $ (textblock).css('visibility','visible'); 
  $ (back).css('backgroundImage','url(../img/fior.webp)');
    $ (chibilucy).css('visibility','hidden');
    $ (chibielsa).css('visibility','hidden');
    $ (chibinatsu).css('visibility','hidden');
    $ (chibihappy).css('visibility','hidden');
    $ (chibigrey).css('visibility','hidden');
    var string = "Королевство Фиор, мирная страна с населением в 17 миллионов. Это мир волшебства, магия здесь просто товар, она неотъемлемая часть жизни. Есть тут и такие кто сделали магию своей профессией: простой люд называет их волшебниками. Волшебники состоят в разных гильдиях и выполняют задания. В этой стране есть множество гильдий и каждая гильдия принадлежит своему городу. Когда-то ходило, нет, ходит и будет ходить множество легенд об одной из них. И имя ей Хвост Феи!";
var str = string.split("  ");
 document.getElementById("tuptext").innerHTML = str;
  counter = 1;

 next.onclick = function next(){
  console.log(counter++);
 
 if (counter == 2) {
  var string = "Город Магнолия";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/magnolia.webp)');
 }

 if (counter == 3) {
  var string = "Чёрт, что-то в последнее время мой глаз совсем разболелся...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/street.jpg)');
  $ (elsa).css('visibility','visible');
 }

 if (counter == 4) {
  var string = "Надо сходить к Полюшке.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/street.jpg)');
 }
 if (counter == 5) {
  var string = "Вдруг она что-то знает, как-никак это её работа.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/street.jpg)');
 }
 if (counter == 6) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 }
  if (counter == 7) {
  var string = "Закрыто...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');

 }
  if (counter == 8) {
  var string = "М? Это записка? Очень на неё похоже, уехать и бросить соклановцев даже не предупредив. ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 }
  if (counter == 9) {
  var string = "Грей? Ты чего тут?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
 $  (grey).css('visibility','hidden');
 }
 if (counter == 10) {
  var string = "С задания возвращаюсь, вот решил передохнуть немного у Полюшки.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','hidden');
 $  (grey).css('visibility','visible');
 }
 if (counter == 11) {
  var string = "Её нет, уехала куда-то.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
 $  (grey).css('visibility','hidden');
 }
 if (counter == 12) {
  var string = "Мда, не вовремя, а ты чего тут?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (counter == 13) {
  var string = "Глаз проверить. Пришла, а на двере записка 'Уехала, буду не скоро. Не умрите пока я не вернусь.' ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (counter == 14) {
  var string = "Даа, это в её стиле. Эх, ладно, отдохну уже дома.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (counter == 15) {
  var string = "Ты сюда пешком пришел?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
$ (grey).css('visibility','hidden');
 $  (elsa).css('visibility','visible');
 }
 if (counter == 16) {
  var string = "Ну да.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
$ (grey).css('visibility','visible');
 $  (elsa).css('visibility','hidden');
 }

if (counter == 17) {
  var string = "Я на машине, давай подвезу.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (counter == 18) {
  var string = "Отлично, спасибо.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
$ (grey).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
  if (counter == 19) {
  var string = " Сегодня все помогают мне добраться до дома.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
}
 if (counter == 20) {
  var string = "В смысле все?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (counter == 21) {
  var string = "Да встретил по пути Нацу, он мне помог добраться до Полюшки, а там ты, еще и с машиной.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (grey).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
 if (counter == 22) {
  var string = "Хах, понятно. Видимо сегодня тебе везет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
  if (counter == 23) {
  var string = "Похоже на то. Я таааак устал,вздремну чуток.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
}
if (counter == 24) {
  var string = "Давай.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
  if (counter == 25) {
  var string = "Гильдия 'Хвост Феи' ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (elsa).css('visibility','hidden');
}
if (counter == 26) {
  var string = "Вставай, соня, мы уже на месте.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (elsa).css('visibility','visible');
}
 if (counter == 27) {
  var string = "А? Так быстро? Что-ж, пойду ка я домой, спасибо что подвезла.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
}
 if (counter == 28) {
  var string = "Не за что, отдохни как следует.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
if (counter == 29) {
  var string = "Конечно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (grey).css('visibility','visible');
  $ (elsa).css('visibility','hidden');
}
if (counter == 30) {
  var string = "Несколько дней спустя";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (grey).css('visibility','hidden');

}
if (counter == 31) {
  var string = "Хм, Нацу кого-то привел?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','visible');

}
if (counter == 32) {
  var string = "Привет, ты новенькая? Меня зовут Эльза, а тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','visible');

}
if (counter == 33) {
  var string = "Я Люси, приятно познакомиться. Надеюсь ваш мастер меня примет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
 if (counter == 34) {
  var string = "Макаров то? Не переживай, он не упустит возможности получить себе в гильдию заклинателя духов.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }

 if (counter == 35) {
  var string = "Что? Откуда ты ...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
if (counter == 36) {
  var string = "*Эльза похлопала себя по бедру с той же стороны где у Люси висели ключи и улыбнулась*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (counter == 37) {
  var string = "Ах, ну да, а ты наблюдательная! А какая магия у тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
if (counter == 38) {
  var string = "Оооо, у Эльзы очень классная магия! Она владеет магией перевооружения!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (counter == 39) {
  var string = "А ты...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (counter == 40) {
  var string = "Грей. Мы с Нацу и Эльзой в одной команде.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (counter == 41) {
  var string = "Я Люси, рада знакомству!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (counter == 42) {
  var string = "Взаимно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }

if (counter == 43) {
  var string = "А как это 'магия перевооружения'? Никогда раньше не встречала такую...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (counter == 44) {
  var string = "Я тебе потом как-то покажу. У Грея магия на много красивее моей.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (counter == 45) {
  var string = "Правда?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (counter == 46) {
  var string = "Ага, он владеет магией льда.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }

 if (counter == 47) {
  var string = "Вааа, покажи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (counter == 48) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (counter == 49) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','hidden');
var show = document.querySelector('.show');
$ (show).css('visibility','visible');
 }
 if (counter == 50) {
  var string = "В общем как-то так...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
var show = document.querySelector('.show');
$ (show).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

if (counter == 51) {
  var string = "Эльза права, у тебя и в правду очень красивая магия !";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (counter == 52) {
  var string = "Что-ж, спасибо.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
  if (counter == 53) {
  var string = "ЭЭЭЙ ШПАНЬЁ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
}
 if (counter == 54) {
  var string = "КИНКОНГ!!!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
 if (counter == 55) {
  var string = "О, мастер, Вы уже вернулись?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
 if (counter == 56) {
  var string = "Агась.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (elsa).css('visibility','hidden');
}
  if (counter == 57) {
  var string = "О, а ты у нас новенькая?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (elsa).css('visibility','hidden');
}
if (counter == 58) {
  var string = "Д-да...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
  if (counter == 59) {
  var string = "Добро пожаловать!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/welcome.jpg)');
$ (lucy).css('visibility','hidden');
}
if (counter == 60) {
  var string = "Э? Уменьшился? Так Вы и есть мастер!?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
}
 if (counter == 61) {
  var string = "Он,самый. Мастер гильдии Хвост Феи Макаров.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
 if (counter == 62) {
  var string = "Тебя как звать то ?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','hidden');
$ (makarov).css('visibility','visible');
}
if (counter == 63) {
  var string = "Люси.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (makarov).css('visibility','hidden');
}
 if (counter == 64) {
  var string = "Что-ж, Люси, пошли поставим тебе знак гильдии!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (makarov).css('visibility','visible');
}
if (counter == 65) {
  var string = "Да!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (makarov).css('visibility','hidden');
}
if (counter == 66) {
  var string = "*Чуть позже*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (makarov).css('visibility','hidden');
}
if (counter == 67) {
  var string = "Эй, Люси!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','visible');
}
if (counter == 68) {
  var string = "Ась?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy2).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
if (counter == 69) {
  var string = "Поздравляю с татуировкой.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy2).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
if (counter == 70) {
  var string = "Спасибо! Для меня это действительно много значит.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy2).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
if (counter == 71) {
  var string = "Хах, понимаю. Иди покажи Нацу, думаю он будет рад её увидеть.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy2).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
if (counter == 72) {
  var string = "Х-хорошо, спасибо, Эльза.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy2).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
if (counter == 73) {
  var string = "Всегда к твоим услугам!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy2).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
if (counter == 74) {
  var string = "Ну, а сейчас на задание!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
}
if (counter == 75) {
   var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/fon.jpg)');
$(elsa).css('visibility','hidden');
$ (chibilucy).css('visibility','visible');
    $ (chibielsa).css('visibility','visible');
    $ (chibinatsu).css('visibility','visible');
    $ (chibihappy).css('visibility','visible');
    $ (chibigrey).css('visibility','visible');
 $ (textblock).css('visibility','hidden'); 
var next = document.querySelector('.next');
  $ (next).css('visibility','hidden'); 
   counter = 0;
}
}
}
