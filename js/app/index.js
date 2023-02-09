//1) traer la data desde un json.
const api = new Api();

const store = new Store();

const shoppingCart = new Carrito(store);
const shoppingCartComponent = new ShoppingCartComponent(shoppingCart);

//2) renderizar en una lista la data del json
const handleOnClick = (product) => {
  addProductToShoppingCart(product);
};

const init = async () => {
  const data = await api?.getProducts();

  data?.forEach((item) => {
    const card = new CardButton(item, handleOnClick);
    //renderizo el elemento
    document.getElementById("products-list").appendChild(card.getElement());
  });
};
//3) agregar productos al carrito
const addProductToShoppingCart = (product) => {
  const { id, ...allValues } = product;
  const id_product = Math.random();
  shoppingCart.addProduct({
    id: id_product,
    ...allValues,
  });
  Snackbar.show({ text: "Se agrego un producto al carrito" });
  updateShoppinCart();
};
//4) crear un boton carrito que se vaya actualizando
const updateShoppinCart = () => {
  shoppingCartComponent.updateElement();
};

init();
