// Modal inputs & button
const heightInput = document.getElementById('modal-y');
const widthInput = document.getElementById('modal-x');
const computeButton = document.getElementById('compute');
const resultBlock = document.getElementById('compute-result');

// Const
const calculateModalElem = document.querySelector('.calculate-modal');

const sqrtCmPrices = { // Коэфы по размерам
    lowerPrice: 0.5833333333,
    mediumPrice: 0.4259259259,
    bigPrice: 0.428541428
}
const typesOfSizes = { // Границы размеров
    lower: 3900 ,
    medium: 6200, 
    big: 7000
}
const minSize = { // Минимальные размеры
    x: 30,
    y: 30
};
const maxSize = { // Максимальные размеры
    x: 250,
    y: 250
}

// Calculate func
function calculate(width, height) {
    let sqrt = (width * height);

    if (sqrt < typesOfSizes.lower) return Math.floor(sqrtCmPrices.lowerPrice * sqrt);
    else if (sqrt < typesOfSizes.medium && sqrt > typesOfSizes.lower) return Math.floor(sqrtCmPrices.mediumPrice * sqrt);
    else if (sqrt > typesOfSizes.medium) return Math.floor(sqrtCmPrices.bigPrice * sqrt); 
}

// Modal func
function toggleCalculateModal() {
    calculateModalElem.classList.toggle('hidden');
}

// Value func
function setValuesInBlock(e) {
    e.preventDefault();

    let height = heightInput.value;
    let width = widthInput.value;

    let result = calculate(width, height);
    resultBlock.textContent = result;
}



// Event listeners
computeButton.addEventListener('click', e => setValuesInBlock(e));
calculateModalElem.addEventListener('click', e=> e.target === this ? e.target.toggle('hidden') : '');

