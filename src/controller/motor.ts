import { Reserva, reservas, precios } from "../model/model";

export class Hotel {
   reservas:Reserva[];

   constructor (reservas:Reserva[]) {
      this.reservas = reservas;
   }

   _calculaCostePorPersonaAdicional(pax:number, noches:number):number {
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
         let precioPorTipoHabitacion = precios.find(precio => reserva.tipoHabitacion === precio.tipoHabitacion);
         
         if (precioPorTipoHabitacion) {
            let costePersonaAdicional = this._calculaCostePorPersonaAdicional(reserva.pax, reserva.noches);
            precioReserva = ((precioPorTipoHabitacion.precio * reserva.noches) + costePersonaAdicional);
            subtotal += precioReserva;
         }
      }
      return subtotal;
   }

   calculaTotal(subtotal:number) {
      const iva = 21; // %
      return subtotal + (subtotal * iva) / 100;
   }


}

export class TourOperador extends Hotel {
   precioHabitacion:number;

   constructor(reservas:Reserva[], precioHabitacion:number){
     super(reservas);
     this.precioHabitacion = precioHabitacion;
   }

   calculaSubtotal():number {
      let subtotal:number = 0;
      let precioReserva:number = 0;
      
      for (const reserva of reservas) {        
         let costePersonaAdicional = this._calculaCostePorPersonaAdicional(reserva.pax, reserva.noches);
         precioReserva = ((this.precioHabitacion * reserva.noches) + costePersonaAdicional);
         subtotal += precioReserva;
      }
      let descuento = this._calculaDescuento(subtotal);
      subtotal = subtotal - descuento;
      return subtotal;
   }

   _calculaDescuento(subtotal:number):number {
      const dtoAplicado = 15; // %
      let descuento = (subtotal * dtoAplicado) / 100;
      return descuento;
   }

   _calculaIva(subtotal:number):number {
       const iva = 21; // %

       return (subtotal * iva) / 100;
   }

   calculaTotal(subtotal:number) {
      let iva = this._calculaIva(subtotal);
      return subtotal + iva;
   }
}

