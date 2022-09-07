let cantidad = 0;
let precio = 0;
let costo= 0;
let seguirCotizando = false;


let nombreIngresado= prompt ("Hola! Cotizamos tu paquete Disney! ¿Cual es tu nombre?");
let correoIngresado= prompt ("Hola "+ nombreIngresado+ "! Dejanos tu correo electronico" );



do{
    let producto= prompt ("¿Que te gustaría cotizar? Hotel+Tickets , Solo Hotel, Solo Tickets, Memory Maker, Plan de Comidas, Tour VIP", "Ej:Hotel+Tickets");
    cantidad = parseInt (prompt("¿Cuantas personas viajan?"));

 switch (producto){
    case 'Hotel+Tickets':
        precio= 3000
        break;
    case 'Solo Hotel':
        precio= 2500
        break;
    case 'Solo Tickets':
        precio= 1000
        break;
    case "Memory Maker":
          costo = 200;
        break;
    case "Plan de Comidas":
          costo = 600;
        break;
    case "Tour VIP":
          costo = 1500;
        break;    
    default:
    alert ("No se ajusta a lo que buscas? Dejanos tu contacto!");
    precio=0
  }

  seguirCotizando= confirm("¿Quieres agregar más cosas a tu paquete?");

} while (seguirCotizando);

console.log(precio)
console.log(cantidad)
let precioTotal = (precio * cantidad) + (costo * cantidad);


alert ('El costo total del paquete es de: $ '+precioTotal);


let finalizarCotizacion= confirm("¿Desea finalizar su cotización?")

if(finalizarCotizacion) alert ("Tu cotización ha sido enviada a tu correo electronico!");
if (!finalizarCotizacion) alert ("Consultanos tus dudas por whatsapp!");