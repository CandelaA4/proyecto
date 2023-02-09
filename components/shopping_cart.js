class ShoppingCartComponent {
  shoppingCart = null;
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
    this.createElement();
  }

  getTemplate = () => `
      <button class="btn btn-secondary my-3 my-sm-0" type="submit">
          <span id="cantidad-carrito">${this.shoppingCart.getTotalCount()}</span>
          <span>Mi carrito 🛒</span>
      </button>
        `;

  createElement = () => {
    const div = document.getElementById("shopping-cart");
    div.innerHTML = this.getTemplate();
    div.onclick = () => {
      window.location.replace("carrito.html");
    };
  };

  updateElement = () => {
    this.createElement();
  };
}
