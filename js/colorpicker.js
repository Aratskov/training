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
  // Мы проверяем класс,есть или нет при клике.
  // Если кликнуть по ЦЕЛИ и оно совпадает с сolor-swatch,
  // то берем в обработку это.В нашем случае,если не совпадает,то выходим

  if (!event.target.classList.contains("color-swatch")) {
    return;
  }
  console.log("All good");
}
