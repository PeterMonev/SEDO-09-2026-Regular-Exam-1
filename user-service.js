class UserService {
  constructor(colorInput, box) {
    this.colorInput = colorInput;
    this.box = box;
  }

  applyColor() {
    this.box.style.backgroundColor = this.colorInput.value;
  }

  resetColor() {
    this.colorInput.value = '';
    this.box.style.backgroundColor = '';
  }
}