let phrases = [
   { text: 'черкать карандашом экран',                         image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
   { text: 'вылететь с конфы со словами "инет или тимс?"',     image: 'img/turtle.png'},
   { text: 'нет, НЕ сидя на уроке, дайте ссылку на конфу пж',  image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
   { text: 'стать патриотом школы',                            image: 'img/73фтл.jpg'},
   { text: 'расставлять книги по полке',                       image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png'},
   { text: 'читать новости',                                   image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png'},
   { text: 'смотреть сериал',                                  image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png'},
   { text: 'посмотреть что пишут в WhatsApp и Telegram',       image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png'},
   { text: 'рисовать в тетради',                               image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
   { text: 'стать партнёром Казахтелеком и вылететь с урока',  image: 'img/kazakhtelecom.png'},
];

function getRandomElement(arr) {
   let randIndex = Math.floor(Math.random() * arr.length);
   return arr[randIndex];
}

   let button = document.querySelector('.button');
   let phrase = document.querySelector('.phrase');
   let advice = document.querySelector('.advice');
   let image = document.querySelector('.image');

   button.addEventListener('click', function () {
      let randomElement = getRandomElement(phrases);
      smoothly(phrase, 'textContent', randomElement.text)
      smoothly(image, 'src', randomElement.image)

      if (randomElement.text.length > 35) {
         advice.style.fontSize = '33px';
       } else {
         advice.style.fontSize = '42px';
       }

      if (randomElement.text.length = 36) {
         image.style.width = '60%';
       } else {
         image.style.width = '80%';
       }
   });