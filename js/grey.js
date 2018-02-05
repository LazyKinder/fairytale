var lucy = document.querySelector('.lucy2');
var happy = document.querySelector('.happy');
var natsu = document.querySelector('.natsu');
var grey = document.querySelector('.grey');
var elsa = document.querySelector('.elsa');
var end = document.getElementById('end');
var textblock = document.querySelector('.textblock');
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
  $	(back).css('backgroundImage','url(../img/fon.jpg)');
  }, 
  	500); 
}




chibigrey.onclick = function chibigr() {
   $ (textblock).css('visibility','visible'); 
  $ (back).css('backgroundImage','url(../img/fior.webp)');
      $ (next).css('visibility','visible');
    $ (chibilucy).css('visibility','hidden');
    $ (chibielsa).css('visibility','hidden');
    $ (chibihappy).css('visibility','hidden');
    $ (chibinatsu).css('visibility','hidden');
    $ (chibigrey).css('visibility','hidden');
    var string = "Королевство Фиор, мирная страна с населением в 17 миллионов. Это мир волшебства, магия здесь просто товар, она неотъемлемая часть жизни. Есть тут и такие кто сделали магию своей профессией: простой люд называет их волшебниками. Волшебники состоят в разных гильдиях и выполняют задания. В этой стране есть множество гильдий и каждая гильдия принадлежит своему городу. Когда-то ходило, нет, ходит и будет ходить множество легенд об одной из них. И имя ей Хвост Феи!";
var str = string.split("  ");
 document.getElementById("tuptext").innerHTML = str;
	counter = 1;

 next.onclick = function next(){
 	console.log(counter++);
 
 if (counter == 2) {
 	var string = "Восточный лес";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/east.webp)');
 }

 if (counter == 3) {
 	var string = "Вот незадача то... Неужели я умудрился потеряться?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
  $	(grey).css('visibility','visible');
 }

 if (counter == 4) {
 	var string = "*Шурх-шурх*";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
  $ (grey).css('visibility','hidden');
 }
 if (counter == 5) {
 	var string = "Хэй, кто это там в кустах?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','visible'); 
 }
 if (counter == 6) {
 	var string = "...";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
  $	(grey).css('visibility','hidden');
 }
  if (counter == 7) {
 	var string = "";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(happy).css('visibility','visible');
 
 }
  if (counter == 8) {
 	var string = "";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(natsu).css('visibility','visible');

 }
   if (counter == 9) {
 	var string = "Э? Хэппи и Нацу? Что вы здесь делаете?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','visible');
 $	(happy).css('visibility','hidden');
 $	(natsu).css('visibility','hidden');

 }
   if (counter == 10) {
 	var string = "Ого, Грей! Не думал тебя тут встретить, что делаешь ? Ты же вроде на задание ушел.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(natsu).css('visibility','visible');
 $	(grey).css('visibility','hidden');

 }
   if (counter == 11) {
 	var string = "Я как раз с него возврашаюсь и ... Эй, я вообще-то первый спросил!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','visible');
 $	(natsu).css('visibility','hidden');

 }
 if (counter == 12) {
 	var string = "Мы направляемся в Харгеон!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(happy).css('visibility','visible');
 $	(grey).css('visibility','hidden');

 }
  if (counter == 13) {
 	var string = "Харгеон? Почему пешком? До туда ещё два дня на своих топать будете!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 }
  if (counter == 14) {
 	var string = "Ты же знаешь, я с транспортом не в ладах... Да и у меня есть Хэппи!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','hidden');
 $	(happy).css('visibility','hidden');
 $	(natsu).css('visibility','visible');

 }
  if (counter == 15) {
 	var string = "Агась!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(happy).css('visibility','visible');

 }
  if (counter == 16) {
 	var string = "Мда... Хэппи тебе не транспорт! Так зачем вы туда направляетесь?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(natsu).css('visibility','hidden');
 $	(grey).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 }
  if (counter == 17) {
 	var string = "Слышал что в Харгеон прибывает саламандра.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','hidden');
 $	(natsu).css('visibility','visible');

 }
  if (counter == 18) {
 	var string = "Надеешься что это Игнил?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','visible');
 $	(natsu).css('visibility','hidden');

 }
  if (counter == 19) {
 	var string = "Ну а кто еще может быть огненным драконом как не Игнил?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','hidden');
 $	(natsu).css('visibility','visible');

 }
   if (counter == 20) {
 	var string = "Не хочу тебя расстраивать, но зачем Игнилу появляться именно в этом городе? Если бы он хотел встретиться то пришел в Магнолию.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','visible');
  $	(natsu).css('visibility','hidden');

 }
   if (counter == 21) {
 	var string = "Та знаю я! Но проверить все же надо...";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(grey).css('visibility','hidden');
  $	(natsu).css('visibility','visible');

 }
  if (counter == 22) {
 	var string = "Прости...";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
  $	(natsu).css('visibility','hidden');
 $  (grey).css('visibility','visible');
 }
  if (counter == 23) {
 	var string = "Та ничего. Ладно, так что ты тут делаешь?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
  $	(natsu).css('visibility','visible');
  $ (grey).css('visibility','hidden');
 }
  if (counter == 24) {
 	var string = "Говорил же, возвращаюсь в гильдию.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
  $	(grey).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
 }
   if (counter == 25) {
 	var string = "А почему ты просто не поехал на поезде?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
$	(grey).css('visibility','hidden');
$	(natsu).css('visibility','visible');

 }
 if (counter == 26) {
 	var string = "Захотелось прогуляться...";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
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
  var string = "Принять помощь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (natsu).css('visibility','hidden');
$ (happy).css('visibility','hidden');
$   (yes).css('visibility','visible') ;
$ (no).css('visibility','visible');
$ (yes).css('cursor','pointer');
$ (no).css('cursor','pointer');
var next = document.querySelector('.next');
$ (next).css('visibility','hidden');
counter = 0;
 }
}











yes.onclick = function ye(){
 	var string = "Да, пожалуйста... Иначе я ещё пол дня тут гулять буду.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
$	(grey).css('visibility','visible');
$ 	(yes).css('visibility','hidden')	;
$ (no).css('visibility','hidden');
$ (next2).css('visibility','visible');
 count =1;
next2.onclick = function nex2t(){
 	console.log(count++);

if (count == 2) {
 	var string = "Окей.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
$	(natsu).css('visibility','visible');
$	(grey).css('visibility','hidden');
}
 if (count == 3) {
 	var string = "*Нацу принюхался и ткнул себе за спину*";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 }

 if (count == 4) {
 	var string = "Там. Будешь идти прямо и через пару часов выйдешь к дому Полюшки.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 }
if (count == 5) {
 	var string = "Понял, спасибо. Удачно тебе добраться до Харгеона.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(natsu).css('visibility','hidden');
$	(grey).css('visibility','visible');
 }
 if (count == 6) {
 	var string = "Даа, спасибо. Ну, бывай! ";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(natsu).css('visibility','visible');
$	(grey).css('visibility','hidden');
 }
if (count == 7) {
 	var string = "Айя!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/forest.jpg)');
 $	(happy).css('visibility','visible');
 }
 if (count == 8) {
 	var string = "Два часа спустя";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(happy).css('visibility','hidden');
$	(natsu).css('visibility','hidden');
 }
 if (count == 9) {
 	var string = "Дом Полюшки";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 }
 if (count == 10) {
 	var string = "Хууух, неужели, наконец-то я тут!";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
$	(grey).css('visibility','visible');
 }
 if (count == 11) {
 	var string = "Можно хоть немного отдохнуть.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 }

if (count == 12) {
 	var string = "Грей? Ты чего тут?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','visible');
 $	(grey).css('visibility','hidden');
 }
 if (count == 13) {
 	var string = "С задания возвращаюсь, вот решил передохнуть немного у Полюшки.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','hidden');
 $	(grey).css('visibility','visible');
 }
 if (count == 14) {
 	var string = "Её нет, уехала куда-то.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','visible');
 $	(grey).css('visibility','hidden');
 }
 if (count == 15) {
 	var string = "Мда, не вовремя, а ты чего тут?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','hidden');
$	(grey).css('visibility','visible');
 }

 if (count == 16) {
 	var string = "Глаз проверить. Пришла, а на двере записка 'Уехала, буду не скоро. Не умрите пока я не вернусь.' ";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','visible');
$	(grey).css('visibility','hidden');
 }
 if (count == 17) {
 	var string = "Даа, это в её стиле. Эх, ладно, отдохну уже дома.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','hidden');
$	(grey).css('visibility','visible');
 }
 if (count == 18) {
 	var string = "Ты сюда пешком пришел?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
$	(grey).css('visibility','hidden');
 $  (elsa).css('visibility','visible');
 }
 if (count == 19) {
 	var string = "Ну да.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
$	(grey).css('visibility','visible');
 $  (elsa).css('visibility','hidden');
 }

if (count == 20) {
 	var string = "Я на машине, давай подвезу.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
 $	(elsa).css('visibility','visible');
$	(grey).css('visibility','hidden');
 }
 if (count == 21) {
 	var string = "Отлично, спасибо.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/polushka.webp)');
$	(grey).css('visibility','visible');
$	(elsa).css('visibility','hidden');
 }
  if (count == 22) {
 	var string = " Сегодня все помогают мне добраться до дома.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/car.webp)');
}
 if (count == 23) {
 	var string = "В смысле все?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/car.webp)');
$	(elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (count == 24) {
 	var string = "Да встретил по пути Нацу, он мне помог добраться до Полюшки, а там ты, еще и с машиной.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/car.webp)');
$ (grey).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
 if (count == 25) {
 	var string = "Хах, понятно. Видимо сегодня тебе везет.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/car.webp)');
$	(elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
  if (count == 26) {
 	var string = "Похоже на то. Я таааак устал,вздремну чуток.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/car.webp)');
$	(elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
}
if (count == 27) {
 	var string = "Давай.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
  if (count == 28) {
 	var string = "Гильдия 'Хвост Феи' ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (elsa).css('visibility','hidden');
}
if (count == 29) {
 	var string = "Вставай, соня, мы уже на месте.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/guild.jpg)');
$	(elsa).css('visibility','visible');
}
 if (count == 30) {
 	var string = "А? Так быстро? Что-ж, пойду ка я домой, спасибо что подвезла.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/guild.jpg)');
$	(elsa).css('visibility','hidden');
$	(grey).css('visibility','visible');
}
 if (count == 31) {
 	var string = "Не за что, отдохни как следует.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/guild.jpg)');
$	(elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
if (count == 32) {
 	var string = "Конечно.";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/guild.jpg)');
$	(grey).css('visibility','visible');
  $ (elsa).css('visibility','hidden');
}
 if (count == 33) {
 	var string = "Несколько дней спустя";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/guild.jpg)');
$	(grey).css('visibility','hidden');

}
if (count == 34) {
 	var string = "Хм, Нацу кого-то привел?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/inside.jpg)');
$	(grey).css('visibility','visible');

}
if (count == 35) {
 	var string = "Привет, ты новенькая? Меня зовут Грей, а тебя?";
 	var str = string.split("  ");
 	document.getElementById("tuptext").innerHTML = str;
 $	(back).css('backgroundImage','url(../img/inside.jpg)');
}
if (count == 36) {
  var string = "Я Люси, приятно познакомиться. Надеюсь ваш мастер меня примет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (count == 37) {
  var string = "Макаров то? Не переживай, он не упустит возможности получить себе в гильдию заклинателя духов.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 38) {
  var string = "Что? Откуда ты ...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 39) {
  var string = "*Грей похлопал себя по бедру с той же стороны где у Люси висели ключи и улыбнулся*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 40) {
  var string = "Ах, ну да, а ты наблюдательный! А какая магия у тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 41) {
  var string = "Оооо, у Грея очень красивая магия!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 42) {
  var string = "А ты...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 43) {
  var string = "Эльза. Мы с Нацу и Греем в одной команде.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 44) {
  var string = "Я Люси, рада знакомству!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 45) {
  var string = "Взаимно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }

if (count == 46) {
  var string = "Так какая у тебя магия,Грей?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 47) {
  var string = "Лёд.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 48) {
  var string = "Вааа, покажи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 49) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 50) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','hidden');
var show = document.querySelector('.show');
$ (show).css('visibility','visible');
 }
 if (count == 51) {
  var string = "В общем как-то так...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
var show = document.querySelector('.show');
$ (show).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

if (count == 52) {
  var string = "Эльза права, у тебя и в правду очень красивая магия !";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 53) {
  var string = "Что-ж, спасибо. Но у Эльзы магия круче.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 54) {
  var string = "Она владеет магией перевооружения!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 }
if (count == 55) {
  var string = "А как это 'магия перевооружения'? Никогда раньше не встречала такую...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 56) {
  var string = "Я тебе потом как-то покажу. *Эльза подмигнула Люси и улыбнулась*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (count == 57) {
  var string = "Л-ладно...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
  if (count == 58) {
  var string = "ЭЭЭЙ ШПАНЬЁ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
}
  if (count == 59) {
  var string = "Ооой, кажется мне пора сваливать... Нацу прикрой меня.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','visible');

}
  if (count == 60) {
  var string = "Без проблем!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
$(natsu).css('visibility','visible');

}
if (count == 61) {
  var string = "Пасиба, за мной должок!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','visible');
$(natsu).css('visibility','hidden');
}
  if (count == 62) {
  var string = "Сочтемся.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
$(natsu).css('visibility','visible');

}
 if (count == 63) {
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
var next2 = document.querySelector('.next2');
  $ (next2).css('visibility','hidden'); 
   count = 0;
}
 }
 }




 no.onclick = function noy(){
 	var string = "Нет, спасибо. Сам как-то выйду.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (grey).css('visibility','visible');
$   (yes).css('visibility','hidden')  ;
$ (no).css('visibility','hidden');
$ (next2).css('visibility','visible');
 count =1;
next2.onclick = function nex2t(){
  console.log(count++);

if (count == 2) {
  var string = "Окей. Как хочешь.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
$ (natsu).css('visibility','visible');
$ (grey).css('visibility','hidden');
}

if (count == 3) {
  var string = "Хочу ещё прогуляться по этому лесу. Что-ж, удачно тебе добраться до Харгеона.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 4) {
  var string = "Даа, спасибо. Ну, бывай! ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (natsu).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 5) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (happy).css('visibility','visible');
 }
 if (count == 6) {
  var string = "Два часа спустя";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $  (happy).css('visibility','hidden');
$ (natsu).css('visibility','hidden');
 }
 if (count == 7) {
  var string = "Может надо было всё-таки принять его помощь?... Хожу тут кругами уже часа два, не меньше!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 $ (grey).css('visibility','visible');
 }
 if (count == 8) {
  var string = "Как можно было так заблудиться в знакомом чуть ли не с детства лесу?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');

 }
 if (count == 9) {
  var string = "Агрх.. Нужно хоть немного отдохнуть.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 }
 if (count == 10) {
  var string = "Нееет, нельзя. Где-то тут должен быть дом Полюшки...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/forest.jpg)');
 }
  if (count == 11) {
  var string = "Ого,нашёл.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 }
if (count == 12) {
  var string = "Грей? Ты чего тут?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
 $  (grey).css('visibility','hidden');
 }
 if (count == 13) {
  var string = "О, Эльза. Я с задания возвращаюсь, вот решил передохнуть немного у Полюшки.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','hidden');
 $  (grey).css('visibility','visible');
 }
 if (count == 14) {
  var string = "Её нет, уехала куда-то.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
 $  (grey).css('visibility','hidden');
 }
 if (count == 15) {
  var string = "Мда, не вовремя, а ты чего тут?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 16) {
  var string = "Глаз проверить. Пришла, а на двере записка 'Уехала, буду не скоро. Не умрите пока я не вернусь.' ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 17) {
  var string = "Даа, это в её стиле. Эх, ладно, отдохну уже дома.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 18) {
  var string = "Ты сюда пешком пришел?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
$ (grey).css('visibility','hidden');
 $  (elsa).css('visibility','visible');
 }
 if (count == 19) {
  var string = "Ну да.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
$ (grey).css('visibility','visible');
 $  (elsa).css('visibility','hidden');
 }

if (count == 20) {
  var string = "Я на машине, давай подвезу.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
 $  (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 21) {
  var string = "Отлично, спасибо.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/polushka.webp)');
$ (grey).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
  if (count == 22) {
  var string = " Сегодня все пытаются помочь мне добраться до дома.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
}
 if (count == 23) {
  var string = "В смысле все?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (count == 24) {
  var string = "Да встретил по пути Нацу, он хотел помочь, но я отказался. Лучше бы согласился, устал до чериков гулять по этому лесу.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (grey).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
 if (count == 25) {
  var string = "Хах, понятно. Видимо сегодня тебе не очень везет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
  if (count == 26) {
  var string = "Похоже на то. Вздремну чуток.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
}
if (count == 27) {
  var string = "Давай.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/car.webp)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
  if (count == 28) {
  var string = "Гильдия 'Хвост Феи' ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (elsa).css('visibility','hidden');
}
if (count == 29) {
  var string = "Вставай, соня, мы уже на месте.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (elsa).css('visibility','visible');
}
 if (count == 30) {
  var string = "А? Так быстро? Что-ж, пойду ка я домой, спасибо что подвезла.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (elsa).css('visibility','hidden');
$ (grey).css('visibility','visible');
}
 if (count == 31) {
  var string = "Не за что, отдохни как следует.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (elsa).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
if (count == 32) {
  var string = "Конечно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (grey).css('visibility','visible');
  $ (elsa).css('visibility','hidden');
}
 if (count == 33) {
  var string = "Несколько дней спустя";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (grey).css('visibility','hidden');

}
if (count == 34) {
  var string = "Хм, Нацу кого-то привел?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');

}
if (count == 35) {
  var string = "Привет, ты новенькая? Меня зовут Грей, а тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
}
if (count == 36) {
  var string = "Я Люси, приятно познакомиться. Надеюсь ваш мастер меня примет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (count == 37) {
  var string = "Макаров то? Не переживай, он не упустит возможности получить себе в гильдию заклинателя духов.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 38) {
  var string = "Что? Откуда ты ...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 39) {
  var string = "*Грей похлопал себя по бедру с той же стороны где у Люси висели ключи и улыбнулся*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 40) {
  var string = "Ах, ну да, а ты наблюдательный! А какая магия у тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 41) {
  var string = "Оооо, у Грея очень красивая магия!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 42) {
  var string = "А ты...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 43) {
  var string = "Эльза. Мы с Нацу и Греем в одной команде.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 44) {
  var string = "Я Люси, рада знакомству!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 45) {
  var string = "Взаимно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }

if (count == 46) {
  var string = "Так какая у тебя магия,Грей?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 47) {
  var string = "Лёд.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 48) {
  var string = "Вааа, покажи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 49) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 50) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','hidden');
var show = document.querySelector('.show');
$ (show).css('visibility','visible');
 }
 if (count == 51) {
  var string = "В общем как-то так...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
var show = document.querySelector('.show');
$ (show).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

if (count == 52) {
  var string = "Эльза права, у тебя и в правду очень красивая магия !";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 53) {
  var string = "Что-ж, спасибо. Но у Эльзы магия круче.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 54) {
  var string = "Она владеет магией перевооружения!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 }
if (count == 55) {
  var string = "А как это 'магия перевооружения'? Никогда раньше не встречала такую...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 56) {
  var string = "Я тебе потом как-то покажу. *Эльза подмигнула Люси и улыбнулась*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (count == 57) {
  var string = "Л-ладно...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
  if (count == 58) {
  var string = "ЭЭЭЙ ШПАНЬЁ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
}
  if (count == 59) {
  var string = "Ооой, кажется мне пора сваливать... Нацу прикрой меня.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','visible');

}
  if (count == 60) {
  var string = "Без проблем!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
$(natsu).css('visibility','visible');

}
if (count == 61) {
  var string = "Пасиба, за мной должок!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','visible');
$(natsu).css('visibility','hidden');
}
  if (count == 62) {
  var string = "Сочтемся.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
$(natsu).css('visibility','visible');

}
 if (count == 63) {
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
var next2 = document.querySelector('.next2');
  $ (next2).css('visibility','hidden'); 
   count = 0;
}
}
 }
}