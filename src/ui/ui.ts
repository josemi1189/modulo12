import { Hotel } from "../controller/motor";
import { reservas } from "../model/model";


const muestraDatos = (clase:string, valor:string):void => {
   const divDatos = document.getElementById("datos");
   if (divDatos && divDatos instanceof HTMLDivElement) {
      const contenedor = document.createElement("span");
      contenedor.classList.add(clase);
      contenedor.textContent = valor;
      divDatos.appendChild(contenedor);
   }
}

const getDatos = ():void => {
   const gestionReservas = new Hotel(reservas);
   let subtotal = gestionReservas.calculaSubtotal();
   muestraDatos("subtotal",subtotal.toString());
   let total = gestionReservas.calculaTotal(subtotal);
   muestraDatos("total",total.toString());
   
   console.log(`Subtotal: ${subtotal} \nTotal: ${total}`);
}
export const app = ():void => {
   
   getDatos();

}