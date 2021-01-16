let phrases = [
   { text: 'начать черкать карандашом экран', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
   { text: 'выйти с конфы со словами "инет плохой"', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
   { text: 'нет, НЕ сидя на уроке, дайте ссылку на конфу пж', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
   { text: 'стать патриотом школы', image: 'img/73фтл.jpg' }
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
   });