type tipoHabitacion = "standard" | "suite";
export interface Reserva {
  tipoHabitacion: tipoHabitacion;
  pax: number;
  noches: number;
}
interface Precios {
   tipoHabitacion: tipoHabitacion;
   precio: number;
}
export const reservas:Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];
export const precios:Precios[] = [
   {
      tipoHabitacion: "standard",
      precio: 100,
   },
   {
      tipoHabitacion: "suite",
      precio: 150,
   }
]