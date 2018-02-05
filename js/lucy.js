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
var chibielsa = document.querySelector('.chibielsa');
var chibihappy = document.querySelector('.chibihappy');
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


chibilucy.onclick = function chibilusy() {
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
  var string = "Портовый город Харгеон";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/hargeon.webp)');
 }

 if (counter == 3) {
  var string = "Чего? Всего один волшебный магазин на весь город? Эх,этот старпер уступил лишь штуку драгоценных. Моя красота стоит всего 1000!? Дешевка, я в бешенстве. Если я и вправду столько стою...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
  $ (lucy).css('visibility','visible');
  $ (happy).css('visibility','visible');
 }

 if (counter == 4) {
  var string = "Э? Кошка с крыльями?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 
 
 }
 if (counter == 5) {
  var string = "Ась? Я не кошка, я кот! Никогда не видела летающих котов?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible'); 
 $  (lucy).css('visibility','hidden');
 }
 if (counter == 6) {
  var string = "Ты ещё и разговаривать умеешь?! ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
  $ (happy).css('visibility','hidden');
 }
  if (counter == 7) {
  var string = "Конечно умеет, да Хэппи?)";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','visible');
  $ (lucy).css('visibility','hidden');
 }
  if (counter == 8) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible');

 }
   if (counter == 9) {
  var string = "Твоя татуировка! Ты из Хвоста Феи ?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');

 }
   if (counter == 10) {
  var string = "Ну да, а что?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','visible');
 $  (lucy).css('visibility','hidden');

 }
   if (counter == 11) {
  var string = "Какая удача, я как раз собиралась к вам идти!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
 $  (natsu).css('visibility','hidden');

 }
 if (counter == 12) {
  var string = "О, новое задание? Сколько платишь? Мы с Хэппи на мели так что возьмемся хоть сейчас!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','visible');
 $  (lucy).css('visibility','hidden');

 }
  if (counter == 13) {
  var string = "Агась! Нацу сделает всё , да к тому же в кротчайшие сроки!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible');

 }
  if (counter == 14) {
  var string = "Нет, нет, я не для заказа к вам иду, вы ошиблись...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','visible');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');

 }
  if (counter == 15) {
  var string = "Да? Жаль... Ну а зачем тогда?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
  if (counter == 16) {
  var string = "Может по мне и не скажешь, но я тоже волшебница! *Люси похлопала по связке ключей у себя на бедре*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','hidden');
 $  (lucy).css('visibility','visible');

 }
  if (counter == 17) {
  var string = "Заклинательница духов?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
  if (counter == 18) {
  var string = "Она самая!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (natsu).css('visibility','hidden');
 $  (lucy).css('visibility','visible');

 }
  if (counter == 19) {
  var string = "Шикоз, таких у нас ещё нет, айда с нами в гильдию!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (lucy).css('visibility','hidden');
 $  (natsu).css('visibility','visible');

 }
   if (counter == 20) {
  var string = "Айя! Мастер тебя быстро приймет!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','visible');
 $  (natsu).css('visibility','visible');
  $ (lucy).css('visibility','hidden');

 }
   if (counter == 21) {
  var string = "Ура! Спасибо вам, эээ... Нацу и Хэппи, верно? Я Люси, будем знакомы.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/stret.webp)');
 $  (happy).css('visibility','hidden');
 $  (natsu).css('visibility','hidden');
  $ (lucy).css('visibility','visible');

 }
  if (counter == 22) {
  var string = "Гильдия Хвост Феи ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (lucy).css('visibility','hidden');

 }
  if (counter == 23) {
  var string = "Вау, так это и есть гильдия Хвост Феи ? Огрооомная...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (lucy).css('visibility','visible');

 }
  if (counter == 24) {
  var string = "Агась!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (happy).css('visibility','visible');

 }
   if (counter == 25) {
  var string = "Заходи, не бойся, ребята не кусаются! Разве что некоторые... В любом случае! Я познакомлю тебя с остальными из своей команды.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
  $ (happy).css('visibility','hidden');
$ (lucy).css('visibility','hidden');
$ (natsu).css('visibility','visible');

 }
 if (counter == 26) {
  var string = "С кем первым познакомиться?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/guild.jpg)');
$ (natsu).css('visibility','hidden');
  var celsa = document.querySelector('.choseelsa');
  var cgrey = document.querySelector('.chosegrey');
$   (celsa).css('visibility','visible') ;
$ (cgrey).css('visibility','visible');
$ (celsa).css('cursor','pointer');
$ (cgrey).css('cursor','pointer');
var next = document.querySelector('.next');
$ (next).css('visibility','hidden');
 counter = 0;
 }
}

celsa.onclick = function cels(){
  var string = "Привет, ты новенькая? Меня зовут Эльза, а тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','visible');
$   (celsa).css('visibility','hidden') ;
$ (cgrey).css('visibility','hidden');
var next2 = document.querySelector('.next2');
$ (next2).css('visibility','visible');
 count =1;
next2.onclick = function nex2t(){
  console.log(count++);

if (count == 2) {
  var string = "Я Люси, приятно познакомиться. Надеюсь ваш мастер меня примет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
}
 if (count == 3) {
  var string = "Макаров то? Не переживай, он не упустит возможности получить себе в гильдию заклинателя духов.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }

 if (count == 4) {
  var string = "Что? Откуда ты ...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
if (count == 5) {
  var string = "*Эльза похлопала себя по бедру с той же стороны где у Люси висели ключи и улыбнулась*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (count == 6) {
  var string = "Ах, ну да, а ты наблюдательная! А какая магия у тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
if (count == 7) {
  var string = "Оооо, у Эльзы очень классная магия! Она владеет магией перевооружения!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 8) {
  var string = "А ты...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 9) {
  var string = "Грей. Мы с Нацу и Эльзой в одной команде.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 10) {
  var string = "Я Люси, рада знакомству!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 11) {
  var string = "Взаимно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }

if (count == 12) {
  var string = "А как это 'магия перевооружения'? Никогда раньше не встречала такую...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 13) {
  var string = "Я тебе потом как-то покажу. У Грея магия на много красивее моей.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (count == 14) {
  var string = "Правда?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 15) {
  var string = "Ага, он владеет магией льда.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }

 if (count == 16) {
  var string = "Вааа, покажи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 17) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 18) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','hidden');
var show = document.querySelector('.show');
$ (show).css('visibility','visible');
 }
 if (count == 19) {
  var string = "В общем как-то так...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
var show = document.querySelector('.show');
$ (show).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

if (count == 20) {
  var string = "Эльза права, у тебя и в правду очень красивая магия !";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 21) {
  var string = "Что-ж, спасибо.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
  if (count == 22) {
  var string = "ЭЭЭЙ ШПАНЬЁ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (grey).css('visibility','hidden');
}
 if (count == 23) {
  var string = "КИНКОНГ!!!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
 if (count == 24) {
  var string = "О, мастер, Вы уже вернулись?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
 if (count == 25) {
  var string = "Агась.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (elsa).css('visibility','hidden');
}
  if (count == 26) {
  var string = "О, а ты у нас новенькая?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (elsa).css('visibility','hidden');
}
if (count == 27) {
  var string = "Д-да...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
  if (count == 28) {
  var string = "Добро пожаловать!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/welcome.jpg)');
$ (lucy).css('visibility','hidden');
}
if (count == 29) {
  var string = "Э? Уменьшился? Так Вы и есть мастер!?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
}
 if (count == 30) {
  var string = "Он,самый. Мастер гильдии Хвост Феи Макаров.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
 if (count == 31) {
  var string = "Тебя как звать то ?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','hidden');
$ (makarov).css('visibility','visible');
}
if (count == 32) {
  var string = "Люси.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (makarov).css('visibility','hidden');
}
 if (count == 33) {
  var string = "Что-ж, Люси, пошли поставим тебе знак гильдии!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (makarov).css('visibility','visible');
}
if (count == 34) {
  var string = "Да!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (makarov).css('visibility','hidden');
}
if (count == 35) {
  var string = "*Чуть позже*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (makarov).css('visibility','hidden');
}
if (count == 36) {
  var string = "Зацени, Нацу, теперь у меня татушка Хвоста Феи!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/tatu.jpg)');

}
if (count == 37) {
  var string = "Чё, правда? Рад за тебя, Луиджи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/tatu.jpg)');
}
if (count == 38) {
  var string = "Я Люси! А что ты делаешь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
}
if (count == 39) {
  var string = "Выбираю задание за которое прилично отвалят.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (count == 40) {
  var string = "260 000 за то чтоб навалять каким-то бандитам! Люська, погнали!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
  $ (natsu).css('visibility','visible');
}
if (count == 41) {
  var string = "Э? Мне с тобой идти?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
}
if (count == 42) {
  var string = "Конечно, мы ж в одной команде. Но если ты не хочешь...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (count == 43) {
  var string = "Нет-нет, я в деле!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
}
if (count == 44) {
  var string = "Отлично!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (count == 44) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (happy).css('visibility','visible');
}
if (count == 45) {
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
$  (happy).css('visibility','hidden');
}
 }
 }



 cgrey.onclick = function cgr(){
  var string = "Привет, ты новенькая? Меня зовут Грей, а тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');
$   (celsa).css('visibility','hidden')  ;
$ (cgrey).css('visibility','hidden');
$ (celsa).css('cursor','default');
$ (cgrey).css('cursor','default');

var next2 = document.querySelector('.next2');
$ (next2).css('visibility','visible');
 count =1;
next2.onclick = function nex2t(){
  console.log(count++);

if (count == 2) {
  var string = "Я Люси, приятно познакомиться. Надеюсь ваш мастер меня примет.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
}
 if (count == 3) {
  var string = "Макаров то? Не переживай, он не упустит возможности получить себе в гильдию заклинателя духов.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 4) {
  var string = "Что? Откуда ты ...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 5) {
  var string = "*Грей похлопал себя по бедру с той же стороны где у Люси висели ключи и улыбнулся*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 6) {
  var string = "Ах, ну да, а ты наблюдательный! А какая магия у тебя?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
if (count == 7) {
  var string = "Оооо, у Грея очень красивая магия!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 8) {
  var string = "А ты...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 9) {
  var string = "Эльза. Мы с Нацу и Греем в одной команде.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 10) {
  var string = "Я Люси, рада знакомству!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 11) {
  var string = "Взаимно.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (elsa).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }

if (count == 12) {
  var string = "Так какая у тебя магия,Грей?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
 if (count == 13) {
  var string = "Лёд.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

 if (count == 14) {
  var string = "Вааа, покажи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 15) {
  var string = "...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }
 if (count == 16) {
  var string = "";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','hidden');
var show = document.querySelector('.show');
$ (show).css('visibility','visible');
 }
 if (count == 17) {
  var string = "В общем как-то так...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
var show = document.querySelector('.show');
$ (show).css('visibility','hidden');
$ (grey).css('visibility','visible');
 }

if (count == 18) {
  var string = "Эльза права, у тебя и в правду очень красивая магия !";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 19) {
  var string = "Что-ж, спасибо. Но у Эльзы магия круче.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (grey).css('visibility','visible');
$ (lucy).css('visibility','hidden');
 }
 if (count == 20) {
  var string = "Она владеет магией перевооружения!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 }
if (count == 21) {
  var string = "А как это 'магия перевооружения'? Никогда раньше не встречала такую...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (grey).css('visibility','hidden');
 }
 if (count == 22) {
  var string = "Я тебе потом как-то покажу. *Эльза подмигнула Люси и улыбнулась*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
 }
 if (count == 23) {
  var string = "Л-ладно...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
 $  (lucy).css('visibility','visible');
$ (elsa).css('visibility','hidden');
 }
  if (count == 24) {
  var string = "ЭЭЭЙ ШПАНЬЁ";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
}
 if (count == 25) {
  var string = "КИНКОНГ!!!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
 if (count == 26) {
  var string = "О, мастер, Вы уже вернулись?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
 if (count == 27) {
  var string = "Агась.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (elsa).css('visibility','hidden');
}
  if (count == 28) {
  var string = "О, а ты у нас новенькая?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (elsa).css('visibility','hidden');
}
if (count == 29) {
  var string = "Д-да...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/master.jpg)');
$ (lucy).css('visibility','visible');
}
  if (count == 30) {
  var string = "Добро пожаловать!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/welcome.jpg)');
$ (lucy).css('visibility','hidden');
}
if (count == 31) {
  var string = "Э? Уменьшился? Так Вы и есть мастер!?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
}
 if (count == 32) {
  var string = "Он,самый. Мастер гильдии Хвост Феи Макаров.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (elsa).css('visibility','visible');
}
 if (count == 33) {
  var string = "Тебя как звать то ?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (elsa).css('visibility','hidden');
$ (makarov).css('visibility','visible');
}
if (count == 34) {
  var string = "Люси.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (makarov).css('visibility','hidden');
}
 if (count == 35) {
  var string = "Что-ж, Люси, пошли поставим тебе знак гильдии!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (makarov).css('visibility','visible');
}
if (count == 36) {
  var string = "Да!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','visible');
$ (makarov).css('visibility','hidden');
}
if (count == 37) {
  var string = "*Чуть позже*";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/inside.jpg)');
$ (lucy).css('visibility','hidden');
$ (makarov).css('visibility','hidden');
}
if (count == 38) {
  var string = "Зацени, Нацу, теперь у меня татушка Хвоста Феи!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/tatu.jpg)');

}
if (count == 39) {
  var string = "Чё, правда? Рад за тебя, Луиджи.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/tatu.jpg)');
}
if (count == 40) {
  var string = "Я Люси! А что ты делаешь?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
}
if (count == 41) {
  var string = "Выбираю задание за которое прилично отвалят.";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (count == 42) {
  var string = "2 000 000 000 за то чтоб сжечь какую-то книжонку! Люська, погнали!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
  $ (natsu).css('visibility','visible');
}
if (count == 43) {
  var string = "Э? Мне с тобой идти?";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
}
if (count == 44) {
  var string = "Конечно, мы ж в одной команде. Но если ты не хочешь...";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (count == 45) {
  var string = "Нет-нет, я в деле!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','visible');
  $ (natsu).css('visibility','hidden');
}
if (count == 46) {
  var string = "Отлично!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (lucy2).css('visibility','hidden');
  $ (natsu).css('visibility','visible');
}
if (count == 47) {
  var string = "Айя!";
  var str = string.split("  ");
  document.getElementById("tuptext").innerHTML = str;
 $  (back).css('backgroundImage','url(../img/bord.jpg)');
 $  (happy).css('visibility','visible');
}
if (count == 48) {
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
}