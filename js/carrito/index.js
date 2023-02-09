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


//2) agregar productos al carrito
const handleOnClick = (product) => {
  shoppingCart.removeProduct(product.id);
  shoppingCartResumen.updateElement();
  updateShoppinCart();
  renderData();
};

//2) renderizar en una lista la data del store
const renderData = () => {
  const list = document.getElementById("products-list");
  list.innerHTML = "";
  shoppingCart.getAllProduct()?.forEach((item) => {
    const card = new Item(item, handleOnClick);
    //renderizo el elemento
    list.appendChild(card.getElement());
  });
};



//4) crear un boton carrito que se vaya actualizando
const updateShoppinCart = () => {
  shoppingCartComponent.updateElement();
};

renderData();
