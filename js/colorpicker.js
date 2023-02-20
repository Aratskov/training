import { colors } from "./colors.js";

// Palette вещаем ему слушателя,чтоб отслеживать куда клацаем

const palette = document.querySelector(".js-palette");
const makeColor = colorContainer(colors);

palette.addEventListener("click", onPaletteContainer);

palette.insertAdjacentHTML("beforeend", makeColor);
// Через append вещаются объекты,а через insertAdjacentHTML строки

function colorContainer(event) {
  return event
    .map(({ hex, rgb }) => {
      return `
<div class="color-card">
<div><div><div> <div
class="color-swatch"
data-hex="${hex}"
data-rgb="${rgb}"
style="background-color: ${hex}"
></div></div></div></div>
 <div class="color-meta">
   <p>HEX: ${hex}</p>
   <p>RGB: ${rgb}</p>
 </div>
</div>`;
    })
    .join("");
}

function onPaletteContainer(event) {
  const colorActive = event.target.classList.contains("color-swatch");
  if (!colorActive) {
    return;
  }
  const swatchEl = event.target;
  const parentColorCard = swatchEl.closest(".color-card");

  removeActiveClass();
  addActiveClass(parentColorCard);
  setBodyColor(swatchEl.dataset.hex);
}

function setBodyColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveClass() {
  const currentActive = document.querySelector(".color-card.is-active");
  if (currentActive) {
    currentActive.classList.remove("is-active");
  }
}

function addActiveClass(event) {
  event.classList.add("is-active");
}

// function onPaletteContainer(event) {
// Мы проверяем класс,есть или нет при клике.
// Если кликнуть по ЦЕЛИ и оно совпадает с сolor-swatch,
// то берем в обработку это.В нашем случае,если не совпадает,то выходим
//   const colorActive = event.target.classList.contains("color-swatch")
// if (!colorActive) {
//   return;
// }

//   Теперь мы классу который выше нашего КОЛОР_СВАТЧ,должны повесить класс
//   через хитрый селектор,который ищет до первого совпадения

//   const swatchEl = event.target;
//   const parentColorCard = swatchEl.closest('.color-card');
//   const currentActive = document.querySelector('.color-card.is-active')

// УКАЗІВАЕМ ЕСЛИ КНОПКА ТРУ,ТО ТОГДА УДАЛЯЕМ КЛАСС АКТИВ,ЕСЛИ НАЛЛ,ТО ТОГДА ДОБАВЛЯЕМ КЛАСС
//   if(currentActive){
//       currentActive.classList.remove('is-active')
//   }
//   parentColorCard.classList.add('is-active')

// В КОНЦЕ ПОВЕШАЕМ ЦВЕТ НА ФОН
// document.body.style.backgroundColor = swatchEl.dataset.hex

//   }
