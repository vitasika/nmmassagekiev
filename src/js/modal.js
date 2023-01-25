// (() => {
//     const refs = {
//         openModalBtn: document.querySelector('[data-modal-open]'),
//         closeModalBtn: document.querySelector('[data-modal-close]'),
//         modal: document.querySelector('[data-modal]'),
//     };

//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);

//     function toggleModal() {
//         refs.modal.classList.toggle('is-hidden');
//     }
// })();


const openModalBtn=document.querySelector('[data-modal-open]');
const closeModalBtn=document.querySelector('[data-modal-close]');
const modal=document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
}