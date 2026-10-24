const colorInput = document.getElementById('color-input');
const box = document.getElementById('box');
const applyButton = document.getElementById('apply-btn');
const resetButton = document.getElementById('reset-btn');

const userService = colorInput && box
  ? new UserService(colorInput, box)
  : null;

if (applyButton && userService) {
  applyButton.addEventListener('click', function () {
    userService.applyColor();
  });
}

if (resetButton && userService) {
  resetButton.addEventListener('click', function () {
    userService.resetColor();
  });
}