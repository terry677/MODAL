'use strict';
const modals = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
console.log(modals);
// function to close modal
const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
// function to open modal
const openModal = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});
