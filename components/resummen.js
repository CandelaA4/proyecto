class ShoppingCartResumen {
  shoppingCart = null;
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
    this.createElement();
  }

  getTemplate = () => `
      <h3>Cantidad de productos: ${this.shoppingCart.getTotalCount()}</h3>
      <h3>Total: $${this.shoppingCart.getTotalPrice()}</h3>      
  `;

  createElement = () => {
    const div = document.getElementById("shopping_cart_resume");
    div.innerHTML = this.getTemplate();
  };

  updateElement = () => {
    this.createElement();
  };
}
