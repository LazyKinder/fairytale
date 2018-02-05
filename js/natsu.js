var lucy = document.querySelector('.lucy2');
var lucy2 = document.querySelector('.lucy');
var happy = document.querySelector('.happy');
var natsu = document.querySelector('.natsu');
var grey = document.querySelector('.grey');
var elsa = document.querySelector('.elsa');
var makarov = document.querySelector('.makarov');
var end = document.getElementById('end');
var textblock = document.querySelector('.textblock');
var chibilucy = document.querySelector('.chibilucy');
var chibinatsu = document.querySelector('.chibinatsu');
var chibihappy = document.querySelector('.chibihappy');
var chibielsa = document.querySelector('.chibielsa');
var chibigrey = document.querySelector('.chibigrey');
var celsa = document.querySelector('.choseelsa');
var cgrey = document.querySelector('.chosegrey');
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


chibinatsu.onclick = function chibinats() {
   $ (textblock).css('visibility','visible'); 
  $ (back).css('backgroundImage','url(../img/fior.webp)');
    $ (chibilucy).css('visibility','hidden');
    $ (chibielsa).css('visibility','hidden');
    $ (chibihappy).css('visibility','hidden');
    $ (chibinatsu).css('visibility','hidden');
    $ (chibigrey).css('visibility','hidden');
    var string = "Королевство Фиор, мирная страна с населением в 17 миллионов. Это мир волшебства, магия здесь просто товар, она неотъемлемая часть жизни. Есть тут и такие кто сделали магию своей профессией: простой люд называет их волшебниками. Волшебники состоят в разных гильдиях и выполняют задания. В этой стране есть множество гильдий и каждая гильдия принадлежит своему городу. Когда-то ходило, нет, ходит и будет ходить множество легенд об одной из них. И имя ей Хвост Феи!";
var str = string.split("  ");
 document.getElementById("tuptext").innerHTML = str;
  counter = 1;
 var next = document.querySelector('.next');
   $ (next).css('visibility','visible');
 next.onclick = function next(){
  
  console.log(counter++);
 
  if (counter == 2) {
  var string = "Восточный лес";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/east.webp)');
 }

 if (counter == 3) {
  var string = "Хэппи, ты тоже это чувсвтуешь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
  $ (natsu).css('visibility','visible');
 }

 if (counter == 4) {
  var string = "Айя! Похоже что тут Грей.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
  $ (happy).css('visibility','visible');
 }
 if (counter == 5) {
  var string = "Хэй, кто это там в кустах?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','visible'); 
 $ (happy).css('visibility','hidden');
   $ (natsu).css('visibility','hidden');
 }
 if (counter == 6) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
  $ (grey).css('visibility','hidden');
 }
  if (counter == 7) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (happy).css('visibility','visible');
 
 }
  if (counter == 8) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','visible');

 }
   if (counter == 9) {
  var string = "Э? Хэппи и Нацу? Что вы здесь делаете?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');

 }
   if (counter == 10) {
  var string = "Ого, и правда Грей! Не думал тебя тут встретить, что делаешь ? Ты же вроде на задание ушел.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','visible');
 $  (grey).css('visibility','hidden');

 }
   if (counter == 11) {
  var string = "Я как раз с него возврашаюсь и ... Эй, я вообще-то первый спросил!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','visible');
 $  (natsu).css('visibility','hidden');

 }
 if (counter == 12) {
  var string = "Мы направляемся в Харгеон!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (happy).css('visibility','visible');
 $  (grey).css('visibility','hidden');

 }
  if (counter == 13) {
  var string = "Харгеон? Почему пешком? До туда ещё два дня на своих топать будете!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 }
  if (counter == 14) {
  var string = "Ты же знаешь, я с транспортом не в ладах... Да и у меня есть Хэппи!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','hidden');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
  if (counter == 15) {
  var string = "Агась!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (happy).css('visibility','visible');

 }
  if (counter == 16) {
  var string = "Мда... Хэппи тебе не транспорт! Так зачем вы туда направляетесь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','hidden');
 $  (grey).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 }
  if (counter == 17) {
  var string = "Слышал что в Харгеон прибывает саламандра.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
  if (counter == 18) {
  var string = "Надеешься что это Игнил?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','visible');
 $  (natsu).css('visibility','hidden');

 }
  if (counter == 19) {
  var string = "Ну а кто еще может быть огненным драконом как не Игнил?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
   if (counter == 20) {
  var string = "Не хочу тебя расстраивать, но зачем Игнилу появляться именно в этом городе? Если бы он хотел встретиться то пришел в Магнолию.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','visible');
  $ (natsu).css('visibility','hidden');

 }
   if (counter == 21) {
  var string = "Та знаю я! Но проверить все же надо...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (grey).css('visibility','hidden');
  $ (natsu).css('visibility','visible');

 }
  if (counter == 22) {
  var string = "Прости...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
  $ (natsu).css('visibility','hidden');
 $  (grey).css('visibility','visible');
 }
  if (counter == 23) {
  var string = "Та ничего. Ладно, так что ты тут делаешь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
  $ (natsu).css('visibility','visible');
  $ (grey).css('visibility','hidden');
 }
  if (counter == 24) {
  var string = "Говорил же, возвращаюсь в гильдию.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
  $ (grey).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
 }
   if (counter == 25) {
  var string = "А почему ты просто не поехал на поезде?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (grey).css('visibility','hidden');
$ (natsu).css('visibility','visible');

 }
 if (counter == 26) {
  var string = "Захотелось прогуляться...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (grey).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
 
 }
  if (counter == 27) {
  var string = "И теперь ты потерсялся.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (grey).css('visibility','hidden');
$ (happy).css('visibility','visible');

 }
    if (counter == 28) {
  var string = "Помочь найти дорогу?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (natsu).css('visibility','visible');

 }
if (counter == 29) {
  var string = "Да, пожалуйста... Иначе я ещё пол дня тут гулять буду.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (natsu).css('visibility','hidden');
$ (happy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

if (counter == 30) {
  var string = "Окей.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (natsu).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (counter == 31) {
  var string = "*Нацу принюхался и ткнул себе за спину*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 }

 if (counter == 32) {
  var string = "Там. Будешь идти прямо и через пару часов выйдешь к дому Полюшки.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 }
if (counter == 33) {
  var string = "Понял, спасибо. Удачно тебе добраться до Харгеона.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (counter == 34) {
  var string = "Даа, спасибо. Ну, бывай! ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (counter == 35) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (happy).css('visibility','visible');
 }
 if (counter == 36) {
  var string = "День спустя";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/hargeon.webp)');
 $  (happy).css('visibility','hidden');
$ (natsu).css('visibility','hidden');
 }
if (counter == 37) {
  var string = "Портовый город Харгеон";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/hargeon.webp)');
 }

 if (counter == 38) {
  var string = "Эээх, саламандрой с Харгеона оказался вовсе не Игнил, а какой-то жулик... Обидно то как..";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
  $ (natsu).css('visibility','visible');
  $ (happy).css('visibility','visible');
 }

 if (counter == 39) {
  var string = "Э? Кошка с крыльями?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $ (natsu).css('visibility','hidden');
  $ (lucy).css('visibility','visible');
 
 }
 if (counter == 40) {
  var string = "Ась? Я не кошка, я кот! Никогда не видела летающих котов?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible'); 
 $  (lucy).css('visibility','hidden');
 }
 if (counter == 41) {
  var string = "Ты ещё и разговаривать умеешь?! ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
  $ (happy).css('visibility','hidden');
 }
  if (counter == 42) {
  var string = "Конечно умеет, да Хэппи?)";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','visible');
  $ (lucy).css('visibility','hidden');
 }
  if (counter == 43) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible');

 }
   if (counter == 44) {
  var string = "Твоя татуировка! Ты из Хвоста Феи ?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');

 }
   if (counter == 45) {
  var string = "Ну да, а что?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','visible');
 $  (lucy).css('visibility','hidden');

 }
   if (counter == 46) {
  var string = "Какая удача, я как раз собиралась к вам идти!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
 $  (natsu).css('visibility','hidden');

 }
 if (counter == 47) {
  var string = "О, новое задание? Сколько платишь? Мы с Хэппи на мели так что возьмемся хоть сейчас!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','visible');
 $  (lucy).css('visibility','hidden');

 }
  if (counter == 48) {
  var string = "Агась! Нацу сделает всё , да к тому же в кротчайшие сроки!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible');

 }
  if (counter == 49) {
  var string = "Нет, нет, я не для заказа к вам иду, вы ошиблись...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');

 }
  if (counter == 50) {
  var string = "Да? Жаль... Ну а зачем тогда?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
  if (counter == 51) {
  var string = "Может по мне и не скажешь, но я тоже волшебница! *Люси похлопала по связке ключей у себя на бедре*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','hidden');
 $  (lucy).css('visibility','visible');

 }
  if (counter == 52) {
  var string = "Заклинательница духов?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
  if (counter == 53) {
  var string = "Она самая!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','hidden');
 $  (lucy).css('visibility','visible');

 }
  if (counter == 54) {
  var string = "Шикоз, таких у нас ещё нет, айда с нами в гильдию!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
   if (counter == 55) {
  var string = "Айя! Мастер тебя быстро приймет!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible');
 $  (natsu).css('visibility','visible');
  $ (lucy).css('visibility','hidden');

 }
   if (counter == 56) {
  var string = "Ура! Спасибо вам, эээ... Нацу и Хэппи, верно? Я Люси, будем знакомы.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');
  $ (lucy).css('visibility','visible');

 }
  if (counter == 57) {
  var string = "Гильдия Хвост Феи ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (lucy).css('visibility','hidden');

 }
  if (counter == 58) {
  var string = "Вау, так это и есть гильдия Хвост Феи ? Огрооомная...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (lucy).css('visibility','visible');

 }
  if (counter == 59) {
  var string = "Агась!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (happy).css('visibility','visible');

 }
   if (counter == 60) {
  var string = "Заходи, не бойся, ребята не кусаются! Разве что некоторые... В любом случае! Я познакомлю тебя с остальными из своей команды.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (happy).css('visibility','hidden');
$ (lucy).css('visibility','hidden');
$ (natsu).css('visibility','visible');

 }
 if (counter == 61) {
  var string = "Х-хорошо..";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (lucy).css('visibility','visible');
$ (natsu).css('visibility','hidden');

 }
 if (counter == 62) {
  var string = "Эээй, ребята, я привел нам нового друга, идите познакомьтесь!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (natsu).css('visibility','visible');
 }
 if (counter == 63) {
  var string = "Чуть позже";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (natsu).css('visibility','hidden');
 }
if (counter == 64) {
  var string = "ЭЭЭЙ ШПАНЬЁ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
}
  if (counter == 65) {
  var string = "Ооой, кажется мне пора сваливать... Нацу прикрой меня.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','visible');

}
  if (counter == 66) {
  var string = "Без проблем!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
$(natsu).css('visibility','visible');

}
if (counter == 67) {
  var string = "Пасиба, за мной должок!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','visible');
$(natsu).css('visibility','hidden');
}
  if (counter == 68) {
  var string = "Сочтемся.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
$(natsu).css('visibility','visible');

}
  if (counter == 69) {
  var string = "Эй, дедуль, смотри кого привел!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');

}
if (counter == 70) {
  var string = "О, а ты у нас новенькая?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (natsu).css('visibility','hidden');
}
if (counter == 71) {
  var string = "Д-да...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
  if (counter == 72) {
  var string = "Добро пожаловать!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/welcome.jpg)');
$ (lucy).css('visibility','hidden');
}
  if (counter == 73) {
  var string = "Ну-с, я пошел.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (natsu).css('visibility','visible');
}
  if (counter == 74) {
  var string = "Еще чуточку позже";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (natsu).css('visibility','hidden');
}
if (counter == 75) {
  var string = "Зацени, Нацу, теперь у меня татушка Хвоста Феи!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/tatu.jpg)');

}
if (counter == 76) {
  var string = "Чё, правда? Рад за тебя, Луиджи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/tatu.jpg)');
}
if (counter == 77) {
  var string = "Я Люси! А что ты делаешь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
}
if (counter == 78) {
  var string = "Выбираю задание за которое прилично отвалят.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (counter == 79) {
  var string = "2 000 000 000 за то чтоб сжечь какую-то книжонку! Люська, погнали!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
  $ (natsu).css('visibility','visible');
}
if (counter == 80) {
  var string = "Э? Мне с тобой идти?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
}
if (counter == 81) {
  var string = "Конечно, мы ж в одной команде. Но если ты не хочешь...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (counter == 82) {
  var string = "Нет-нет, я в деле!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
}
if (counter == 83) {
  var string = "Отлично!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (counter == 84) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (happy).css('visibility','visible');
}
if (counter == 85) {
   var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/fon.jpg)');
$(natsu).css('visibility','hidden');
$ (chibilucy).css('visibility','visible');
    $ (chibielsa).css('visibility','visible');
    $ (chibinatsu).css('visibility','visible');
    $ (chibihappy).css('visibility','visible');
    $ (chibigrey).css('visibility','visible');
 $ (textblock).css('visibility','hidden'); 
 var next = document.querySelector('.next');
var next2 = document.querySelector('.next2');
  $ (next2).css('visibility','hidden'); 
   count = 0;
   $  (happy).css('visibility','hidden');
}
 }
}