import { Reserva, reservas, preciosParticular, Precios, preciosTour, iva, costeDesayuno, descuentoTour } from "../model/model";

export class Hotel {
   reservas:Reserva[];
   precios:Precios[];

   constructor (reservas:Reserva[], precios:Precios[]) {
      this.reservas = reservas;
      this.precios = precios;
   }

   obtenerPrecio(tipoHabitacion:string, precios:Precios[]):number {
      let precioPorTipoHabitacion;
      precioPorTipoHabitacion = precios.find(precio => precio.tipoHabitacion === tipoHabitacion);
      
      if (!precioPorTipoHabitacion) {
         throw new Error(`No hay precio para tipo: ${tipoHabitacion}`);
      }
      return precioPorTipoHabitacion.precio;     
   }

   calculaCostePorPersonaAdicional(pax:number, noches:number):number {
      let coste:number = 0;
      const precioPorPersonaAdicional = 40;
      if (pax > 1) {
         coste = ((pax - 1)  * precioPorPersonaAdicional) * noches;
      }
      return coste;
   }

   desayunoIncluido(desayuno:boolean):number {

      if (desayuno) {
         return costeDesayuno;
      } else {
         return 0;
      }
   }


   calculaTotal(subtotal:number):number {      
      let total:number = parseFloat((subtotal * iva).toFixed(2));
      return total;
   }
}

export class Particular extends Hotel {

   constructor (reservas:Reserva[], precios:Precios[]) {

      super(reservas, precios);
   }

   calculaCostePorPersonaAdicional(pax:number, noches:number):number {
      let coste:number = 0;
      const precioPorPersonaAdicional = 40;
      if (pax > 1) {
         coste = ((pax - 1)  * precioPorPersonaAdicional) * noches;
      }

      return coste;
   }

   calculaSubtotal():number {
      
      let subtotal:number = 0;
      let precioReserva:number = 0;
      
      for (const reserva of reservas) { 
         let precioPorTipoHabitacion = this.obtenerPrecio(reserva.tipoHabitacion, preciosParticular);
         let costePersonaAdicional = this.calculaCostePorPersonaAdicional(reserva.pax, reserva.noches);
         let costeDesayuno = this.desayunoIncluido(reserva.desayuno)
         if (precioPorTipoHabitacion) {
            precioReserva = (precioPorTipoHabitacion * reserva.noches) + costePersonaAdicional + costeDesayuno;
            subtotal += precioReserva;
         }
      }
      subtotal = parseFloat(subtotal.toFixed(2));
      return subtotal;
   }
} 

export class TourOperador extends Hotel {

   constructor(reservas:Reserva[], precios:Precios[]){
     super(reservas, precios);
   }

   calculaSubtotal():number {
      let subtotal:number = 0;
      let precioReserva:number = 0;


      for (const reserva of reservas) {
         let precioPorTipoHabitacion = this.obtenerPrecio(reserva.tipoHabitacion, preciosTour);         
         let costePersonaAdicional = this.calculaCostePorPersonaAdicional(reserva.pax, reserva.noches);
         let costeDesayuno = this.desayunoIncluido(reserva.desayuno)
         precioReserva = ((precioPorTipoHabitacion * reserva.noches) + costePersonaAdicional + costeDesayuno);
         subtotal += precioReserva;
      }
      
      let descuento = this.calculaDescuento(subtotal);
      subtotal = subtotal - descuento;

      return subtotal;
   }

   calculaDescuento(subtotal:number):number {
      let descuento = (subtotal * descuentoTour);
      return descuento;
   }
} 

