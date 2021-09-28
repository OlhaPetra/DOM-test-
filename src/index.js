const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

const { openModalBtn, closeModalBtn, backdrop } = refs;

openModalBtn.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onBackdropClick)


function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress)
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress)
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModal()
    }  
}

function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    if (e.code === ESC_KEY_CODE) {
    onCloseModal()
}
}