import { Complexe } from "./complexe";

export class Stade {
    id !: string ;
    capacite !: any;
    disponibilite !: string;
    description!: string;
    image!: string;
    supporteur!: boolean;
    prixParHeure!: string;
    complexe!: Complexe;

}