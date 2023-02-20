const form = document.querySelector('.js-register-form');
const checkbox = document.querySelector('.js-subscription')
const button = document.querySelector('.js-span')
const input = document.querySelector('.js-register-form input');
const btn = document.querySelector('.js-button')

form.addEventListener('submit', formValue);
checkbox.addEventListener('change', radioBtn);
input.addEventListener('input',btnName)


function formValue(event){
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const subscription = event.currentTarget.elements.subscription.value;
    console.log(email)
    button.textContent = email;
    const formData = {
        email,
        password,
        subscription
    }
    event.target.reset();
    
    console.log(formData)
}

function btnName(event){
 button.textContent = "Anonim";
if(event.currentTarget.value){
    button.textContent = event.currentTarget.value;
}
}

function radioBtn(event){
    // console.log(event.target.value)
    if(event.target.value === "YES"){
        btn.disabled = !event.target.checked
        return
    }
    
    return btn.disabled = true;
    // if(event.target.value === 'free'){
    // console.log("nj abuyz")
    // }
}
















const ref = {
  open: document.querySelector('[data-action="open-modal"]'),
  close: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

ref.open.addEventListener("click", openModalWindow);
ref.close.addEventListener("click", closeModalWindow);
ref.backdrop.addEventListener("click", onBackdropClose);

function openModalWindow() {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", closeModalEsc);
}

function closeModalWindow() {
  document.body.classList.remove("show-modal");
  window.removeEventListener("keydown", closeModalEsc);
}

function onBackdropClose(event) {
  if (event.currentTarget === event.target) {
    closeModalWindow();
  }
}

function closeModalEsc(event) {
  if (event.code === "Escape") {
    closeModalWindow();
  }
}


