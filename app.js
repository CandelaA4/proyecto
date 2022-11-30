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
