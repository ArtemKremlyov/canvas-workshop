// Error modal
const successModal = document.querySelector('.success-modal');

// Blocks
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const form = document.querySelector('.modal__form');

// Inputs
const nameInput = document.getElementById('modal-name');
const numberInput = document.getElementById('modal-number');
const commentInput = document.getElementById('modal-comm');
const fileImg = document.getElementById('modal-img');

function modality(selectors) {
    selectors.map(elem => {
        document.querySelector(elem).addEventListener('click', toggleModal);
    })
    modal.addEventListener('click', function (e) {
        if(e.target === this) toggleModal('.modal');
    })
}
function toggleModal(selector) {
    modal.classList.toggle('hidden');
}

function showWindow() {
    successModal.classList.remove('hidden');
    setTimeout(() => successModal.classList.add('hidden'), 5000)
}

modality(['#call_modal_1', '#call_modal_2', '#call_modal_3', '#call_modal_4', '#call_modal_5', '#call_modal_111', '#call_modal_1111', '#call_modal_1']);





// 
const buttons = document.querySelectorAll('.button--transparent');
const priceModal = document.querySelector('.price-modal');

for(i = 0;i < buttons.length;i++) {
 buttons[i].addEventListener('click', function(e) {
     e.preventDefault();
     priceModal.classList.toggle('hidden');
 })   
}

priceModal.addEventListener('click', function(e) {
    if(e.target === this) priceModal.classList.toggle('hidden');
})