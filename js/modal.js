(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.modal.addEventListener("click", onBackdropClick);

  function onOpenModal() {
    window.addEventListener('keydown', onKeyPress);
    refs.modal.classList.toggle("is-hidden");
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onKeyPress);
    refs.modal.classList.toggle("is-hidden");
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }

  function onKeyPress(event) {
    const ESC_CODE = 'Escape';
    if (event.code === ESC_CODE) {
      onCloseModal();
    }
  }
})();