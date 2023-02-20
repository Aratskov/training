// 1)Делаем делегирование ищем кнопку,добавляем слушателя
// 2)Через classList.toggle добавляем или удаляем класс если он там уже есть
// 3)Теперь все запишем в обьект,то что выбрали,Через new Set;

const containerBtn = document.querySelector('.js-tags');
const selectedTags = new Set();

containerBtn.addEventListener('click', onBtnChoice)

function onBtnChoice(event){
    if(event.target.nodeName !== 'BUTTON'){
    return
    }

    const btn = event.target; 
    const repeat = btn.classList.contains('tags__btn--active');
    
    if(repeat){
        selectedTags.delete(btn.dataset.value);
    }else{
        selectedTags.add(btn.dataset.value);
    }
    
    btn.classList.toggle('tags__btn--active')
   
}