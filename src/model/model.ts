type tipoHabitacion = "standard" | "suite";
export interface Reserva {
  tipoHabitacion: tipoHabitacion;
  desayuno: boolean,
  pax: number;
  noches: number;
}
export interface Precios {
   tipoHabitacion: tipoHabitacion;
   precio: number;
}
export const reservas:Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];
export const preciosParticular:Precios[] = [
   {
      tipoHabitacion: "standard",
      precio: 100,
   },
   {
      tipoHabitacion: "suite",
      precio: 150,
   }
]

export const preciosTour:Precios[] = [
   {
      tipoHabitacion: "standard",
      precio: 100,
   },
   {
      tipoHabitacion: "suite",
      precio: 100,
   }
]
export const iva:number = 1.21; // 21%
export const costeDesayuno:number = 15; // €
export const descuentoTour:number = 0.15; // %