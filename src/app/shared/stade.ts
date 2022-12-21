import { Complexe } from "./complexe";

export class Stade {
    id !: string ;
    capacite !: string;
    disponibilite !: string;
    description!: string;
    image!: string;
    supporteur!: boolean;
    prixParHeure!: string;
    complexe!: Complexe;

}