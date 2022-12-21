import { Stade } from "./stade";

export class Reservation {
    id !: string;
    dateReservation !: Date;
    duree!: String;
    heureReservation!: String;
    prix!: boolean;
    stade!: Stade;
   
}