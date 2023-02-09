class Item {
  productName = null;
  price = null;
  element = null;
  constructor(item, onClick) {
    const { productName, price } = item;
    this.productName = productName;
    this.price = price;

    const div = document.createElement("div");
    div.innerHTML = this.getTemplate();
    div.onclick = () => onClick(item);
    this.element = div;
  }

  getTemplate = () => `
  <div class="item_container">
    <div>
      <p class="item_text">${this.productName}</p>
      <p class="item_text">${this.price}</p>
    </div>
    <button class="btn btn-warning">borrar</button>
  </div>
      `;

  getElement = () => {
    return this.element;
  };
}
