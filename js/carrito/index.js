const DELAY_SECONDS = 3;
const store = new Store();
const shoppingCart = new Carrito(store);
const time = new Time();

const handleOnCLickButtonBuy = async () => {
  Snackbar.show({ text: "Su compra ha finalizado correctamente" });
  shoppingCart.deleteAll();
  await time.delay(DELAY_SECONDS);
  window.location.replace("index.html");
};

const shoppingCartComponent = new ShoppingCartComponent(shoppingCart);
const shoppingCartResumen = new ShoppingCartResumen(shoppingCart);
const buttonBuy = new ButtonBuy(handleOnCLickButtonBuy);

//2) renderizar en una lista la data del store
const handleOnClick = (product) => {
  shoppingCart.removeProduct(product.id);
  shoppingCartResumen.updateElement();
  updateShoppinCart();
  renderData();
};

const renderData = () => {
  const list = document.getElementById("products-list");
  list.innerHTML = "";
  shoppingCart.getAllProduct()?.forEach((item) => {
    const card = new Item(item, handleOnClick);
    //renderizo el elemento
    list.appendChild(card.getElement());
  });
};

//3) agregar productos al carrito

//4) crear un boton carrito que se vaya actualizando
const updateShoppinCart = () => {
  shoppingCartComponent.updateElement();
};

//5) crear una pagina de detalle de carrito
//6) renderizar la lista de carrito
//7) tener la posiblidad de eliminar el carrito
//8) finalizar compra.
renderData();
