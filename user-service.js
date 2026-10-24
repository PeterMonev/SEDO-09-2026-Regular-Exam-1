class UserService {
  constructor(box) {
    this.box = box;
  }

  applyColor(color) {
    this.box.style.backgroundColor = color;
  }

  resetColor() {
    this.box.style.backgroundColor = '';
  }
}