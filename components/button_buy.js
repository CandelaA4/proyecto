class ButtonBuy {
  onClick = null;
  constructor(onClick) {
    this.onClick = onClick;
    this.createElement();
  }

  getTemplate = () => `
        <button  class="btn btn-danger">Comprar</button>
    `;

  createElement = () => {
    const div = document.getElementById("shopping_cart_btn");
    div.innerHTML = this.getTemplate();
    div.onclick = () => this.onClick();
  };

  updateElement = () => {
    this.createElement();
  };
}
