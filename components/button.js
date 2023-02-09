class CardButton {
  id = null;
  imgUrl = null;
  productName = null;
  price = null;
  element = null;
  constructor(item, onClick) {
    const { id, imgUrl, productName, price } = item;
    this.id = id;
    this.imgUrl = imgUrl;
    this.productName = productName;
    this.price = price;

    const div = document.createElement("div");
    div.innerHTML = this.getTemplate();
    div.onclick = () => onClick(item);
    this.element = div;
  }

  getTemplate = () => `
    <div id="btn-container">
    <img
      id="btn-container-img"
      src="${this.imgUrl}"
      alt="img"
    />
    <div id="btn-container-section">
      <h3 class="btn-text-white">${this.productName}</h3>
      <p class="btn-text-white">$${this.price}</p>
      <button  id="btn-${this.id}" class="btn btn-danger">Agregar</button>
    </div>
  </div>
    `;

  getElement = () => {
    return this.element;
  };
}
