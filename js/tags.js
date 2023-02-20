// 1)На общий класс кнопок делаемпеременую и вещаем слущателя
// 2)Потом сравниваем теги,через нодНаме оно пишет большими буквами тег ШТМЛ
// 3)Если теги не равен кнопке тогда уходим,а в противном случае мы нажали на кнопку!
// 4)Выбираем элементы подсвечивание благодаря добавлению класса
// 5)Делаем переменную для поиска активной кнопки
// 6)При нажатии кнопки первій раз будет налл,на налл нельзя повесить класс,а при втором нажатие считается тру
// 7)И мы делаем цикл ,если кнопка уже была нажата,она дает налл,а при следующих нажатиях она дает тру и мы можем с неё снимать активность
// 8)  Мы снимаем активность и вещаем другой кнопке,а с предедущей забираем
// 9)Меняем ИФ на ? єто современный метод.До знака вопрса проверяет,если налл или андефай то пропустит,а если что-то другое то выполнит условие

const containerBtn = document.querySelector('.js-tags');

containerBtn.addEventListener('click', onBtnChoice)

function onBtnChoice(event){
    if(event.target.nodeName !== 'BUTTON'){
    return
    }
    // console.log(event.target)

    const currentActionButton = document.querySelector('.tags__btn--active')
    
    // if(currentActionButton){
    // currentActionButton.classList.remove('tags__btn--active')
    // }
    currentActionButton?.classList.remove('tags__btn--active')

    event.target.classList.add('tags__btn--active');

    const selectTags = event.target.dataset.value;
    console.log(selectTags);
    
    // event.target.classList.toggle('tags__btn--active')
    // console.log(event.target.classList.toggle('tags__btn--active'))
}