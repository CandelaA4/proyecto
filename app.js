let pago = prompt("¿Cual es tu metodo de pago?");

switch (pago) {
  case "efectivo":
    console.log("Pagas en efectivo");
    break;
  case "tarjeta":
    console.log("Pagas con tarjeta");
    break;
  case "mercadopago":
    console.log("pagas en mercado pago");
    break;
  default:
    console.log("Ninguna de las opciones anteriores");
    break;
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  alert("$");
}

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




