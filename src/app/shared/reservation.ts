import { Stade } from "./stade";

export class Reservation {
    id !: string;
    dateReservation !: Date;
    duree!: String;
    heureReservation!: String;
    prix!: boolean;
    stade!: Stade;
    nbr_j_m!: String;
    anonceIschecked!: any;
}