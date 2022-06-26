let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup_body');
let openPopupButton = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let popupBg2 = document.querySelector('.popup__bg2');
let openPopupButton2 = document.querySelectorAll('.open-popup2');
let popup2 = document.querySelector('.popup_body2');
let closePopupButton2 = document.querySelector('.close-popup2');
openPopupButton.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
      document.body.style.overflow = 'hidden'; // Убираем скролл для всей страницы
  })
});
openPopupButton2.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg2.classList.add('active'); // Добавляем класс 'active' для фона
      popup2.classList.add('active'); // И для самого окна
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
      document.body.style.overflow = 'hidden'; // Убираем скролл для всей страницы
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
  document.body.style.overflow = 'visible'; // Возвращаем скролл для всей страницы
});
closePopupButton2.addEventListener('click',() => {
  popupBg2.classList.remove('active');
  popup2.classList.remove('active');
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фон, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна 
      document.body.style.overflow = 'visible'; // Возвращаем скролл для всей страницы
  }
  if(e.target === popupBg2){
    popupBg2.classList.remove('active'); // Убираем активный класс с фона
    popup2.classList.remove('active');
    document.body.style.overflow = 'visible';
  }
});
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.strelka');
for (let elm of elements) {
  observer.observe(elm);
}
