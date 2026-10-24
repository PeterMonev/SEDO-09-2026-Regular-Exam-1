const colorInput = document.getElementById('color-input');
const box = document.getElementById('box');
const applyButton = document.getElementById('apply-btn');
const resetButton = document.getElementById('reset-btn');

if (applyButton && colorInput && box) {
  applyButton.addEventListener('click', function () {
    box.style.backgroundColor = colorInput.value;
  });
}

if (resetButton && colorInput && box) {
  resetButton.addEventListener('click', function () {
    colorInput.value = '';
    box.style.backgroundColor = '';
  });
}