//1) traer la data desde un json.
const data = [
  {
    id: "1",
    imgUrl:
      "https://d368r8jqz0fwvm.cloudfront.net/37553-product_lg/colchoneta-mat-basic.jpg",
    productName: "JapaMala",
    price: 2000,
  },
  {
    id: "2",
    imgUrl:
      "https://d368r8jqz0fwvm.cloudfront.net/37553-product_lg/colchoneta-mat-basic.jpg",
    productName: "MatDeYoga",
    price: 3000,
  },
  {
    id: "3",
    imgUrl:
      "https://d368r8jqz0fwvm.cloudfront.net/37553-product_lg/colchoneta-mat-basic.jpg",
    productName: "BhagavadGita-1",
    price: 1000,
  },
  {
    id: "4",
    imgUrl:
      "https://d368r8jqz0fwvm.cloudfront.net/37553-product_lg/colchoneta-mat-basic.jpg",
    productName: "BhagavadGita-2",
    price: 200,
  },
  {
    id: "4",
    imgUrl:
      "https://d368r8jqz0fwvm.cloudfront.net/37553-product_lg/colchoneta-mat-basic.jpg",
    productName: "BhagavadGita-2",
    price: 200,
  },
  {
    id: "4",
    imgUrl:
      "https://d368r8jqz0fwvm.cloudfront.net/37553-product_lg/colchoneta-mat-basic.jpg",
    productName: "BhagavadGita-2",
    price: 200,
  },
];

const store = new Store();

const shoppingCart = new Carrito(store);
const shoppingCartComponent = new ShoppingCartComponent(shoppingCart);

//2) renderizar en una lista la data del json
const handleOnClick = (product) => {
  addProductToShoppingCart(product);
};

data?.forEach((item) => {
  const card = new CardButton(item, handleOnClick);
  //renderizo el elemento
  document.getElementById("products-list").appendChild(card.getElement());
});

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

//5) crear una pagina de detalle de carrito
//6) renderizar la lista de carrito
//7) tener la posiblidad de eliminar el carrito
//8) finalizar compra.
