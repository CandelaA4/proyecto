
let carrito = []
console.log(carrito);

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}
const producto2 = new Producto ("JapaMala", 2000);
const producto3 = new Producto ("BhagavadGita", 1500)

console.log(producto2);
console.log (producto3);

let productos = ["JapaMala", "MatDeYoga", "BhagavadGita"];
console.log(productos);

console.log(productos.push);

const carritoo =[
{nombre: "JapaMala", precio:2000},
{nombre: "MatDeYoga", precio: 3000},
{nombre: "BhagavadGita", precio:1000}
]
let total = carritoo.reduce((accum, p) => {return accum + p.precio;}, 0 ); 
console.log (total);

let nuevoBoton = document.createElement("button");
nuevoBoton.setAttribute("class", "btn btn-danger");
nuevoBoton.textContent = "Agregar al carrito";

doocument.querySelector("#carritoo").appendChild(nuevoBoton)





