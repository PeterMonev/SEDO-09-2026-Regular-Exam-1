const colorInput = document.getElementById('color-input');
const box = document.getElementById('box');
const applyButton = document.getElementById('apply-btn');
const resetButton = document.getElementById('reset-btn');

const userService = colorInput && box
  ? new UserService(box)
  : null;

if (applyButton && userService) {
  applyButton.addEventListener('click', function () {
    userService.applyColor(colorInput.value);
  });
}

if (resetButton && userService) {
  resetButton.addEventListener('click', function () {
    colorInput.value = '';
    userService.resetColor();
  });
}