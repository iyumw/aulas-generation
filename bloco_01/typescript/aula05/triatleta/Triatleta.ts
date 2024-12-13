import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor {

	constructor(nome: string) {
        super(nome);
    }

    cansou(): void {
        throw new Error("Method not implemented.");
    }
    pedalar(): void {
        console.log("Pedalando...");
    }
    aquecer(): void {
        console.log("Aquecendo...");
    }
    nadar(): void {
        console.log("Nadando...");
    }
    correr(): void {
        console.log("Correndo...");
    }
}