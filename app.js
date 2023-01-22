// let carrito = [];

// function Producto(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.disponible = true;
// }
// const producto2 = new Producto("JapaMala", 2000);
// const producto3 = new Producto("BhagavadGita", 1500);

// let productos = ["JapaMala", "MatDeYoga", "BhagavadGita"];
// console.log(productos);

// console.log(productos.push);

// const carritoo = [
//   { nombre: "JapaMala", precio: 2000 },
//   { nombre: "MatDeYoga", precio: 3000 },
//   { nombre: "BhagavadGita", precio: 1000 },
//   { nombre: "BhagavadGita", precio: 200 },
// ];

// let total = carritoo.reduce((accum, p) => {
//   return accum + p.precio;
// }, 0);
// console.log(total);

// let nuevoBoton = document.createElement("button");
// nuevoBoton.setAttribute("class", "btn btn-danger");
// nuevoBoton.textContent = "Agregar al carrito";

// doocument.querySelector("#carritoo").appendChild(nuevoBoton);

//la carga de los productos de forma dinamica en el frontend.
let carrito = [];

function actualizarTotalEnCarrito(carrito) {
  document.getElementById("cantidad-carrito").innerHTML = carrito.length;
}

const ButtonComponente = (producto, onClick, btnText) => {
  const container = document.createElement("div");
  container.setAttribute("class", "card container align-items-center p-3 mt-4");
  container.setAttribute("style", "width: 18rem;");

  //creo un nuevo texto
  const text = document.createElement("h2");
  text.innerHTML = producto.nombre;

  //creo un nuevo con el precio
  const precio = document.createElement("span");
  precio.innerHTML = "$" + producto.precio;
  //creo un nuevo botom
  let btnAgregarCarrito = document.createElement("button");
  btnAgregarCarrito.setAttribute("class", "btn btn-danger");
  btnAgregarCarrito.textContent = btnText;
  btnAgregarCarrito.onclick = () => {
    onClick(producto);
  };

  container.appendChild(text);
  container.appendChild(precio);
  if (btnText && onClick) container.appendChild(btnAgregarCarrito);

  return container;
};

function actualizarCantidadEnCarrito(carrito) {
  const total = carrito.reduce((acomulador, producto) => {
    console.log(producto);
    return acomulador + producto.precio;
  }, 0);

  document.getElementById("resument-total").innerHTML = "Total $" + total;
}

function actualizarListaCarritoDeCompra(carrito) {
  const resumen_div = document.getElementById(
    "resumen-de-compra-lista-de-productos"
  );

  resumen_div.innerHTML = null;
  carrito.forEach((producto) => {
    //creo un contendor
    const btnList = ButtonComponente(producto);

    resumen_div.appendChild(btnList);
  });
}

const ProductoDelete = (carrito, producto) => {
  const filterCarrito = carrito.filter(
    (producto_carrito) => producto_carrito.id != producto.id
  );
  actualizarListaCarritoDeCompra(filterCarrito);
  actualizarCantidadEnCarrito(filterCarrito);
  actualizarTotalEnfilterCarrito(filterCarrito);
  carrito = filterCarrito;
};

const ProductoAdd = (producto) => {
  //agrego al arreglo de carrito un nuevo producto
  console.log("ingreso");
  carrito.push({ ...producto, id: Math.random() });
  //actualizo la cantidad
  actualizarCantidadEnCarrito(carrito);
  actualizarTotalEnCarrito(carrito);
  actualizarListaCarritoDeCompra(carrito);
};

const productos = [
  { nombre: "JapaMala", precio: 2000 },
  { nombre: "MatDeYoga", precio: 3000 },
  { nombre: "BhagavadGita-1", precio: 1000 },
  { nombre: "BhagavadGita-2", precio: 200 },
];

///
actualizarCantidadEnCarrito(carrito);
actualizarTotalEnCarrito(carrito);

productos.forEach((producto) => {
  //creo un contendor
  const btnList = ButtonComponente(producto, ProductoAdd, "Agregar al carrito");
  document.getElementById("products-list").appendChild(btnList);
});
