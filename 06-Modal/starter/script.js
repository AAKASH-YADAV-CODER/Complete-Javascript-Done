'use strict';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');
console.log(btnopenmodal);

// for (let i = 0; i < btnopenmodal; i++)
// console.log(btnopenmodal[i].textContent);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for (let i = 0; i < btnopenmodal.length; i++) {
    console.log(btnopenmodal[i].addEventListener('click', openModal));
}
btnclosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});