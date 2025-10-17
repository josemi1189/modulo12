import { Particular, TourOperador } from "../controller/motor";
import { preciosParticular, preciosTour, reservas } from "../model/model";


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
   const particular = new Particular(reservas, preciosParticular);
   let subtotal = particular.calculaSubtotal();
   muestraDatos("caso1", "subtotal",subtotal.toString());
   let total = particular.calculaTotal(subtotal);
   muestraDatos("caso1", "total",total.toString());

}

const getDatosCaso2 = ():void => {
   const tourOperador = new TourOperador(reservas, preciosTour);
   let subtotal = tourOperador.calculaSubtotal();
   muestraDatos("caso2", "subtotal",subtotal.toString());
   let total = tourOperador.calculaTotal(subtotal);
   muestraDatos("caso2", "total",total.toString());

}


export const app = ():void => {
   
   getDatosCaso1();
   getDatosCaso2();

}