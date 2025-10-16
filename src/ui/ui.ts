import { Hotel, TourOperador } from "../controller/motor";
import { reservas } from "../model/model";


const muestraDatos = (contenedor:string, clase:string, valor:string):void => {
   const divDatos = document.getElementById(contenedor);
   if (divDatos && divDatos instanceof HTMLDivElement) {
      const contenedor = document.createElement("span");
      contenedor.classList.add(clase);
      contenedor.textContent = valor;
      divDatos.appendChild(contenedor);
   }
}

const getDatosCaso1 = ():void => {
   const gestionReservas = new Hotel(reservas);
   let subtotal = gestionReservas.calculaSubtotal();
   muestraDatos("caso1", "subtotal",subtotal.toString());
   let total = gestionReservas.calculaTotal(subtotal);
   muestraDatos("caso1", "total",total.toString());

}

const getDatosCaso2 = ():void => {
   const gestionReservas = new TourOperador(reservas, 100);
   let subtotal = gestionReservas.calculaSubtotal();
   muestraDatos("caso2", "subtotal",subtotal.toString());
   let total = gestionReservas.calculaTotal(subtotal);
   muestraDatos("caso2", "total",total.toString());

}


export const app = ():void => {
   
   getDatosCaso1();
   getDatosCaso2();

}