class Carrito {
  KEY = "shopping_cart";
  shopping_cart = [];
  store = null;
  constructor(store) {
    this.store = store;
  }

  addProduct = (product) => {
    const shopping_cart = this.store.get(this.KEY) ?? [];
    shopping_cart.push(product);

    this.store.push(shopping_cart, this.KEY);
  };

  getAllProduct = () => {
    return this.store.get(this.KEY) ?? [];
  };

  getProductById = (id) => {
    const shopping_cart = this.getAllProduct();
    return shopping_cart.find((product) => product.id === id);
  };

  removeProduct = (id) => {
    const shopping_cart = this.getAllProduct();
    const filter = shopping_cart.filter((product) => product.id !== id);
    this.store.push(filter, this.KEY);
  };

  deleteAll = () => {
    this.store.remove(this.KEY);
  };

  getTotalCount = () => {
    const shopping_cart = this.getAllProduct();
    return shopping_cart?.length || 0;
  };

  getTotalPrice = () => {
    const shopping_cart = this.getAllProduct();

    return shopping_cart.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  };
}
