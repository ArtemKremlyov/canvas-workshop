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
        if(e.target === this) toggleModal();
    })
}
function toggleModal() {
    modal.classList.toggle('hidden');
}

function showWindow() {
    successModal.classList.remove('hidden');
    setTimeout(() => successModal.classList.add('hidden'), 5000)
}

modality(['#call_modal_1','#call_modal_2','#call_modal_3','#call_modal_4','#call_modal_5'])