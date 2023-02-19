const ref = {
  open: document.querySelector('[data-action="open-modal"]'),
  close: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

ref.open.addEventListener("click", openModalWindow);
ref.close.addEventListener("click", closeModalWindow);
ref.backdrop.addEventListener("click", onBackdropClose);

function openModalWindow(event) {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", closeModalEsc);
}

function closeModalWindow(event) {
  document.body.classList.remove("show-modal");
  window.removeEventListener("keydown", closeModalEsc);
}

function onBackdropClose(event) {
  if (event.currentTarget === event.target) {
    closeModalWindow();
  }
}

function closeModalEsc(event) {
  console.log(event.code);
  const ESC = "Escape";
  if (event.code === ESC) {
    closeModalWindow();
  }
}
